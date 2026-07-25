package spring_data_jpa_handson;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import spring_data_jpa_handson.entity.Book;
import spring_data_jpa_handson.repository.BookRepository;

@SpringBootApplication
public class SpringDataJpaHandsonApplication implements CommandLineRunner {

	@Autowired
	private BookRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(SpringDataJpaHandsonApplication.class, args);
	}

	@Override
	public void run(String... args) {

		Book book = new Book(
				1,
				"Spring in Action",
				"Craig Walls"
		);

		repository.save(book);

		System.out.println("Book saved successfully!");

		repository.findAll().forEach(System.out::println);

	}
}