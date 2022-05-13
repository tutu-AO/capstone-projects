package com.photoupapp.alexosei.dao;

import java.util.List;

import com.photoupapp.alexosei.entity.Product;

public interface ProductDAO {
	
	public List<Product> getProducts();
	public Product getProduct(String productId);
	public void saveProduct(Product product);
	public void updateProduct(Product product);
	public void deleteProduct(String productId);
}
