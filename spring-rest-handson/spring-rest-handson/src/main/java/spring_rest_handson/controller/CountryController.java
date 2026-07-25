package spring_rest_handson.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import spring_rest_handson.model.Country;
import spring_rest_handson.service.CountryService;

@RestController
public class CountryController {

    @Autowired
    private CountryService countryService;

    @GetMapping("/country")
    public Country getCountry() {
        return countryService.getCountry();
    }

    @GetMapping("/country/{code}")
    public Country getCountry(@PathVariable String code) {
        return countryService.getCountry(code);
    }
}