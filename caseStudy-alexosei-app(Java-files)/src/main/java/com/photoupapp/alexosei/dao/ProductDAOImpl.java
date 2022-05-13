package com.photoupapp.alexosei.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.photoupapp.alexosei.entity.Product;

@Repository
public class ProductDAOImpl implements ProductDAO {

	@Autowired
	private SessionFactory sessionFactory;

	public List<Product> getProducts() {

		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();

		// create a query
		Query<Product> theQuery = currentSession.createQuery("from Product", Product.class);

		// get the result list
		List<Product> products = theQuery.getResultList();

		return products;
	}

	public Product getProduct(String productId) {

		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();

		// get the product with the given id
		Product product = currentSession.get(Product.class, productId);

		return product;
	}

	public void saveProduct(Product product) {

		// get current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();

		// save the product
		currentSession.saveOrUpdate(product);

	}

	@Override
	public void updateProduct(Product product) {
		// get current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();

		// save/upate the user ... finally LOL
		currentSession.saveOrUpdate(product);

	}

	@Override
	public void deleteProduct(String productId) {

		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();

		// delete object with primary key
		Query theQuery = currentSession.createQuery("delete from Product where id=:productId");
		theQuery.setParameter("productId", productId);

		theQuery.executeUpdate();

	}

}
