package com.example.service;

import java.util.List;

import com.example.exception.HistoryException;
import com.example.model.History;

public interface HistoryService {
	public History save(History history);
	public List<History> findAll() throws HistoryException;
}
