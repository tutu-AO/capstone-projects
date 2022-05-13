package com.photoupapp.alexosei.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.photoupapp.alexosei.entity.Product;
import com.photoupapp.alexosei.service.ProductService;

@RestController
//@RequestMapping("/api")
public class ProductRestController {

	// autowire the productService
	@Autowired
	private ProductService productService;

	// add mapping for GET /products
	@GetMapping("/products")
	public List<Product> getProducts() {
		return productService.getProducts();
	}

	// add mapping for GET /products/{productId}
	@GetMapping("/products/{productId}")
	public Product getProduct(@PathVariable String productId) {
		Product theProduct = productService.getProduct(productId);
		return theProduct;
	}

	@PostMapping("/products")
	public List<Product> addProduct(@RequestBody List<Product> ourProducts) {

		for (Product theProduct : ourProducts) {
			productService.saveProduct(theProduct);
		}

		return productService.getProducts();
	}

	// add mapping for PUT /products - update existing product
	@PutMapping("/products")
	public Product updateProduct(@RequestBody Product theProduct) {

		productService.saveProduct(theProduct);
		
		return theProduct;
	}

	// add mapping for DELETE /product/{product} - delete product
	@DeleteMapping("/product/{productId}")
	public List<Product> deleteProduct(@PathVariable String productId){

		productService.deleteProduct(productId);

		return productService.getProducts();
	}

}
