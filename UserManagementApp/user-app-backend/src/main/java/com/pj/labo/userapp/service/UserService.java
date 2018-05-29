package com.pj.labo.userapp.service;

import com.pj.labo.userapp.entity.User;

import java.util.List;

public interface UserService {
    User save(User user);
    List<User> findAll();
    void delete(long id);
    User findOne(String username);

    User findById(Long id);
}
