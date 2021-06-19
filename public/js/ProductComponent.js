Vue.component('products', {
    data() {
        return {
            catalogUrl: '/api/products',
            imgFolder: 'img/',
            filtered: [],
            products: [],
        }
    },
    mounted() {
        this.$root.mycart.reqData(this.catalogUrl)
            .then(data => {
                for (let item of data) {
                    this.products.push(item);
                    this.filtered.push(item);                    
                }
            });       
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.name));
        },
    },

    template: ` <ul class="product__list">
                    <product v-for="item of filtered" :key="item.id" :product="item">
                    </product>
               </ul>`
});

Vue.component('product', {
    props: ['product'],
   methods: {
    showProduct(){
        window.open('product.html', "_self");
    }
   },

    template: `
    <li class="product-card">
        <div class="product-card__image-wrapper">
            <img v-bind:src="$parent.imgFolder + product.img" v-bind:alt="product.img">
            <button class="product-card__button" type="button" @click="$root.mycart.addProduct(product)">
                <img src="./img/basket.svg" alt="basket">
                Add to chart
            </button>
        </div>
        <div class="product-card__description" @click="showProduct()">
            <h3 class="product-card__tittle">{{product.name}}</h3>
            <p class="product-card__subtittle">{{product.descr}}</p>
            <p class="product-card__price">{{product.price}}</p>
        </div>
    </li>
`

})