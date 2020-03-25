package be.stijnhooft.portal.fretboard.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class Challenge {

    private String base64image;
    private String solution;

}
