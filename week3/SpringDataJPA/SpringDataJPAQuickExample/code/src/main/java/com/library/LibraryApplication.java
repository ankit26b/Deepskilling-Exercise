package com.library;

import com.library.entity.Book;
import com.library.repository.BookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class LibraryApplication {

    public static void main(String[] args) {
        SpringApplication.run(LibraryApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(BookRepository bookRepository) {
        return args -> {
            // Save books
            bookRepository.save(new Book("Clean Code"));
            bookRepository.save(new Book("Spring in Action"));

            // Find all books
            System.out.println("All books:");
            bookRepository.findAll().forEach(b -> System.out.println(b.getTitle()));

            // Find by title
            System.out.println("Books with title 'Clean Code':");
            bookRepository.findByTitle("Clean Code").forEach(b -> System.out.println(b.getTitle()));
        };
    }
}
