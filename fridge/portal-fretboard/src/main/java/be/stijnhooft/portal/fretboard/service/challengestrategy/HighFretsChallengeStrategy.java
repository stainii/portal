package be.stijnhooft.portal.fretboard.service.challengestrategy;

import org.springframework.stereotype.Component;

@Component
public class HighFretsChallengeStrategy implements ChallengeStrategy {
    @Override
    public String getBackgroundImage() {
        return "high-frets.jpg";
    }

    @Override
    public String getCsvFile() {
        return "mapping-high-frets.csv";
    }
}
