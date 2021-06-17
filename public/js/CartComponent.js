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
        this.$parent.getJson(this.cartUrl)
            .then(data => {
                for (let item of data) {
                    this.cartItems.push(item);
                }
                this.updateView();
            });
    },
    methods: {
        updateView() {
            this.$root.cartCount = this.cartItems.length;
            this.totalPrice = this.getTotalPrice();
        },

        getTotalPrice() {
            return this.cartItems.reduce((acc, curr) => {
                return acc + (curr.quantity * curr.price)
            }, 0);
        },

        addProduct(item) {
            let find = this.cartItems.find(el => el.id === item.id);
            if (find) {
                this.$parent.putJson(`/api/cart/${find.id}`, { quantity: 1 }) // change
                    .then(data => {
                        if (data.result === 1) {
                            find.quantity++
                        }
                    })
            } else {
                const prod = Object.assign({ quantity: 1 }, item);
                this.$parent.postJson(`/api/cart`, prod) // add
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(prod)
                        }
                        this.updateView();
                    })
            }
            
        },
        remove(item) {
            this.$parent.delJson('/api/cart', item)
                .then(data => {
                    if (data.result === 1) {
                        this.cartItems.splice(this.cartItems.indexOf(item), 1);
                    }
                    this.updateView();
                });
            
        },
    },

    template: `
    <ul class="cart__list">
        <cart-item v-for="item of cartItems" :key="item.id" :cart-item="item" @remove="remove">
        </cart-item>       
    </ul>
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
