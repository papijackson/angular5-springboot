package com.pj.labo.userapp.controller;


import com.pj.labo.userapp.entity.User;
import com.pj.labo.userapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class UserController {

    @Autowired
    private UserService userService;


    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public User saveUser(@RequestBody User user) {
        return userService.save(user);
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
    public User getUser(@PathVariable Long id) {
        return userService.findById(id);
    }

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public List<User> listUsers() {
        return userService.findAll();
    }


}
