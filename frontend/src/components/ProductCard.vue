<template>
  <div class="m-5">
    <router-link :to="'/products/'+productData.ProductId">
      <div class="card w-22 bg-base-200 shadow-xl">
        <figure><img :src="productData.Image" :alt="productData.Title"/></figure>
        <div class="card-body">
          <h2 class="card-title">{{productData.Title}}</h2>
          <p>{{productData.Description}}</p>
          <div class="card-actions">
            <button class="btn btn-accent">Likes: {{productData.Likes}}</button>
          </div>
        </div>
      </div>
    </router-link>

  </div>
</template>

<script>
  export default {
    name: "ProductCard",
    props: ['productData']
  }
</script>

<style scoped>

</style>