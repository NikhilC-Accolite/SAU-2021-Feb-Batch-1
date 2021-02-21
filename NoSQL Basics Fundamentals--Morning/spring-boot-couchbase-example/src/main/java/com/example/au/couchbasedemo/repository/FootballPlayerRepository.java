package com.example.au.couchbasedemo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.au.couchbasedemo.model.Blogs;
import com.example.au.couchbasedemo.model.FootballPlayers;

public interface FootballPlayerRepository extends CrudRepository<FootballPlayers, String> {
}