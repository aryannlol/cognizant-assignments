package spring_rest_handson.service;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;
import spring_rest_handson.model.Country;

@Service
public class CountryService {

    public Country getCountry() {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        return context.getBean("country", Country.class);
    }

    public Country getCountry(String code) {

        Country country = getCountry();

        if (country.getCode().equalsIgnoreCase(code)) {
            return country;
        }

        return null;
    }
}