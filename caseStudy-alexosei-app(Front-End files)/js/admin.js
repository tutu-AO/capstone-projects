$(document).ready(function(){
    
    /********************************* CRUD FOR PRODUCTS ************************************************/

    // sending a get request to the Tomcat server to get all products
    fetch("http://localhost:8080/photoup-app/products")
      .then((response) => response.json())
      .then(function (contents) {
        var contentSpace = $("#product-content");
        contentSpace.html('');
        contents.forEach(function(obj){
            contentSpace.html(contentSpace.html() +
                `
                <article>
                    <div style="display:flex;">
                        <img src=${obj.prodUrl}>
                        <ul class="prod-info">
                            <li>Price: $${obj.price}</li>
                            <li>Height: ${obj.height}</li>
                            <li>Width: ${obj.width}</li>
                            <li>Likes: ${obj.likes}</li>
                        </ul>
                    </div>
                    <ul id="action">
                        <li style="margin-top:6px; border-right: 1px solid rgba(29,53,13,0.15000002); padding-right: 10px;">update</li>
                        <li style="margin-left:5%"><svg width="30" height="30" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 11V20.4C19 20.7314 18.7314 21 18.4 21H5.6C5.26863 21 5 20.7314 5 20.4V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 17V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 17V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21 7L16 7M3 7L8 7M8 7V3.6C8 3.26863 8.26863 3 8.6 3L15.4 3C15.7314 3 16 3.26863 16 3.6V7M8 7L16 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg></li>
                    </ul>
                </article>
                `
            )
        })
      }).catch((e) => console.log(e));


      //UPDATE PRODUCT
     

      /********************************* CRUD FOR USERS ************************************************/

      //  GET REQUEST FOR ALL USERS
      fetch("http://localhost:8080/photoup-app/users")
      .then((response) => response.json())
      .then(function (contents) {

        var showBody = $("#tbody");
        showBody.html('');
        contents.forEach(function(obj){
            showBody.html(showBody.html() + 
            `
            <ul class="row">
                <li>${obj.userId}</li>
                <li>${obj.firstName}</li>
                <li>${obj.lastName}</li>
                <li>${obj.userName}</li>
                <li>${obj.password}</li>
                <li><span class="row-edit"><a>update</a></span><span class="row-delete"><svg style="margin-bottom: -5px;" width="25" height="25" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 11V20.4C19 20.7314 18.7314 21 18.4 21H5.6C5.26863 21 5 20.7314 5 20.4V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 17V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14 17V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21 7L16 7M3 7L8 7M8 7V3.6C8 3.26863 8.26863 3 8.6 3L15.4 3C15.7314 3 16 3.26863 16 3.6V7M8 7L16 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></span></li>
            </ul>
            `
            )
        })  
      }).catch((e) => console.log(e));



      // GET REQUEST FOR A SINGLE USER
      $("#searchById").keypress(function (event) {

            var x;
            searchVal = $('#searchById').val();
            $('#searchById').val('');
            if (searchVal !== "" && searchVal == parseInt(searchVal)) {
                x = true;
            } else {
                x = false;
            }

            keycode = (event.keyCode ? event.keyCode : event.which);
            if (keycode == '13' && x === true) {
               const url = "http://localhost:8080/photoup-app/users/"+searchVal;
               fetch(url).then((response) => response.json()).then(function (contents) {
                    
                    var showBody = $("#tbody");
                        showBody.html(
                        `
                        <ul class="row">
                            <li>${contents.userId}</li>
                            <li>${contents.firstName}</li>
                            <li>${contents.lastName}</li>
                            <li>${contents.userName}</li>
                            <li>${contents.password}</li>
                            <li><span class="row-edit"><a>update</a></span><span class="row-delete"><svg style="margin-bottom: -5px;" width="25" height="25" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 11V20.4C19 20.7314 18.7314 21 18.4 21H5.6C5.26863 21 5 20.7314 5 20.4V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M10 17V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14 17V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21 7L16 7M3 7L8 7M8 7V3.6C8 3.26863 8.26863 3 8.6 3L15.4 3C15.7314 3 16 3.26863 16 3.6V7M8 7L16 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg></span></li>
                        </ul>
                        `
                        )
                  })
                  .catch((e) => console.log(e));
            }else if (x === false){
              console.log("Enter a search value");
            }
      });

    //UPDATE A USER
    $(document).on('click', 'li .row-edit', function(e){

        var getId = $(this).parent().parent().children(":first");
        getId = getId.text();
        fetch("http://localhost:8080/photoup-app/users/"+getId).then((response) => response.text()).then(function (contents) {
            localStorage.setItem("updateUser", contents);
            window.open('/saveUser.html', '_self');
        })
    });

    // DELETLE A USER
    $(document).on('click', 'li .row-delete', function(e){

        var getId = $(this).parent().parent().children(":first");
        getId = getId.text();
        const url = "http://localhost:8080/photoup-app/users/"+getId;

        const userController = {
            method: 'DELETE',
            mode: 'cors',
            headers: {'Content-Type' : 'application/json'},
        };

        fetch(url, userController).then((response) => response.json()).then(function (contents){        
            var showBody = $("#tbody");
            showBody.html('');
            contents.forEach(function(obj){
            showBody.html(showBody.html() + 
                    `
                    <ul class="row">
                        <li>${obj.userId}</li>
                        <li>${obj.firstName}</li>
                        <li>${obj.lastName}</li>
                        <li>${obj.userName}</li>
                        <li>${obj.password}</li>
                        <li><span class="row-edit">update</span><span class="row-delete"><svg style="margin-bottom: -5px;" width="25" height="25" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 11V20.4C19 20.7314 18.7314 21 18.4 21H5.6C5.26863 21 5 20.7314 5 20.4V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 17V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14 17V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21 7L16 7M3 7L8 7M8 7V3.6C8 3.26863 8.26863 3 8.6 3L15.4 3C15.7314 3 16 3.26863 16 3.6V7M8 7L16 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg></span></li>
                    </ul>
                    `
                    )
                })  
        }).catch((e) => console.log(e));
    })
});

