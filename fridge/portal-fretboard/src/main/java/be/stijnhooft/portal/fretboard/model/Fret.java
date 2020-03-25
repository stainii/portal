package be.stijnhooft.portal.fretboard.model;

import com.opencsv.bean.CsvBindByPosition;
import lombok.Data;

@Data
public class Fret {

    @CsvBindByPosition(position = 0)
    private int x;

    @CsvBindByPosition(position = 1)
    private int y;

    @CsvBindByPosition(position = 2)
    private String note;

}
