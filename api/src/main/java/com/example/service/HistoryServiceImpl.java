package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.exception.HistoryException;
import com.example.model.History;
import com.example.repository.HistoryRepository;

@Service("historyService")
public class HistoryServiceImpl implements HistoryService {

	@Autowired
	HistoryRepository historyRepository;
	
	@Override
	public History save(History history) {
		return this.historyRepository.save(history);
	}

	@Override
	public List<History> findAll() throws HistoryException {
		try {
			return this.historyRepository.findAllOrderByData();
		
		} catch (Exception e) {
			throw new HistoryException("Não foi possível buscar o histórico.");
		}
	}

}
