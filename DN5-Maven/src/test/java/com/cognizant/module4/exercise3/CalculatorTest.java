package com.cognizant.module4.exercise3;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {

    Calculator calculator = new Calculator();

    @Test
    void testAssertEquals() {
        assertEquals(10, calculator.add(4, 6));
    }

    @Test
    void testAssertTrue() {
        assertTrue(calculator.isPositive(5));
    }

    @Test
    void testAssertFalse() {
        assertFalse(calculator.isPositive(-5));
    }

    @Test
    void testAssertNotNull() {
        assertNotNull(calculator.getMessage());
    }

    @Test
    void testAssertNull() {
        assertNull(calculator.getNullValue());
    }
}