package be.stijnhooft.portal.fretboard.service;

import be.stijnhooft.portal.fretboard.model.Challenge;
import be.stijnhooft.portal.fretboard.model.Fret;
import be.stijnhooft.portal.fretboard.service.challengestrategy.ChallengeStrategy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class ChallengeService {

    @Autowired
    private CsvService csvService;

    @Autowired
    private List<ChallengeStrategy> strategies;

    public Challenge generateChallenge() {
        ChallengeStrategy strategy = getRandom(strategies);
        List<Fret> possibleFrets = csvService.read(Fret.class, strategy.getCsvFile());
        Fret chosenFret = getRandom(possibleFrets);
        return new Challenge(null, chosenFret.getNote());
        // genereer een afbeelding en base64 het
        // return challenge
    }

    private <T> T getRandom(List<T> list) {
        return list.get(new Random().nextInt(list.size()));
    }
}
