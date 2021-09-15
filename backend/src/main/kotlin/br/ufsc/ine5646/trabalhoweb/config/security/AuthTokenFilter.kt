package br.ufsc.ine5646.trabalhoweb.config.security

import br.ufsc.ine5646.trabalhoweb.service.CustomUserDetailService
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource
import org.springframework.stereotype.Component
import org.springframework.util.StringUtils
import org.springframework.web.filter.OncePerRequestFilter
import javax.servlet.FilterChain
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@Component
class AuthTokenFilter(
    private val userDetailService: CustomUserDetailService,
    private val jwtUtils: JwtUtils
) : OncePerRequestFilter() {

    override fun doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, chain: FilterChain) {
        parseJwt(request)
            ?.takeIf(jwtUtils::isValidJwtToken)
            ?.let { token ->
                userDetailService
                    .loadUserByUsername(jwtUtils.getUserNameFromJwtToken(token))
                    .let(UserDetails::toUsernamePasswordAuthenticationToken)
                    .apply {
                       details = WebAuthenticationDetailsSource().buildDetails(request)
                    }.let { authentication -> SecurityContextHolder.getContext().authentication = authentication }
            }
        chain.doFilter(request, response);
    }

    private fun parseJwt(request: HttpServletRequest): String? {
        return request
            .getHeader("Authorization")
            ?.takeIf(StringUtils::hasText)
            ?.takeIf { header -> header.startsWith("Bearer ") }
            ?.let { header -> header.substring(7, header.length) }
    }

}

private fun UserDetails.toUsernamePasswordAuthenticationToken(): UsernamePasswordAuthenticationToken {
    return UsernamePasswordAuthenticationToken(this, null, authorities)
}