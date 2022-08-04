<template>
  <div id="app" class="flex flex-col justify-between h-screen">
    <NavBar/>
    <main class="scrollbar overflow-auto">
      <router-link to="/"> </router-link>
      <router-view class="view"></router-view>
    </main>
    <FooterBar/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
//import ProductsAll from './components/ProductsAll.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar,

}
}
</script>

<style>
.scrollbar::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

.scrollbar::-webkit-scrollbar-track {
    border-radius: 100vh;
    background: #47b394;
}

.scrollbar::-webkit-scrollbar-thumb {
    background: #7e4171;
    border-radius: 100vh;
    border: 1px solid #f6f7ed;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
    background: #5d1c4f;
}
</style>
