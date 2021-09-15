package br.ufsc.ine5646.trabalhoweb.model

import br.ufsc.ine5646.trabalhoweb.model.SubjectStatus.COMPLETE
import br.ufsc.ine5646.trabalhoweb.model.SubjectStatus.PENDING
import br.ufsc.ine5646.trabalhoweb.service.UnmetRequirementsException
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.repository.MongoRepository

interface CourseRepository : MongoRepository<Course, String>

@Document
data class Course(@Id val code: String, val name: String, val subjects: List<Subject>) {

    fun complete(subjectId: String): Course {
        val subject = subjects.first { it.id == subjectId }
        val missingRequirements = subjects
            .filter { it.id in subject.requires }
            .filterNot(Subject::isComplete)
            .map(Subject::id)

        return when {
            missingRequirements.isEmpty() -> copy(subjects = subjects.toMutableList().apply {
                this[indexOf(subject)] = subject.copy(status = COMPLETE)
            })
            else -> throw UnmetRequirementsException(missingRequirements)
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

    fun isComplete() = COMPLETE == status

}

enum class SubjectStatus {

    PENDING,
    COMPLETE

}

data class UserCourseDto(val courseSubjects: Map<Int, List<Subject>>) {

    constructor(course: Course) : this(course.subjects.groupBy(Subject::phase))

}

data class MissingRequirementsDto(val missingRequirements: List<String>)
