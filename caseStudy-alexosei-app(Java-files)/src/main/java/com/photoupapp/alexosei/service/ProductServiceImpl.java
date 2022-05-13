package com.photoupapp.alexosei.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.photoupapp.alexosei.dao.ProductDAO;
import com.photoupapp.alexosei.entity.Product;

@Service
public class ProductServiceImpl implements ProductService {
	
	//need to inject the product DAO
	@Autowired
	private ProductDAO productDAO;
		
	@Transactional
	public List<Product> getProducts() {
		
		return productDAO.getProducts();
	}
	
	@Transactional
	public void saveProduct(Product theProduct) {
		productDAO.saveProduct(theProduct);

	}

	@Transactional
	public Product getProduct(String productId) {
		
		return productDAO.getProduct(productId);
	
	}

	@Transactional
	public List<Product> deleteProduct(String productId) {
		
		productDAO.deleteProduct(productId);
		
		return productDAO.getProducts();
	}
}
