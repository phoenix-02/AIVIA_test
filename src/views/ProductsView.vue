<template>

  <v-row class="mt-6" justify="center">
    <v-alert
        class="products-alert"
        border="bottom"
        color="red lighten-2"
        dark
        v-if="!products && errorMessage"
        transition="scale-transition"
    >
      {{ errorMessage }}
    </v-alert>
    <v-col cols='10' md="4" sm="10" v-for="product in products" :key="product.id">
      <ProductItem :product="product"/>
    </v-col>
  </v-row>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
export default {
  data() {
    return {
      products: [],
      errorMessage: 'No products',
      isLoading: false,
    }
  },
  components: {
    ProductItem,
  },
  methods: {
    getProducts() {
      this.isLoading = true
      fetch('https://dummyjson.com/products')
          .then(response => response.json())
          .then(data => {
            this.products = data.products
            this.isLoading = false
          })
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>

<style>
.products-alert{
  position: absolute;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>