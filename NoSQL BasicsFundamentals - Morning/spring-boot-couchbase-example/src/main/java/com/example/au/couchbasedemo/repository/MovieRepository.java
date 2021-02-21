package com.example.au.couchbasedemo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import com.example.au.couchbasedemo.model.Movies;

public interface MovieRepository extends CrudRepository<Movies, String> {
	
	Movies findByMovieName(String movieName);
	Movies findByLocation(String location);
}