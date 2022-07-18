<template>
  <div id="app">
    <OurHeader></OurHeader>
    <OurBody></OurBody>
    <OurFooter></OurFooter>
  </div>
</template>

<script>

import OurHeader from "./components/OurHeader.vue"
import OurBody from "./components/OurBody.vue"
import OurFooter from "./components/OurFooter.vue"

export default {
  name: 'App',
  components: {
    OurHeader,
    OurBody,
    OurFooter
  }
}
</script>

<style>
</style>
