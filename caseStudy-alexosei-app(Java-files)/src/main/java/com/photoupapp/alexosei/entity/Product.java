package com.photoupapp.alexosei.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Product")
public class Product {
	
	@Id
	@Column(name="productId")
	private String productId;
	
	@Column(name="price")
	private float price;
	
	@Column(name="url")
	private String prodUrl;
	
	@Column(name="description")
	private String description;
	
	@Column(name="height")
	private int height;
	
	@Column(name="width")
	private int width;
	
	@Column(name="likes")
	private int likes;
	
	@Column(name="productDate")
	private String proDate;
	
	//default constructor
	public Product() {}
	
	//parameterized constructor
	public Product(String productId, float price, String prodUrl, String description, int height, int width, int likes,
			String proDate) {
		this.productId = productId;
		this.price = price;
		this.prodUrl = prodUrl;
		this.description = description;
		this.height = height;
		this.width = width;
		this.likes = likes;
		this.proDate = proDate;
	}

	//getters and setters methods
	public String getProductId() {
		return productId;
	}

	public void setProductId(String productId) {
		this.productId = productId;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getProdUrl() {
		return prodUrl;
	}

	public void setProdUrl(String prodUrl) {
		this.prodUrl = prodUrl;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public int getWidth() {
		return width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public int getLikes() {
		return likes;
	}

	public void setLikes(int likes) {
		this.likes = likes;
	}

	public String getProDate() {
		return proDate;
	}

	public void setProDate(String proDate) {
		this.proDate = proDate;
	}

	@Override
	public String toString() {
		return "Product [productId=" + productId + ", price=" + price + ", prodUrl=" + prodUrl + ", description="
				+ description + ", height=" + height + ", width=" + width + ", likes=" + likes + ", proDate=" + proDate
				+ "]";
	}
	
	
	
}
