package com.example.tutorial5.controller;

import com.example.tutorial5.model.User;
import com.example.tutorial5.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public Map<String, Object> getAllUsers() {
        List<User> users = userService.getAllUsers();
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Users retrieved");
        response.put("success", true);
        response.put("users", users);
        return response;
    }

    @GetMapping("/{id}")
    public Map<String, Object> getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("user", user);
        return response;
    }

    @PostMapping("/add")
    public Map<String, Object> addUser(@RequestBody User user) {
        User newUser = userService.addUser(user);
        Map<String, Object> response = new HashMap<>();
        response.put("message", "User added");
        response.put("success", true);
        response.put("user", newUser);
        return response;
    }

    @PutMapping("/update/{id}")
    public Map<String, Object> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        User updatedUser = userService.updateUser(id, userDetails);
        Map<String, Object> response = new HashMap<>();
        response.put("message", "User updated");
        response.put("success", true);
        response.put("user", updatedUser);
        return response;
    }
}
