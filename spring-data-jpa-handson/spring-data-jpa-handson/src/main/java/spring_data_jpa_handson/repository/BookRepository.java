package spring_data_jpa_handson.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import spring_data_jpa_handson.entity.Book;

public interface BookRepository extends JpaRepository<Book, Integer> {

}