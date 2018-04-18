package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.History;
import com.example.service.HistoryServiceImpl;

@RestController
@RequestMapping("/history")
public class HistoryController {

	@Autowired
	HistoryServiceImpl historyServiceImpl;
	
	@GetMapping("")
	public ResponseEntity<?> all() {
		try {
			return new ResponseEntity<List<History>>(this.historyServiceImpl.findAll(), HttpStatus.OK);
			
		} catch (Exception e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}
