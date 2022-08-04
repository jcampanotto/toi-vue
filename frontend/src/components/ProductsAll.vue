<template>
  <div class="flex-col">
    <div class="flex flex-wrap justify-center">
      <div v-for="(item, index) in products" v-bind:key="index">
        <ProductCard :productData="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
  export default {
    name: "ProductsAll",
    data() {
        return {
            products: [],
        };
    },
    methods: {
        getAllProducts: async function () {
            fetch("https://tap-vue-db.herokuapp.com/")
                .then((response) => response.json())
                .then((data) => this.products = data);
        }
    },
    mounted() {
        this.getAllProducts();
    },
    components: { ProductCard }
}
</script>

<style scoped>

</style>