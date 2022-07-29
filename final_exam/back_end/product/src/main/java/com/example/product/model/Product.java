package com.example.product.model;

import javax.persistence.*;

@Entity(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idProduct;

    private String fromPlace;

    private String toPlace;

    private String dateStart;

    private Double price;

    private Integer amount;

    private String timeStart;

    @ManyToOne(targetEntity = Catalog.class)
    @JoinColumn(name = "idCatalog", referencedColumnName = "idCatalog")
    private Catalog catalog;

    public Product (Integer idProduct , String fromPlace , String toPlace , String dateStart ,
                    Double price , Integer amount , String timeStart , Catalog catalog) {
        this.idProduct = idProduct;
        this.fromPlace = fromPlace;
        this.toPlace = toPlace;
        this.dateStart = dateStart;
        this.price = price;
        this.amount = amount;
        this.timeStart = timeStart;
        this.catalog = catalog;
    }

    public Product () {
    }

    public Integer getIdProduct () {
        return idProduct;
    }

    public void setIdProduct (Integer idProduct) {
        this.idProduct = idProduct;
    }

    public String getFromPlace () {
        return fromPlace;
    }

    public void setFromPlace (String fromPlace) {
        this.fromPlace = fromPlace;
    }

    public String getToPlace () {
        return toPlace;
    }

    public void setToPlace (String toPlace) {
        this.toPlace = toPlace;
    }

    public String getDateStart () {
        return dateStart;
    }

    public void setDateStart (String dateStart) {
        this.dateStart = dateStart;
    }

    public Double getPrice () {
        return price;
    }

    public void setPrice (Double price) {
        this.price = price;
    }

    public Integer getAmount () {
        return amount;
    }

    public void setAmount (Integer amount) {
        this.amount = amount;
    }

    public String getTimeStart () {
        return timeStart;
    }

    public void setTimeStart (String timeStart) {
        this.timeStart = timeStart;
    }

    public Catalog getCatalog () {
        return catalog;
    }

    public void setCatalog (Catalog catalog) {
        this.catalog = catalog;
    }
}
