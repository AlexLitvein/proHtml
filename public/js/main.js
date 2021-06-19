class MyCart {
    constructor() {
        this.countCartItem = 0;
    }

    reqData(url, method, data) {
        data = data || null;
        const head = {
            method: method || 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        };
        if (data) head.body = JSON.stringify(data);

        return fetch(url, head)
            .then(result => result.json())
            .catch(error => {
                this.$refs.error.text = error;
            })
    }

    countProduct() {
        this.reqData(`/api/cart`)
            .then(data => {                
                    this.countCartItem = data.length;
            });
    }

    addProduct(item) {
        const prod = Object.assign({ quantity: 1 }, item);
        this.reqData(`/api/cart`, 'POST', prod) // add  
            .then(data => {
                if (data.result === 1) {
                    this.countProduct();
                }
            });
    }

    remove(arr, item) {
        this.reqData('/api/cart', 'DELETE', item)
            .then(data => {
                if (data.result === 1) {
                    arr.splice(arr.indexOf(item), 1);
                    this.countCartItem = arr.length;
                }
            });

    }
}

const app = new Vue({
    el: '#app',
    data: {
        mycart: new MyCart()
    },
    methods: {
    },
    mounted() {
        this.mycart.countProduct();
    }
});

// export default {
//     MyCart: MyCart,
//     app: app   
//   };
  
