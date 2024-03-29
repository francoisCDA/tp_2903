package com.m2i.person_restapi.controller;

import com.m2i.person_restapi.model.Person;
import com.m2i.person_restapi.repository.PersonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/persons")
@RequiredArgsConstructor
public class PersonController {

    private final PersonRepository personRepository;


    @PostMapping
    public Person postPerson(@RequestBody Person person){

        return personRepository.save(person);
    }

    @GetMapping
    public List<Person> getAll(){
        return personRepository.findAll();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleltePerson(@PathVariable Long id){

        personRepository.deleteById(id);

        return ResponseEntity.ok("success ! (I guess...)");
    }




}
