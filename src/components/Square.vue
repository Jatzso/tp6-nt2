<template>
  <div id="container">
    <div
      class="square"
      v-for="(color, index) in this.$store.state.colors"
      :key="index"
      :style="{backgroundColor : color}"
      @click="click(color)"
    />
    </div>
</template>

<script>

export default {
  name: "src-components-square",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {
    click(color){
      if(color === this.$store.state.pickedColor){
        this.$store.dispatch('setMessageWinAction', 'You Picked Right!');
        this.setAllColorsTo(this.$store.state.pickedColor);
        this.$store.dispatch('setMessageRestarButtontAction', 'Play Again!')
      }else{
        this.$store.dispatch('setMessageWinAction', 'Try Again!');
        this.style.color = 'red'
      }
    },
    setAllColorsTo(color){
      var squares = document.querySelectorAll(".square");
        squares.forEach(function(square) {
          square.style.backgroundColor = color
        })
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.square {
  width: 30%;
  background: blue;
  padding-bottom: 30%;
  float: left;
  margin: 1.66%;
  border-radius: 10%;
  transition: background 0.8s;
  -webkit-transition: background 0.8s;
  -moz-transition: background 0.8s;
}
#container {
  margin: 20px auto;
  max-width: 600px;
}
</style>
