<template>
  <div id="app">
    <child-component></child-component>
    <comp-article></comp-article>
  </div>
</template>

<script>

import ChildComponent from "./components/ChildComponent.vue"
import CompArticle from "./components/CompArticle.vue"

export default {
  name: 'App',
  components: {
    "child-component": ChildComponent,
    "comp-article": CompArticle
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
