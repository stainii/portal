package be.stijnhooft.portal.fretboard.service;

import com.opencsv.bean.ColumnPositionMappingStrategy;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Slf4j
@Service
public class CsvService {

    public <T> List<T> read(Class<T> type, String fileName) {
        ColumnPositionMappingStrategy ms = new ColumnPositionMappingStrategy();
        ms.setType(type);

        try (Reader reader = new InputStreamReader(new ClassPathResource(fileName).getInputStream())) {
            return new CsvToBeanBuilder(reader)
                .withType(type)
                .withMappingStrategy(ms)
                .build()
                .parse();
        } catch (IOException e) {
            throw new RuntimeException("Something went wrong reading csv file " + fileName + " to type " + type, e);
        }
    }

}
