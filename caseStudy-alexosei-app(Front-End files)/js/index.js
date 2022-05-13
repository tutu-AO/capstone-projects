
$(document).ready(function(){
    
   /*this function is validating user's email using regex */
   $("#click").on("click", function (e) {
       e.preventDefault();
       localStorage.clear(); //Clears storage for next request
       email = $('#my-value').val().toLowerCase();
       
       var x, y;
       regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
       if (email.match(regEx)) {
         x = true;
       } else {
        alert("Enter email in @ form(ex: johndoe@gmail.com)");
       }
       
       if (x === true) {
         const url = "http://localhost:8080/photoup-app/products";
         fetch(url)
           .then((response) => response.text())
           .then(function (contents) {
            localStorage.setItem("allData", contents);
             window.open('/content.html', '_self');
           })
           .catch((e) => console.log(e));
       }
   });

   /* This function is allow users to search for any photo */
   $('#my-search').keypress(function (event) {

      var x;
      searchVal = $('#my-search').val().toLowerCase();
      if (searchVal !== "") {
        x = true;
      } else {
        x = false;
      }

      keycode = (event.keyCode ? event.keyCode : event.which);
      if (keycode == '13' && x === true) {
        event.preventDefault();
        localStorage.clear(); //Clears storage for next request
  
         const proxyurl = "";
         const url = "https://api.unsplash.com/search/photos?query="+searchVal+"&per_page=10&client_id=HOpzu3kd4_rNxAORq9ONrizMkJUpt2Xz0S7dlBvvcIE";
         fetch(proxyurl + url)
            .then((response) => response.text())
            .then(function (contents) {
              localStorage.setItem("userObject", contents);
              window.open('/content.html', '_self');
            })
            .catch((e) => console.log(e));
      } else if (x === false) {
        console.log("Enter a search value");
       }
      
    });

   focusInput = function inputFocus(){
      document.getElementById("my-search").focus();
   }
});




























