package com.example.product.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class Catalog {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idCatalog;

    private String nameCatalog;

    @OneToMany(mappedBy = "catalog", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonBackReference(value = "back_product_list")
    private List<Product> productList;

    public Catalog () {
    }

    public Catalog (Integer idCatalog , String nameCatalog) {
        this.idCatalog = idCatalog;
        this.nameCatalog = nameCatalog;
    }

    public Integer getIdCatalog () {
        return idCatalog;
    }

    public void setIdCatalog (Integer idCatalog) {
        this.idCatalog = idCatalog;
    }

    public String getNameCatalog () {
        return nameCatalog;
    }

    public void setNameCatalog (String nameCatalog) {
        this.nameCatalog = nameCatalog;
    }

    public List<Product> getProductList () {
        return productList;
    }

    public void setProductList (List<Product> productList) {
        this.productList = productList;
    }
}
