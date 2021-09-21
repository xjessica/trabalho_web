package br.ufsc.ine5646.trabalhoweb.service

import br.ufsc.ine5646.trabalhoweb.model.CourseRepository
import br.ufsc.ine5646.trabalhoweb.model.User
import br.ufsc.ine5646.trabalhoweb.model.UserDTO
import br.ufsc.ine5646.trabalhoweb.model.UserRepository
import org.bson.types.ObjectId
import org.springframework.data.repository.findByIdOrNull
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Service
import java.lang.IllegalArgumentException

@Service
class UserSignUpService(
    private val userRepository: UserRepository,
    private val courseRepository: CourseRepository,
    private val bcrypt: BCryptPasswordEncoder,
) {

    fun signUp(userDTO: UserDTO) {
        if (!userRepository.existsByEmail(userDTO.email)) {
            userRepository.save(map(userDTO))
        } else throw DuplicateUserException()
    }

    private fun map(userDTO: UserDTO): User {
        return User(
            userId = ObjectId(),
            name = userDTO.name,
            encryptedPassword = bcrypt.encode(userDTO.rawPassword),
            courseRepository.findByIdOrNull(userDTO.courseCode) ?: throw CourseNotFoundException(),
            userDTO.email
        )
    }

}