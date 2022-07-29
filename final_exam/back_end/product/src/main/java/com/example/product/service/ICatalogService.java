package com.example.product.service;

import com.example.product.model.Catalog;

import java.util.List;

public interface ICatalogService {
    List<Catalog> findAll();
}
