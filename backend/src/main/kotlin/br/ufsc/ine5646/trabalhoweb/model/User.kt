package br.ufsc.ine5646.trabalhoweb.model

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.index.Indexed
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.repository.MongoRepository
import javax.validation.constraints.Email
import javax.validation.constraints.NotEmpty
import javax.validation.constraints.NotNull

data class JwtResponse(
    val token: String,
    val type: String = "Bearer",
    val email: String,
    val roles: List<String>
)

data class LoginDTO(
    @NotNull @NotEmpty @Email val email: String,
    @NotNull @NotEmpty val rawPassword: String
)

data class UserDTO(
    @NotNull @NotEmpty val name: String,
    @NotNull @NotEmpty @Email val email: String,
    @NotNull @NotEmpty val rawPassword: String,
    @NotNull @NotEmpty val courseCode: String
)


@Document
data class User(
    @Id val userId: ObjectId,
    val name: String,
    val encryptedPassword: String,
    val course: Course,
    @Indexed(unique=true)
    val email: String
)

interface UserRepository: MongoRepository<User, ObjectId>{

    fun existsByEmail(email: String): Boolean

    fun findByEmail(email: String): User?

}