package br.ufsc.ine5646.trabalhoweb.config.security

import io.jsonwebtoken.*
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Value
import org.springframework.security.core.Authentication
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.stereotype.Component
import java.util.*
import io.jsonwebtoken.SignatureAlgorithm;

@Component
class JwtUtils(
    @Value("\${jwtSecret}")
    private val jwtSecret: String,
    @Value("\${jwtExpirationMs}")
    private val jwtExpirationMs: Int
) {

    companion object {
        private val logger = LoggerFactory.getLogger(JwtUtils::class.java)
    }

    fun generateJwtToken(authentication: Authentication): String {
        val userPrincipal = authentication.principal as UserDetails
        return Jwts.builder()
            .setSubject(userPrincipal.username)
            .setIssuedAt(Date())
            .setExpiration(Date(Date().time + jwtExpirationMs))
            .signWith(SignatureAlgorithm.HS512, jwtSecret)
            .compact()
    }

    fun getUserNameFromJwtToken(token: String?): String {
        return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).body.subject
    }

    fun isValidJwtToken(authToken: String?): Boolean {
        return runCatching { Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken) }
            .onFailure { e -> logger.error(e::class.qualifiedName, e.message) }
            .isSuccess
    }
}