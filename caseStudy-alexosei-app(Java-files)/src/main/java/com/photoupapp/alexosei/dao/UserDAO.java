package com.photoupapp.alexosei.dao;

import java.util.List;

import com.photoupapp.alexosei.entity.User;

public interface UserDAO {

	public List<User> getUsers();

	public void saveUser(User theUser);

	public User getUser(int theId);

	public void deleteUser(int theId);
	
}
