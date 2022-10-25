<template>
  <v-card height="100%">
    <v-img
        contain
        class="white--text"
        height="300px"
        max-height="300px"
        :lazy-src="product.images[0]"
        :src="product.images[0]"
    >
    </v-img>

    <v-card-title>{{ product.title }}</v-card-title>
    <v-card-text> {{ product.description }} </v-card-text>
    <v-card-actions>

    </v-card-actions>
  </v-card>
</template>
<script>
export default {

  data() {
    return {
      defaultImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'
    }
  },
  props:{
    product: {
      type: Object,
      required: true,
    }
  }
}
</script>
<style scoped>
</style>
