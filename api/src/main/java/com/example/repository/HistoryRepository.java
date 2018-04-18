package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.model.History;

public interface HistoryRepository extends CrudRepository<History, Long>{
	
	@Query("from History h order by h.data desc")
	public List<History> findAllOrderByData();
}
