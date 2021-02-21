package com.example.au.couchbasedemo.model;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.couchbase.core.mapping.Document;
import org.springframework.data.couchbase.core.mapping.Field;

import com.sun.istack.NotNull;

@Document
public class Movies {
    
    @Id
    String id;
    
    @NotNull
    @Field
    String movieName;
    
    @NotNull
    @Field
    List<String> location;
    
    @NotNull
    @Field
    String released_year;

	public String getMovieName() {
		return movieName;
	}

	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}

	public List<String> getLocation() {
		return location;
	}

	public void setLocation(List<String> location) {
		this.location = location;
	}
	
	public String getReleased_year() {
		return released_year;
	}

	public void setReleased_year(String released_year) {
		this.released_year = released_year;
	}

	public String getId() {
		return id;
	}

	public Movies(String id, String movieName, List<String> location, String released_year) {
		super();
		this.id = id;
		this.movieName = movieName;
		this.location = location;
		this.released_year = released_year;
	}
}
