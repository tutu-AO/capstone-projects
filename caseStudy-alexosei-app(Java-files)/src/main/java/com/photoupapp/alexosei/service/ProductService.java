package com.photoupapp.alexosei.service;

import java.util.List;

import com.photoupapp.alexosei.entity.Product;

public interface ProductService {

	public abstract List<Product> getProducts();
	public Product getProduct(String productId);
	public void saveProduct(Product theProduct);
	List<Product> deleteProduct(String productId);

}
