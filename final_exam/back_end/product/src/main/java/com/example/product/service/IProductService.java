package com.example.product.service;

import com.example.product.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface IProductService {
    List<Product> findAll ();

    Page<Product> findAllPage (Pageable pageable);

    void save (Product product);

    Optional<Product> find (Integer id);

    void delete (Product product);

    void edit (Product product);

    List<Product> searchFrom (String from);

    List<Product> searchTo (String to);

    List<Product> searchMixture ();
}
