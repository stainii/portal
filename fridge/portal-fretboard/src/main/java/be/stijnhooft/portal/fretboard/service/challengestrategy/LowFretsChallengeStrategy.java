package be.stijnhooft.portal.fretboard.service.challengestrategy;

import org.springframework.stereotype.Component;

@Component
public class LowFretsChallengeStrategy implements ChallengeStrategy {
    @Override
    public String getBackgroundImage() {
        return "low-frets.jpg";
    }

    @Override
    public String getCsvFile() {
        return "mapping-low-frets.csv";
    }
}
