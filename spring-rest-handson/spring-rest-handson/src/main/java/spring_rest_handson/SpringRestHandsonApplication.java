package spring_rest_handson;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import spring_rest_handson.service.CountryService;

@SpringBootApplication
public class SpringRestHandsonApplication {

	public static void main(String[] args) {

		SpringApplication.run(SpringRestHandsonApplication.class, args);

		CountryService service = new CountryService();

		System.out.println(service.getCountry());
	}
}