$(document).ready(function () {

    function displayItemsInCart(){
        let items = localStorage.getItem("myCart");
        items = JSON.parse(items);

        var show = $("#content");
        //console.log(items);
        if(items && show){            
            show.html('');
            Object.values(items).map(item => {
                show.html( show.html() + 
                            `
                                <div class="item-img">
                                    <article>
                                        <img src=${item.imgUrl}/>
                                        <ul class="add-cart">
                                            <li>H: ${item.imgHeight}</li>
                                            <li>W: ${item.imgWidth}</li>
                                            <li>Likes: ${item.imgLikes}</li>
                                            <li class="delete"><svg width="32" height="32" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19 11V20.4C19 20.7314 18.7314 21 18.4 21H5.6C5.26863 21 5 20.7314 5 20.4V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M10 17V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M14 17V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M21 7L16 7M3 7L8 7M8 7V3.6C8 3.26863 8.26863 3 8.6 3L15.4 3C15.7314 3 16 3.26863 16 3.6V7M8 7L16 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </li>
                                        </ul>
                                    </article>
                                    <div class="item-price"><p>${item.imgPrice}</p><input class="item-qty" type="number" value="${item.imgQty}" /></div>
                                </div>
                             
                            `
                );
            })
            updateCartTotal();
        }
    }

    displayItemsInCart();
    updateCartTotal();

    // delete an item from shopping cart
    $('.item-img').on('click', '.delete', function(e){
        //var price = ($(this).parent().parent().parent().next(".item-price").text()).replace("$", "");
        $(this).parent().parent().parent().remove();
        
        updateCartTotal();
    })

  

    // reduce total when item is deleted
    function updateCartTotal(){

       var theItems = $("#theItems #content").children('.item-img');
       var subTotal = 0;
       theItems.each(function(){
            var itemP =  $(this).children(".item-price");
            var thePrice = itemP.children(':first').text().replace("$","");
            var theQty = itemP.children(':last').val();
            subTotal = subTotal + (thePrice * theQty);
       })
    
        subTotal = Math.round(subTotal * 100)/ 100;
       $("#subT p").text("$"+subTotal);

       var endTotal = subTotal + 4.99 + 4.89;
       endTotal = Math.round(endTotal * 100)/ 100;
       $("#endT p").text("$"+endTotal);

    }

    

    $(".item-qty").change(qtyChanged);

    function qtyChanged(){
        var qty = $(this).val();
        if(isNaN(qty) || qty <= 0){
            $(this).val(1);
        }
        
        updateCartTotal();
        //updateTheLocalStorage();
    }
})