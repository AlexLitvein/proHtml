Vue.component('cart_view', {
    template:  
        `       
        <a class="header__basket" href="./cart.html">
            <span class="header__basket-count">
                {{$root.icart.countCartItem}}
            </span>
        </a> 
    `
});