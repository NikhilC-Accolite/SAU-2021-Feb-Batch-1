package com.example.au.couchbasedemo.model;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.couchbase.core.mapping.Document;
import org.springframework.data.couchbase.core.mapping.Field;

import com.sun.istack.NotNull;

@Document
public class FootballPlayers {
    
    @Id
    String id;
    
    @NotNull
    @Field
    String footballPlayerName;
    
    @NotNull
    @Field
    String footballPlayerNationality;
    
    @NotNull
    @Field
    String footballPlayerClub;
    
    @NotNull
    @Field
    Integer goals;

	public String getFootballPlayerName() {
		return footballPlayerName;
	}

	public void setFootballPlayerName(String footballPlayerName) {
		this.footballPlayerName = footballPlayerName;
	}
	
	public String getFootballPlayerNationality() {
		return footballPlayerNationality;
	}

	public void setFootballPlayerNationality(String footballPlayerNationality) {
		this.footballPlayerNationality = footballPlayerNationality;
	}
	
	public String getFootballPlayerClub() {
		return footballPlayerClub;
	}

	public void setFootballPlayerClub(String footballPlayerClub) {
		this.footballPlayerClub = footballPlayerClub;
	}

	public Integer getNumberOfGoals() {
		return goals;
	}
	
	public Integer setNumberOfGoals(Integer goals) {
		return this.goals = goals;
	}

	public String getId() {
		return id;
	}

	public FootballPlayers(String id, String footballPlayerName, String footballPlayerNationality,String footballPlayerClub, Integer goals) {
		super();
		this.id = id;
		this.footballPlayerName = footballPlayerName;
		this.footballPlayerNationality = footballPlayerNationality;
		this.footballPlayerClub = footballPlayerClub;
		this.goals = goals;
	} 
}
