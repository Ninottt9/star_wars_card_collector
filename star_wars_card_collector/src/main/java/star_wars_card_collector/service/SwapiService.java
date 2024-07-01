package star_wars_card_collector.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONArray;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import javax.annotation.PostConstruct;
import org.json.JSONObject;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

/**
 * Service class to interact with the Star Wars API (SWAPI) for fetching character information.
 */
@Service
public class SwapiService {

    private static final String SWAPI_URL = "https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/";
    private int peopleCount;
    private JSONArray people;

    /**
     * Initializes the service by fetching the total count of people (characters) available in SWAPI.
     */
    @PostConstruct
    public void fetchPeopleCount() {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(SWAPI_URL+"all.json", String.class);
        JSONArray jsonArray = new JSONArray(response.getBody());
        peopleCount = jsonArray.length();
        people = jsonArray;
    }

    /**
     * Retrieves the details of a specific person (character) from SWAPI based on the given ID.
     *
     * @param id The ID of the person to retrieve.
     * @return JSONObject containing the details of the person.
     */
    public JSONObject getPersonAt(int id) {
        return people.getJSONObject(id);
    }

    /**
     * Retrieves the total number of people (characters) available in SWAPI.
     *
     * @return The total number of people.
     */
    public int getPeopleCount() {
        return peopleCount;
    }
}
