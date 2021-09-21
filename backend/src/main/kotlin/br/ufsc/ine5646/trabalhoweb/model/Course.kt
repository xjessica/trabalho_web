package br.ufsc.ine5646.trabalhoweb.model

import br.ufsc.ine5646.trabalhoweb.model.SubjectStatus.COMPLETE
import br.ufsc.ine5646.trabalhoweb.model.SubjectStatus.PENDING
import br.ufsc.ine5646.trabalhoweb.service.SubsequentSubjectDependencyException
import com.fasterxml.jackson.annotation.JsonIgnore
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.repository.MongoRepository

interface CourseRepository : MongoRepository<Course, String>

@Document
data class Course(@Id val code: String, val name: String, val subjects: List<Subject>) {

    fun complete(subjectId: String): Course {
        val subject = subjects.first { it.id == subjectId }
        if (subject.isComplete()) return this
        val missingRequirements = subjects
            .filter { it.id in subject.requires }
            .filter(Subject::isPending)
            .map(Subject::id)

        return when {
            missingRequirements.isEmpty() -> copy(subjects = subjects.toMutableList().apply {
                this[indexOf(subject)] = subject.copy(status = COMPLETE)
            })
            else -> throw SubsequentSubjectDependencyException(missingRequirements)
        }
    }

    fun unmark(subjectId: String): Course {
        val subject = subjects.first { it.id == subjectId }
        if (subject.isPending()) return this
        val completedSubsequentSubjects = subjects
            .filter { subject.id in it.requires }
            .filter(Subject::isComplete)
            .map(Subject::id)
        return when {
            completedSubsequentSubjects.isEmpty() -> copy(subjects = subjects.toMutableList().apply {
                this[indexOf(subject)] = subject.copy(status = PENDING)
            })
            else -> throw SubsequentSubjectDependencyException(completedSubsequentSubjects)
        }
    }

}

data class Subject(
    val id: String,
    val name: String,
    val phase: Int,
    val requires: List<String>,
    val status: SubjectStatus = PENDING
) {

    @JsonIgnore
    fun isComplete() = COMPLETE == status
    @JsonIgnore
    fun isPending() = PENDING == status

}

enum class SubjectStatus {

    PENDING,
    COMPLETE

}

data class UserCourseDto(val courseSubjects: Map<Int, List<Subject>>) {

    constructor(course: Course) : this(course.subjects.groupBy(Subject::phase))

}

data class MissingRequirementsDto(val missingRequirements: List<String>)
data class SubsequentDependenciesDto(val missingRequirements: List<String>)

