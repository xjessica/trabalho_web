package br.ufsc.ine5646.trabalhoweb.controller

import br.ufsc.ine5646.trabalhoweb.model.MissingRequirementsDto
import br.ufsc.ine5646.trabalhoweb.model.SubsequentDependenciesDto
import br.ufsc.ine5646.trabalhoweb.model.UserCourseDto
import br.ufsc.ine5646.trabalhoweb.service.SubsequentSubjectDependencyException
import br.ufsc.ine5646.trabalhoweb.service.UnmetRequirementsException
import br.ufsc.ine5646.trabalhoweb.service.UserCourseService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.*
import java.security.Principal
import javax.servlet.http.HttpServletRequest


@RestController
@RequestMapping("/api/course")
class UserCourseController(
    private val userCourseService: UserCourseService
) {

    @GetMapping
    @PreAuthorize("hasRole('USER')")
    fun list(principal: Principal): UserCourseDto {
        return userCourseService.getUserSubjects(principal)
    }

    @PutMapping("/{subjectId}")
    @PreAuthorize("hasRole('USER')")
    fun complete(principal: Principal, @PathVariable("subjectId") subjectId: String): UserCourseDto {
        return userCourseService.complete(principal, subjectId)
    }

    @DeleteMapping("/{subjectId}")
    @PreAuthorize("hasRole('USER')")
    fun unmark(principal: Principal, @PathVariable("subjectId") subjectId: String): UserCourseDto {
        return userCourseService.unmark(principal, subjectId)
    }

    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    @ExceptionHandler(UnmetRequirementsException::class)
    fun handleUnmetRequirements(
        httpServletRequest: HttpServletRequest,
        exception: UnmetRequirementsException
    ): ResponseEntity<MissingRequirementsDto> {
        return ResponseEntity.unprocessableEntity().body(MissingRequirementsDto(exception.requiredSubjectIds))
    }

    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    @ExceptionHandler(SubsequentSubjectDependencyException::class)
    fun handleSubsequentDependency(
        httpServletRequest: HttpServletRequest,
        exception: SubsequentSubjectDependencyException
    ): ResponseEntity<SubsequentDependenciesDto> {
        return ResponseEntity.unprocessableEntity().body(SubsequentDependenciesDto(exception.subsequentSubjects))
    }

}