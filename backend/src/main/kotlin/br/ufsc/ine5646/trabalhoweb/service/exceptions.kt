package br.ufsc.ine5646.trabalhoweb.service

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.ResponseStatus

@ResponseStatus(value = HttpStatus.UNPROCESSABLE_ENTITY, reason = "Usuário não encontrado")
class UserNotFoundException : RuntimeException()

@ResponseStatus(value = HttpStatus.UNPROCESSABLE_ENTITY, reason = "Pré-requisitos não cumpridos")
class UnmetRequirementsException(val requiredSubjectIds: List<String>) : RuntimeException("Pré-requisitos necessários: $requiredSubjectIds")