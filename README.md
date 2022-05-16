# capstone-projects

WELCOME TO PHOTOUP, AN ONLINE GALLARY STUDIO:

Purpose: 
This is project was designed capture an idea about an online shopping mall where users can come search for their favorite items. The platform is like a hub of products from all of users favorite stores. Users can do a search on any item or category of items. The app will response back with images on their search.

Scope: 
We provide great user experience for customers, allow seamless product searching mechanism and also handle customer orders.
Users of the plaform: Guest users: these users have the least privileges. they can only search for products and potentially sign up as members (they are our window shoppers).

Core users: 
Everything guest users can do, see all the products in our database, option to add item to the cart, view the cart and make a purchase. They can also sell their products

Admin user: 
Perform all CRUD operations. They can add product, add user, update, delete, and search by product or user id.

-- Please run the index.html to get started.

-- At the index page users have two options, either: 
    -- they can login with their email(ex: johndoe@gmail.com) and password or
    -- they can search for any catergory(ex: dogs) of photos they would like to buy

-- The application will validate their email using a robust regex pattern. If it passes
   the aapplication will direct them to the content.html page where users can choose from
   a generic photo layout. However they can do a search for their own favorite catergory of
   images from the content.html page. If their email fails the validation the application will
   alert them to use the correct email pattern.

-- If a user don't have an account with us yet they can still search for their favorite catergory
   images from the index page and the application will direct them to content page where they can
   see only images of the catergory they searched.

-- From the content page users can navigate to the about page where they can leave a review or comment
   about their experience with the platform.

-- On the content page users can see a table containing information about the creators of these exciting
   photos.( the creators tab can help users navigate to the table faster).

-- the Connect drop down menu contains links to our social media platforms.


TECHNICAL TOOLS USED:

Core Java, Spring MVC framework, Tomcat server 9.0.5, Java EE, 
Junit5, Hibernate(JPA, ORM) 5.6, MySQL, REST API, 
Jackson library(mainly for converting JSON to Java Objects and vice versa), 
CORS(cross origin resource sharing), VS Code and Eclipse.

HTML

    more than 6 pages with consistent grid system.
    more 10 different HTML tags
    HTML table which contains data about creators
    HTML forms (2 search forms, 2 login form, and 1 feedback form and many more)
    Dropped Down Menu 
    Used web fonts from google(Roboto font family)
    Used different types of content in the form of text, images, svg icons for easy understanding for non english speakers, and GIFs
    Used regex validation to validate user email input

CSS

    Used inline, internal, and external styling(multiple css files named according to html page names)
    More than five different CSS selectors
    Don’t use too many fonts (Used only one font family Roboto)
    Used complement three gradient background
    Used display: flex in multiple areas(ex: the navbar) a.k.a Flexbox
    Used css animations on my index page and buttons to capture user attention
    Used the css box shadow effect as well

Javascript(jQuery)

    external scripts(one is making http request to the endpoint using the fetch api 
    and the other loop through the response data to generate the multicoumn layout on the content page)
    using the localStorage to transfer data between the two script files
    Utilized variables, if statements, loops, collections, functions/call back, and events(click event and keypress event).
    Used AJAX to fetch data from the endpoint using the fetch method which return a json object 
    changed the data from the endpoint JSON for easier iteration using forEach  
    my scripts were written in JQuery and Javascript but JQuery for the most part. Included the JQuery cdn in all my HTML files

Challenges: 
Originally the project was supposed to be a spring mvc project but i run into an issue where Eclipse was changing my html(it wasn't showing up the way I wanted it to be). My solution was to seperate my front end code from my java(spring backend code), I decided to let Eclipse handle the backend and VS Code handle to Front-End(HTML, CSS, jQuery and Javascript). After that I added Jackson library to my pom.xml and implemented CORS in my spring configuration file to allow data sharing between my two end points.

To run the application:
   • run the sql script using the sql workbench
   • open the front-end files in vs code and use the live server to open the index.html file.
   • You can navigate through the application from there.
   • open the java files with eclipse and use tomcat server 9.0.5


I was fun working on this project.

Github account: https://github.com/tutu-AO

Thank you!


