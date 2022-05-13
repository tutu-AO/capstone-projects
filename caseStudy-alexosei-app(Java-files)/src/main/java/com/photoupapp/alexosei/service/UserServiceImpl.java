package com.photoupapp.alexosei.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.photoupapp.alexosei.dao.UserDAO;
import com.photoupapp.alexosei.entity.User;

@Service
public class UserServiceImpl implements UserService {

	// need to inject customer dao
	@Autowired
	private UserDAO userDAO;
	
	@Transactional
	public List<User> getUsers() {
		return userDAO.getUsers();
	}

	@Transactional
	public void saveUser(User theUser) {
		userDAO.saveUser(theUser);

	}

	@Transactional
	public User getUser(int theId) {
		return userDAO.getUser(theId);
	}

	@Transactional
	public void deleteUser(int theId) {
		userDAO.deleteUser(theId);

	}

}
