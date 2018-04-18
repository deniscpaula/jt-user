package com.example.service;

import java.util.List;

import com.example.exception.UserException;
import com.example.model.User;

public interface UserService {
	public User create(User user) throws UserException;
	public User update(User user) throws UserException;
	public User find(Long id) throws UserException;
	public List<User> findAll() throws UserException;
	public void delete(Long id) throws UserException;
}
