Vue.component('cart_view', {
    template:  
        `       
        <a class="header__basket" href="./cart.html">
            <span class="header__basket-count">
                {{$root.mycart.countCartItem}}
            </span>
        </a> 
    `
});