# capstone-projects
these projects were built with eclipse IDE

Welcome to photoup app project:

Purpose:
This is project was designed capture an idea about an online shopping mall where users can come search for their 
favorite items. The platform is like a hub of products from all of users favorite stores. Users can do a search on 
any item or category of items. The app will response back with images on their search.

Scope:
We provide great user experience for customers, allow seamless product searching mechanism and also handle customer orders.

Users of the plaform:
Guest users: these users have the least privileges. they can only search for products and potentially sign up as members
(they are our window shoppers).

Core users: Everything guest users can do, see all the products in our database, option to add item to the cart, 
view the cart and make a purchase. They can also sell their products

Admin user: perform all CRUD operations. They can add product, add user, update, delete, and search by product or user id.

Technologies used:
Core Java, Spring MVC framework, Tomcat server 9.0.5, Java EE, Junit5, Hibernate(JPA, ORM) 5.6, MySQL, REST API, CSS3, Google fonts,
jQuery and JavaScript, Jackson library(mainly for converting JSON to Java Objects and vice versa), CORS(cross origin resource sharing),
VS Code and Eclipse.

Challenge:
Originally the project was supposed to be a spring mvc project but i run into an issue where Eclipse was changing my html(it wasn't showing up the way I wanted it to be). My solution was to seperate my front end code from my java(spring backend code), I decided to let Eclipse handle the backend and VS Code handle to Front-End(HTML, CSS, jQuery and Javascript). After that I added Jackson library to my pom.xml and implemented CORS in my spring configuration file to allow data sharing between my two end points.

To run the application:
- open the front-end files in vs code and use the live server to open the index.html file. 
- You can navigate through the application from there.
- open the java files with eclipse and use tomcat server 9.0.5 




