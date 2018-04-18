package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.exception.UserException;
import com.example.model.History;
import com.example.model.User;
import com.example.repository.UserRepository;

@Service("userService")
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private HistoryService historyService;
	
	@Override
	public User create(User user) throws UserException {
		try {
			user = userRepository.save(user);
			History history = new History("Usuário " + user.getNome() + " criado em:");
			this.historyService.save(history);
			return user;
		
		} catch (Exception e) {
			throw new UserException("Não foi possível criar o usuário.");
		}
	}
	
	@Override
	public User update(User user) throws UserException {
		try {
			user = userRepository.save(user);
			History history = new History("Usuário " + user.getNome() + " atualizado em:");
			this.historyService.save(history);
			return user;
		
		} catch (Exception e) {
			throw new UserException("Não foi possível atualizar o usuário.");
		}
	}
	
	@Override
	public User find(Long id) throws UserException {
		try {
			User user = userRepository.findById(id).get();
			History history = new History("Usuário " + user.getNome() + " vizualizado em:");
			this.historyService.save(history);
			return user;
			
		} catch (Exception e) {
			throw new UserException("Não foi possível buscar o usuário.");
		}
	}
	
	@Override
	public List<User> findAll() {
		return userRepository.findAll();
	}
	
	@Override
	public void delete(Long id) throws UserException {
		try {
			User user = userRepository.findById(id).get();
			userRepository.delete(user);
			History history = new History("Usuário " + user.getNome() + " excluído em:");
			this.historyService.save(history);
		
		} catch (Exception e) {
			throw new UserException("Não foi possível excluir o usuário.");
		}
	}
}
