package spring_data_jpa_handson.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import spring_data_jpa_handson.entity.Country;

public interface CountryRepository extends JpaRepository<Country, String> {

}