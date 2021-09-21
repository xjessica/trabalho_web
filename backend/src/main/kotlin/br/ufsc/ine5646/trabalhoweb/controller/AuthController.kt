package br.ufsc.ine5646.trabalhoweb.controller

import br.ufsc.ine5646.trabalhoweb.model.JwtResponse
import br.ufsc.ine5646.trabalhoweb.model.LoginDTO
import br.ufsc.ine5646.trabalhoweb.model.UserDTO
import br.ufsc.ine5646.trabalhoweb.service.UserSignInService
import br.ufsc.ine5646.trabalhoweb.service.UserSignUpService
import org.springframework.http.HttpStatus
import org.springframework.validation.FieldError
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.MethodArgumentNotValidException
import org.springframework.web.bind.annotation.*
import javax.servlet.http.HttpServletRequest
import javax.validation.Valid


@RestController
@Validated
@RequestMapping("/api/auth")
class AuthController(
    private val userSignUpService: UserSignUpService,
    private val userSignInService: UserSignInService
) {

    @PostMapping("/signup")
    fun create(@Valid @RequestBody userDTO: UserDTO) {
        userSignUpService.signUp(userDTO)
    }

    @PostMapping("/signin")
    fun signIn(@Valid @RequestBody loginDto: LoginDTO): JwtResponse {
        return userSignInService.signIn(loginDto)
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException::class)
    fun handleSubsequentDependency(
        httpServletRequest: HttpServletRequest,
        exception: MethodArgumentNotValidException
    ): Map<String, String?> {
       return exception.bindingResult.allErrors.associate { (it as FieldError).field to it.defaultMessage }
    }

}