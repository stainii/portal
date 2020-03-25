package be.stijnhooft.portal.fretboard.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.client.RestTemplate;

public class ImageService {

    @Autowired
    private RestTemplate restTemplate;

    public String generateBase64Image() {
        restTemplate.postForEntity("http://localhost:3000/composite");
    }
}
