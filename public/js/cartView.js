Vue.component('i-cart', {    
    methods: {       
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
                    })
            }
            
        },
        remove(item) {
            this.$parent.delJson('/api/cart', item)
                .then(data => {
                    if (data.result === 1) {
                        this.cartItems.splice(this.cartItems.indexOf(item), 1);
                    }
                });
            
        },
    },
});

Vue.component('cart_view', {
    // data() {
    //     return {
    //         count: 0
    //     }
    // },

    template:  
        `       
        <a class="header__basket" href="./cart.html">
            <span class="header__basket-count">
                {{$root.cartCount}}
            </span>
        </a> 
    `
});