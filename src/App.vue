<template>
  <div id="app">
    <div id = "Header">
      <Header/>
    </div>
    <router-view/>
    <div id="Footer" class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'MainApp',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.footer {
 position: absolute;
 bottom: 0;
 width: 100%;
}
</style>
