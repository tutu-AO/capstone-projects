$(document).ready(function () {

    // reading the data that was added to the local storage in index.js
    if(window.localStorage){

        if(localStorage.allData){
            var allcontent = localStorage.getItem('allData');
            retreivedContent = JSON.parse(allcontent);
            retreivedContent.forEach(function(obj){

                var article = document.createElement('article');
                var img     = document.createElement('img');
                var ul      = document.createElement('ul');
                var li      = document.createElement('li');
                var li2     = document.createElement('li'); 

                img.src     =  obj.prodUrl;
                let element = document.getElementById('content');
                element.appendChild(article).appendChild(img);
                
                li.setAttribute("class", "thePrice");
                li.textContent  = "$" + obj.price;
                li2.textContent = "Add to Cart";

                ul.setAttribute("class", "add-cart");
                ul.append(li, li2);                
                article.appendChild(ul);

            })
        }

        if (localStorage.userObject) {
            var user_object = localStorage.getItem('userObject');
            retreivedObject = JSON.parse(user_object); 

            retreivedObject.results.forEach(function(obj){
                
                var article = document.createElement('article');
                var img     = document.createElement('img');

                img.src     =  obj.urls.regular;
                let element = document.getElementById('content');
                element.appendChild(article).appendChild(img);
                
            })
            dataGenerator(retreivedObject);
        }    
    }

    function generatePrice(){
       
        const price = Math.floor(Math.random() * (99.99 - 29.99 + 1)) + 29.99;
        return Math.round(price * 100)/ 100;
    }
    
    // generating our db.json data and send it to server through Post request
    function dataGenerator(retreivedObject) {        
        var db = {"products":[], "users":[]};

        for (var i=0; i < retreivedObject.results.length; i++) {

            var product = {};
            product.productId   = retreivedObject.results[i].id;
            product.price       =  generatePrice();
            product.prodUrl     = retreivedObject.results[i].urls.regular;
            if(retreivedObject.results[i].description === null){
                product.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
            }else{
                product.description = retreivedObject.results[i].description;
            }
            product.height  = retreivedObject.results[i].height;
            product.width   = retreivedObject.results[i].width;
            product.likes   = retreivedObject.results[i].likes;
            product.proDate = retreivedObject.results[i].created_at;
            db.products.push(product);
        }

        for (var i=0; i < retreivedObject.results.length; i++) {

            var user = {};
            user.firstName = retreivedObject.results[i].user.first_name;
            if(retreivedObject.results[i].user.last_name === null){
                user.lastName = "Doe";
            }else{
                user.lastName  = retreivedObject.results[i].user.last_name;
            }
            user.userName  = retreivedObject.results[i].user.username;
            user.password  = retreivedObject.results[i].user.id;
            db.users.push(user);
        }
        
        //sending products to the ProductRestController
        const productController = {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(db.products)
        };

        fetch('http://localhost:8080/photoup-app/products', productController).then( response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
        }).catch( error => console.log(`Could not post product: ${error}`));

        //sending users to the UserRestController
        const userController = {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(db.users)
        };

        fetch('http://localhost:8080/photoup-app/users', userController).then( response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
        }).catch( error => console.log(`Could not post users: ${error}`));

    }
     
    //this add to cart event listener
    $("article ul:last-child").on("click", function(event){
           
        storeNumItemsInLocalStorage();
        var itemUrl   = $(this).prev().attr('src');
        var itemPrice = $(this).children(':first').text();

        itemSendingToCart(itemUrl, itemPrice);
        event.stopPropagation();
    })

    // storing the number items a user put in the cart
    function storeNumItemsInLocalStorage(){

        let numOnStorage = parseInt(localStorage.getItem('numItemsOnCart'));
        if(numOnStorage){
            localStorage.setItem('numItemsOnCart', numOnStorage + 1);
            $("aside").text(numOnStorage + 1);
        }else{
            localStorage.setItem('numItemsOnCart', 1);
            $("aside").text(1);
        }
    }

    // number of items should be the same even if user refresh page or leave page
    function numItemsInCartOnLoad(){
    
        let numOnStorage = parseInt(localStorage.getItem('numItemsOnCart'));
        if(numOnStorage){
            $("aside").text(numOnStorage);
        }
    }

    // this function get items been added to shopping cart
    function itemSendingToCart(itemUrl, itemPrice){

        var itemClicked = new Object();
        var allcontent = localStorage.getItem('allData');
        retreivedContent = JSON.parse(allcontent);
        retreivedContent.forEach(function(obj){

            if(itemUrl === obj.prodUrl){
                itemClicked.imgUrl    = itemUrl;
                itemClicked.imgPrice  = itemPrice;
                itemClicked.imgHeight = obj.height;
                itemClicked.imgWidth  = obj.width;
                itemClicked.imgLikes  = obj.likes;
                itemClicked.imgQty = 0;
            }
        });
        sendItemAndInfoToLocalStorage(itemClicked); 
    }

    //send item clicked to the local storage
    function sendItemAndInfoToLocalStorage(itemClicked){
        let itemsInCart = localStorage.getItem("myCart");
        itemsInCart = JSON.parse(itemsInCart);

        if(itemsInCart != null){
            if(itemsInCart[itemClicked.imgUrl] == undefined){
                itemsInCart = {
                    ...itemsInCart,
                    [itemClicked.imgUrl] : itemClicked
                }
            }
            itemsInCart[itemClicked.imgUrl].imgQty += 1;
        }else{
            itemClicked.imgQty = 1;
            itemsInCart = { [itemClicked.imgUrl] : itemClicked };
        }
        localStorage.setItem("myCart", JSON.stringify(itemsInCart));
    }

    //function runs whenever the page loads
    numItemsInCartOnLoad(); 
})