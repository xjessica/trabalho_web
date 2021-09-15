package br.ufsc.ine5646.trabalhoweb.config.database

import br.ufsc.ine5646.trabalhoweb.model.Course
import br.ufsc.ine5646.trabalhoweb.model.CourseRepository
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.context.event.ApplicationReadyEvent
import org.springframework.context.ApplicationListener
import org.springframework.core.io.Resource
import org.springframework.stereotype.Component

@Component
class DatabaseInitializer(
    private val courseRepository: CourseRepository,
    private val objectMapper: ObjectMapper,
    @Value("classpath:courses.json") private val resource: Resource
) : ApplicationListener<ApplicationReadyEvent> {

    override fun onApplicationEvent(applicationReadyEvent: ApplicationReadyEvent) {
        courseRepository.saveAll(objectMapper.readValue<List<Course>>(resource.file))
    }
}