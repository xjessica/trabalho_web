package br.ufsc.ine5646.trabalhoweb.model

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.index.Indexed
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.repository.MongoRepository
import javax.validation.constraints.Email
import javax.validation.constraints.NotBlank

private const val emailRegex =
    "(?:[a-z0-9!#\$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#\$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])"

data class JwtResponse(
    val token: String,
    val type: String = "Bearer",
    val email: String,
    val roles: List<String>
)

data class LoginDTO(
    @field:NotBlank(message = "{email.required}")
    @field:Email(message = "{email.invalid}", regexp = emailRegex)
    val email: String,
    @field:NotBlank(message = "{password.required}")
    val rawPassword: String
)

data class UserDTO(
    @field:NotBlank(message = "{name.required}")
    val name: String,
    @field:NotBlank(message = "{email.required}")
    @field:Email(message = "{email.invalid}", regexp = emailRegex)
    val email: String,
    @field:NotBlank(message = "{password.required}")
    val rawPassword: String,
    @field:NotBlank(message = "{course.required}")
    val courseCode: String
)


@Document
data class User(
    @field:Id val userId: ObjectId,
    val name: String,
    val encryptedPassword: String,
    val course: Course,
    @field:Indexed(unique = true)
    val email: String
)

interface UserRepository : MongoRepository<User, ObjectId> {

    fun existsByEmail(email: String): Boolean

    fun findByEmail(email: String): User?

}