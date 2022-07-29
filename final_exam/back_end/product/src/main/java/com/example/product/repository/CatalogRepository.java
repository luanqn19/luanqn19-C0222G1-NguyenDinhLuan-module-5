package com.example.product.repository;

import com.example.product.model.Catalog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import javax.transaction.Transactional;

@Transactional
public interface CatalogRepository extends JpaRepository<Catalog, Integer> {
}
