<template>
  <div>
    <Header />
    <SiderMenu />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";

export default Vue.extend({
  components: {
    Header,
    Footer,
    SiderMenu
  }
});
</script>

<style scoped></style>
