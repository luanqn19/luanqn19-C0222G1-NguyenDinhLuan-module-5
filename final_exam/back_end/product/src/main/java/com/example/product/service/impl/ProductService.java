package com.example.product.service.impl;

import com.example.product.model.Product;
import com.example.product.repository.ProductRepository;
import com.example.product.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService implements IProductService {
    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> findAll () {
        return productRepository.findAll();
    }

    @Override
    public Page<Product> findAllPage (Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @Override
    public void save (Product product) {
        productRepository.save(product);
    }

    @Override
    public Optional<Product> find (Integer id) {
        return productRepository.findById(id);
    }

    @Override
    public void delete (Product product) {
        productRepository.delete(product);
    }

    @Override
    public void edit (Product product) {
        productRepository.save(product);
    }

    @Override
    public List<Product> searchMixture (String from, String to, String date1, String date2) {
        return productRepository.searchMixture(from, to, date1, date2);
    }

    @Override
    public List<Product> searchMixtureFromAndTo (String from , String to) {
        return productRepository.searchMixture(from, to);
    }

    @Override
    public List<Product> searchFrom (String fromPlace) {
        return productRepository.searchMixtureFrom(fromPlace);
    }

    @Override
    public List<Product> searchTo (String toPlace) {
        return productRepository.searchMixtureTo(toPlace);
    }
}
