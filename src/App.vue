<template>
    <div class="flex flex-col min-h-screen font-Roboto bg-gradient-to-b from-gray-900 to-gray-600">
      <SiteNavigation />
      <RouterView/>      
    </div> 
</template>

<script setup>
import {RouterView} from "vue-router";
import SiteNavigation from "./components/SiteNavigation.vue";
</script>

<style lang="scss" scoped></style>