package com.example;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class MySetupTeardownTest {

    private StringBuilder sb;

    @Before
    public void setUp() {
        sb = new StringBuilder();  // Arrange
        System.out.println("Setup before test");
    }

    @After
    public void tearDown() {
        sb = null;
        System.out.println("Cleanup after test");
    }

    @Test
    public void testAppend() {
        // Act
        sb.append("JUnit");
        // Assert
        assertEquals("JUnit", sb.toString());
    }
}
