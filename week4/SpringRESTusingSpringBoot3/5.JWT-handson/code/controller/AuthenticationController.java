package com.cognizant.spring_learn.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.crypto.SecretKey;
import java.util.Base64;
import java.util.Date;

@RestController
public class AuthenticationController {

    // 🔑 Use a secure 256-bit key for HS256
    private static final SecretKey jwtSecretKey = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Basic ")) {
            return ResponseEntity.status(401).body("Missing or invalid Authorization header");
        }

        
        String base64Credentials = authHeader.substring("Basic ".length());
        byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
        String credentials = new String(decodedBytes);
        String[] parts = credentials.split(":", 2);

        if (parts.length != 2) {
            return ResponseEntity.status(401).body("Invalid Authorization header format");
        }

        String username = parts[0];
        String password = parts[1];

        // ✅ Example: hardcoded user/password validation (you can replace with real user service)
        if (!"ankit".equals(username) || !"pass".equals(password)) {
            return ResponseEntity.status(401).body("Invalid credentials");
        }

        // Generate JWT token valid for 1 hour
        String token = Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1 hour
                .signWith(jwtSecretKey)
                .compact();

        return ResponseEntity.ok().body("{\"token\":\"" + token + "\"}");
    }
}

