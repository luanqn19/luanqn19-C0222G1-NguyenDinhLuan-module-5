package com.example.product.repository;

import com.example.product.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "SELECT * FROM product WHERE from_place LIKE :s", nativeQuery = true)
    List<Product> searchFrom (@Param("s") String s);

    @Query(value = "SELECT * FROM product WHERE to_place LIKE :s", nativeQuery = true)
    List<Product> searchTo (@Param("s") String s);
}
