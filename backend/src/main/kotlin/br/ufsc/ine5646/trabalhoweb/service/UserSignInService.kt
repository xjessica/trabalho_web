package br.ufsc.ine5646.trabalhoweb.service

import br.ufsc.ine5646.trabalhoweb.config.security.JwtUtils
import br.ufsc.ine5646.trabalhoweb.model.JwtResponse
import br.ufsc.ine5646.trabalhoweb.model.LoginDTO
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.stereotype.Service

@Service
class UserSignInService(
    private val jwtUtils: JwtUtils,
    private val authenticationManager: AuthenticationManager
) {

    fun signIn(loginRequest: LoginDTO): JwtResponse {
        val authentication = authenticationManager.authenticate(
            UsernamePasswordAuthenticationToken(loginRequest.email, loginRequest.rawPassword)
        ).also(SecurityContextHolder.getContext()::setAuthentication)

        val userDetails = authentication.principal as UserDetails

        return JwtResponse(
            token = jwtUtils.generateJwtToken(authentication),
            email= userDetails.username,
            roles = userDetails.authorities.map(GrantedAuthority::getAuthority)
        )
    }

}