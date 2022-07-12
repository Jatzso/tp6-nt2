<template>
  <div id="app">
    <Header />
    <Navigator />
    <Square /> 
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Navigator from './components/Navigator.vue'
import Square from './components/Square.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navigator,
    Square
  }
}
</script>

<style>
body {
	background: #232323;
	margin: 0;
	font-family: "Montserrat", "Avenir";
} 

 h1 {
	font-weight: normal;
	line-height: 1.1;
	padding: 20px 0;

} 
</style>
