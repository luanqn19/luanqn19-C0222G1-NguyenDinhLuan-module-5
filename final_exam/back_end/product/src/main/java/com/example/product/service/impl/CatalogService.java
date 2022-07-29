package com.example.product.service.impl;

import com.example.product.model.Catalog;
import com.example.product.repository.CatalogRepository;
import com.example.product.service.ICatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CatalogService implements ICatalogService {
    @Autowired
    private CatalogRepository catalogRepository;

    @Override
    public List<Catalog> findAll () {
        return catalogRepository.findAll();
    }
}
