package com.example.product.controller;

import com.example.product.model.Catalog;
import com.example.product.model.Product;
import com.example.product.service.ICatalogService;
import com.example.product.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("product-api")
public class RestProductManagerController {
    @Autowired
    private IProductService productService;
    @Autowired
    private ICatalogService catalogService;

    @GetMapping(value = "/products-list")
    public ResponseEntity<List<Product>> findAllProduct () {
        return new ResponseEntity<>(productService.findAll() , HttpStatus.OK);
    }

    @GetMapping(value = "/catalogs-list")
    public ResponseEntity<List<Catalog>> findAllCatalog () {
        return new ResponseEntity<>(catalogService.findAll() , HttpStatus.OK);
    }

    @GetMapping(value = "/products-page")
    public ResponseEntity<Page<Product>> findAllPage (@RequestParam(value = "page", defaultValue = "0") int page) {
        return new ResponseEntity<>(productService.findAllPage(PageRequest.of(page , 3)) , HttpStatus.OK);
    }

    @PostMapping(value = "/save-product")
    public ResponseEntity<Product> saveProduct (@RequestBody Product product) {
        productService.save(product);
        return new ResponseEntity<>(product , HttpStatus.CREATED);
    }

    @GetMapping(value = "/products-list/{id}")
    public ResponseEntity<Product> findById (@PathVariable("id") Integer id) {
        Optional<Product> product = productService.find(id);
        if (!product.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(product.get(), HttpStatus.OK);
    }

    @DeleteMapping(value = "/products-list/{id}")
    public ResponseEntity<Product> delete (@PathVariable("id") Integer id) {
        Optional<Product> product = productService.find(id);
        if (!product.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        productService.delete(product.get());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping(value = "/edit-product")
    public ResponseEntity<Product> edit (@RequestBody Product product) {
        productService.edit(product);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }

    @GetMapping(value = "/products-list/from/{from}")
    public ResponseEntity<List<Product>> searchFrom (@PathVariable("from") String from) {
        return new ResponseEntity<>(productService.searchFrom(from) , HttpStatus.OK);
    }

    @GetMapping(value = "/products-list/to/{to}")
    public ResponseEntity<List<Product>> searchTo (@PathVariable("to") String to) {
        return new ResponseEntity<>(productService.searchTo(to) , HttpStatus.OK);
    }
}
