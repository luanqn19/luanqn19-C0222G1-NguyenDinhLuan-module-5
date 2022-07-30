package com.example.product.repository;

import com.example.product.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "SELECT * FROM product WHERE (from_place LIKE %:from%) and (to_place LIKE %:to%) and date_start between :date1 and :date2", nativeQuery = true)
    List<Product> searchMixture (@Param("from") String from ,
                                 @Param("to") String to ,
                                 @Param("date1") String date1 ,
                                 @Param("date2") String date2);

    @Query(value = "SELECT * FROM product WHERE (from_place LIKE %:from%) and (to_place LIKE %:to%)", nativeQuery = true)
    List<Product> searchMixture (@Param("from") String from ,
                                 @Param("to") String to);

    @Query(value = "SELECT * FROM product WHERE from_place LIKE %:from%", nativeQuery = true)
    List<Product> searchMixtureFrom (@Param("from") String from);

    @Query(value = "SELECT * FROM product WHERE to_place LIKE %:to%", nativeQuery = true)
    List<Product> searchMixtureTo (@Param("to") String to);
}
