package br.ufsc.ine5646.trabalhoweb

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity

@SpringBootApplication
@EnableWebSecurity
class TrabalhoWebApplication

fun main(args: Array<String>) {
	runApplication<TrabalhoWebApplication>(*args)
}
