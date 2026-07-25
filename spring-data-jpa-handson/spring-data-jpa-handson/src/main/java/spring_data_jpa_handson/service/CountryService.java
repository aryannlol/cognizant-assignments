package spring_data_jpa_handson.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring_data_jpa_handson.entity.Country;
import spring_data_jpa_handson.repository.CountryRepository;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    public void addCountry(Country country) {
        countryRepository.save(country);
    }
}