package br.ufsc.ine5646.trabalhoweb.service

import br.ufsc.ine5646.trabalhoweb.model.User
import br.ufsc.ine5646.trabalhoweb.model.UserRepository
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service

@Service
class CustomUserDetailService(private val userRepository: UserRepository) : UserDetailsService {

    override fun loadUserByUsername(email: String?): UserDetails {
        return email
                ?.let(userRepository::findByEmail)
                ?.toUserDetails() ?: throw UsernameNotFoundException("")
    }

    private fun User.toUserDetails(): UserDetails {
        return org.springframework.security.core.userdetails.User(
            email,
            encryptedPassword,
            listOf(SimpleGrantedAuthority("ROLE_USER"))
        )
    }

}