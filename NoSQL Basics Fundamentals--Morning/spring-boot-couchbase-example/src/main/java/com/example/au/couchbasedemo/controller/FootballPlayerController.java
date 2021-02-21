package com.example.au.couchbasedemo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.au.couchbasedemo.model.FootballPlayers;
import com.example.au.couchbasedemo.repository.FootballPlayerRepository;

@RestController
public class FootballPlayerController {
    
    @Autowired
    FootballPlayerRepository footballPlayerRepository;
    
	/*
	 * @RequestMapping("/") public String index() { return
	 * "Welcome to the CRUD application!!"; }
	 */
    
    @PostMapping("/footballPlayers")
    public FootballPlayers addFootballPlayerPost(@RequestBody FootballPlayers newFootballPlayer) {
        return footballPlayerRepository.save(newFootballPlayer);
    }
    
    @GetMapping("/footballPlayers/{id}")
    public Optional<FootballPlayers> getFootballPlayer(@PathVariable String id) {
        if (footballPlayerRepository.existsById(id)) {
            return footballPlayerRepository.findById(id);
        } else
            return Optional.empty();
    }
    
    @DeleteMapping("/footballPlayers/{id}")
    public void deleteById(@PathVariable String id) {
    	footballPlayerRepository.deleteById(id);
    }

    @GetMapping("/footballPlayers/goals/{goal}")
    public List<FootballPlayers> getFootballPlayerByGoalName(@PathVariable Integer goal) {
        List<FootballPlayers> footballPlayersList=new ArrayList<>();
        footballPlayerRepository.findAll().forEach(FootballPlayers->{
           Integer NoOfGoals = FootballPlayers.getNumberOfGoals();
           if (NoOfGoals >= goal) {
        	   footballPlayersList.add(FootballPlayers);
           }
       });
      return footballPlayersList;
    }
}