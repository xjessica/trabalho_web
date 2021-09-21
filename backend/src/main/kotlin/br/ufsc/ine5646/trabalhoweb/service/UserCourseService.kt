package br.ufsc.ine5646.trabalhoweb.service

import br.ufsc.ine5646.trabalhoweb.model.UserCourseDto
import br.ufsc.ine5646.trabalhoweb.model.UserRepository
import org.springframework.stereotype.Component
import java.security.Principal

@Component
class UserCourseService(
    private val userRepository: UserRepository
){

    fun getUserSubjects(principal: Principal): UserCourseDto {
        return userRepository
            .findByEmail(principal.name)
            ?.course
            ?.let(::UserCourseDto) ?: throw UserNotFoundException()
    }

    fun complete(principal: Principal, subjectId: String): UserCourseDto {
        val user = userRepository.findByEmail(principal.name) ?: throw UserNotFoundException()
        val updatedCourse = user.course.complete(subjectId)
        userRepository.save(user.copy(course = updatedCourse))
        return UserCourseDto(updatedCourse)
    }

    fun unmark(principal: Principal, subjectId: String): UserCourseDto {
        val user = userRepository.findByEmail(principal.name) ?: throw UserNotFoundException()
        val updatedCourse = user.course.unmark(subjectId)
        userRepository.save(user.copy(course = updatedCourse))
        return UserCourseDto(updatedCourse)
    }

}