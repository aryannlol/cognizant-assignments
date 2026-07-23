package com.cognizant.module4.exercise4;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorTest {

    @Test
    void testMultiply() {

        // Arrange
        Calculator calculator = new Calculator();

        // Act
        int result = calculator.multiply(4, 5);

        // Assert
        assertEquals(20, result);

    }
}