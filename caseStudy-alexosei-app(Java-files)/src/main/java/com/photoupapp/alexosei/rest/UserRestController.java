package com.photoupapp.alexosei.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.photoupapp.alexosei.entity.User;
import com.photoupapp.alexosei.service.UserService;

@RestController
//@RequestMapping("/api")
public class UserRestController {

	// autowire the UserService
	@Autowired
	private UserService userService;

	// add mapping for GET /users
	@GetMapping("/users")
	public List<User> getUsers() {

		return userService.getUsers();

	}

	// add mapping for GET /users/{userId}
	@GetMapping("/users/{userId}")
	public User getUser(@PathVariable int userId) {

		User theUser = userService.getUser(userId);

		return theUser;
	}

	@PostMapping("/users")
	public List<User> addUser(@RequestBody List<User> ourUsers) {

		for (User theUser : ourUsers) {
			
			theUser.setUserId(0);
			userService.saveUser(theUser);
		}

		return userService.getUsers();
	}

	// add mapping for PUT /users - update existing user
	@PutMapping("/users")
	public User updateUser(@RequestBody User theUser) {
		
		userService.saveUser(theUser);
		return theUser;
	}

	// add mapping for DELETE /user/{customerId} - delete user
	@DeleteMapping("/users/{userId}")
	public List<User> deleteUser(@PathVariable int userId) {

		userService.deleteUser(userId);

		return userService.getUsers();
	}

}
