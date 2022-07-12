package com.azure.gzip.gzip.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    String message = "gzip-stack-examples-java-gzip";

    @GetMapping("/")
    public String index() {
        return message.repeat(60);
    }
}
