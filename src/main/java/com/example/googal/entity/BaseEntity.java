package com.example.googal.entity;


import javax.persistence.*;
import java.io.Serializable;

@MappedSuperclass
public abstract class BaseEntity implements Serializable {
private static final long SerialVersionUIO = -1111111111111111111L;

@Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 @Column(name = "id",nullable = false,unique = true)
 private Long id;

@Column(name = "is_active",nullable = false)
    private Boolean isActive;

}
