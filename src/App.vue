<template>
  <v-app id="app">
    <v-content>
      <keep-alive :include="['vee-login', 'vuelidate-login']">
        <router-view></router-view>
      </keep-alive>
    </v-content>
  </v-app>
</template>
