Vue.component('cart', {
    data() {
        return {
            cartUrl: '/api/cart',
            imgFolder: 'img/',
            cartItems: [],
            totalPrice: 0,
        }
    },
    mounted() {
        this.$root.mycart.reqData(this.cartUrl)
            .then(data => {
                for (let item of data) {
                    this.cartItems.push(item);
                }
                this.updateView();
            });
    },
    methods: {
        updateView() {
            this.$root.mycart.countCartItem = this.cartItems.length;
            this.totalPrice = this.getTotalPrice();
        },

        getTotalPrice() {
            return this.cartItems.reduce((acc, curr) => {
                return acc + (curr.quantity * curr.price)
            }, 0);
        },

        remove(item) {
            this.$root.mycart.remove(this.cartItems, item);
            this.updateView();
        },

        clear() {
            this.cartItems = [];
            this.updateView();
        },
    },

    template: `
    <div class="cart__list-wrapper">
        <ul class="cart__list">
            <cart-item v-for="item of cartItems" :key="item.id" :cart-item="item">
            </cart-item>       
        </ul>
        <div class="cart__control-wrapper">
            <button class="cart__button-clear cart__button" @click="clear()">Clear shopping cart</button>
            <a class="cart__button-continue cart__button" href="./catalog.html">Continue shopping</a>
        </div>
    </div> 
    `
});

Vue.component('cart-item', {
    props: ['cartItem'],
    template: `
    <li class="cart__item">
        <img class="cart__item-image" :src="$parent.imgFolder + cartItem.img" :alt="cartItem.img" width="262" height="306">
        <div class="cart__item-description">
            <img class="cart__item-button-close" src="./img/close.svg" alt="close" @click="$parent.remove(cartItem)">            
            <p class="cart__item-tittle">{{cartItem.name}}</p>
            <p class="cart__item-price">Price: <span class="cart__item-price_color_pink">{{cartItem.price * cartItem.quantity}} $</span>
            </p>
            <p class="cart__item-param">Quantity:<input
                    class="cart__item-quantity" type="text" :value="cartItem.quantity">
            </p>
        </div>
    </li>
    `
});

Vue.component('cart-total', {
    template: `
    <div class="cart__proceed-wrapper">
        <p class="cart__proceed-sub">sub total<span class="cart__proceed-cashSub">{{$root.$refs.cart.totalPrice}} $</span></p>
        <p class="cart__proceed-total">grand total<span class="cart__proceed-cashTotal">$9999999</span>
        </p>
        <hr class="cart__proceed-hline">
        <button class="cart__proceed-button" type="button">proceed to checkout</button>
    </div>
    `
})
