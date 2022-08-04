<template>
  <div class="m-5 w-96">
      <div class="card w-22 bg-base-200 shadow-xl">
        <figure><img :src="product.Image" :alt="product.Title"/></figure>
        <div class="card-body">
          <h2 class="card-title">{{product.Title}}</h2>
          <p>{{product.Description}}</p>
          <div class="card-actions">
            <button v-on:click="addLike" class="btn btn-accent">Likes: {{product.Likes}}</button>
            <button v-on:click="removeLike" class="btn btn-primary btn-disabled">Unlike</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "ProductSingle",
    data() {
        return {
            product: [],
        };
    },
    methods: {
        getSingleProduct: async function () {
            const query = "https://tap-vue-db.herokuapp.com/" + this.$route.params.id
            fetch(query)
                .then((response) => response.json())
                .then((data) => this.product = data[0]);
        },

        addLike: async function() {
          const query = "https://tap-vue-db.herokuapp.com/" + this.$route.params.id
          fetch(query, {
            method: 'POST'
          })
                .then((response) => response.json())
                .then((data) => this.product = data[0]);
        },

        removeLike: async function() {
          const query = "https://tap-vue-db.herokuapp.com/" + this.$route.params.id
          fetch(query, {
            method: 'DELETE'
          })
                .then((response) => response.json())
                .then((data) => this.product = data[0]);
        },
    },
    mounted() {
        this.getSingleProduct();
    },
}

</script>

