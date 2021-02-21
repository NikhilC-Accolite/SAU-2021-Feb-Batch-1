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

import com.example.au.couchbasedemo.model.Blogs;
import com.example.au.couchbasedemo.model.Movies;
import com.example.au.couchbasedemo.repository.BlogRepository;
import com.example.au.couchbasedemo.repository.MovieRepository;

@RestController
public class MovieController {
    
    @Autowired
    MovieRepository movieRepository;
    
	/*
	 * @RequestMapping("/") public String index() { return
	 * "Welcome to the CRUD application!!"; }
	 */
    
    @PostMapping("/movies")
    public Movies addMoviePost(@RequestBody Movies newMovie) {
        return movieRepository.save(newMovie);
    }
 
    @GetMapping("/movies/movieName/{movieName}")
    public Movies getMovieByMovieName(@PathVariable String movieName) {
        return movieRepository.findByMovieName(movieName);
    }
    
    @GetMapping("/movies/location/{location}")
    public List<Movies> getMovieByLocation(@PathVariable List<String> location) {
    	List<Movies> moviesList=new ArrayList<>();
    	movieRepository.findAll().forEach(Movies->{
    		List<String> locationInMovie = Movies.getLocation();
    		for(String s : location)
    		{
    			if(locationInMovie.contains(s))
                {
                    moviesList.add(Movies);
                    break;
                }
    		}
    	});
        return moviesList;
    }
    
    @DeleteMapping("/movies/{id}")
    public void deleteById(@PathVariable String id) {
        movieRepository.deleteById(id);
    }

}