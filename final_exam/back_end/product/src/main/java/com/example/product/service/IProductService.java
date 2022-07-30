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

    List<Product> searchMixture (String from, String to, String date1, String date2);

    List<Product> searchMixtureFromAndTo (String from, String to);

    List<Product> searchFrom (String fromPlace);

    List<Product> searchTo (String toPlace);
}
