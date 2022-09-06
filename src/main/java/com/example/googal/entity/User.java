package com.example.googal.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Data
@Table(name="user")

public class User extends BaseEntity {

    @Column(name = "username",nullable = false,unique = true)
    private String username;

    @Column (name = "password",nullable = false)
    private String password;
}
