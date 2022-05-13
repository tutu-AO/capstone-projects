$(document).ready(function(){

    function populateInputFields(){

        var user = localStorage.getItem('updateUser');
        if(user !== null){
            user = JSON.parse(user);
            var theForm = $("#form");
            theForm.html(`

                <div class="login-flex">
                    <label for="firstName">First Name:</label><br/>
                    <input type="text" name="firstName" value="${user.firstName}">
                </div>
                <div class="login-flex">
                    <label for="lastName">Last Name:</label><br/>
                    <input type="text"  name="lastName" value="${user.lastName}">
                </div>
                <div class="login-flex">
                    <label for="userName">User Name:</label><br/>
                    <input type="text"  name="userName" value="${user.userName}">
                </div>
                <div class="login-flex">
                    <label for="password">Password:</label><br/>
                    <input type="text" name="password" value="${user.password}">
                </div>
                <input id="saveUser" style="margin-top: 40px;" type="submit" name="" value="Update">
            `);
        }

    }
    populateInputFields();

    $("#form").on('submit', function(e){
        e.preventDefault();

        const formData = new FormData(form);
        console.log(formData);

        const userController = {
            method: 'POST',
            body: JSON.stringify([formData])
        }

        fetch('http://localhost:8080/photoup-app/users', userController).then((response) => response.json()).then(function (contents){ 
            console.log(contents);
        }).catch((e) => console.log(e));  
    })

})