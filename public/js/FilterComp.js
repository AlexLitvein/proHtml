Vue.component('filter-el', {
    data(){
      return {
          userSearch: ''
      }
    },
    template: `
        <a class="header__loupe-link" href="#">
            <svg class="header__loupe-svg" width="33" height="33">
                <use xlink:href="./img/loupe.svg#loupe"></use>
            </svg>
            <input class="header__find" type="search" v-model="userSearch" @input="$root.$refs.products.filter(userSearch)">
        </a>
    `
})