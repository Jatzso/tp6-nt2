<template>
  <div id="navigator">
    <button id="reset" @click="restart()">{{ this.$store.state.btnMessage }}</button>
    <span id="message"> {{ this.$store.state.message}} </span>

    <button id="easy" @click="easyMode()">easy</button>
    <button id="hard" class="selected" @click="hardMode()">hard</button>
  </div>
</template>

<script>
export default {
  name: "src-components-navigator",
  props: [],
  mounted() {
    this.$store.dispatch('setColorsAction', this.createNewColors(this.$store.state.colorCount));
    this.$store.dispatch('setPickedColorAction', this.$store.state.colors[this.pickColor()]);
  },
  data() {
    return {};
  },
  methods: {
    hardMode(){
      if(!this.$store.state.isHard){
        this.$store.dispatch('setIsHardAction', true);
        this.$store.dispatch('setColorCountAction', 6);
        this.restart(); 
      }
    },
    easyMode(){
      if(this.$store.state.isHard){
        this.$store.dispatch('setIsHardAction', false);
        this.$store.dispatch('setColorCountAction', 3);
        this.restart()
      }
    },
    restart(){
       this.$store.dispatch('setColorsAction', this.createNewColors(this.$store.state.colorCount));
       this.$store.dispatch('setPickedColorAction', this.$store.state.colors[this.pickColor()]);
       this.$store.dispatch('setMessageRestartAction', null)
       this.$store.dispatch('setMessageRestarButtontAction', 'New Colors')
       
    },
    pickColor() {
      var quantity;
      if (this.$store.state.isHard) {
        quantity = 6;
      } else {
        quantity = 3;
      }
      return Math.floor(Math.random() * quantity);
    },
    createNewColors(numbers) {
      var arr = [];
      for (var i = 0; i < numbers; i++) {
        arr.push(this.createRandomStringColor());
      }
      return arr;
    },
    createRandomStringColor() {
      var newColor =
        "rgb(" +
        this.randomInt() +
        ", " +
        this.randomInt() +
        ", " +
        this.randomInt() +
        ")";
      //	console.log(newColor);
      return newColor;
    },
    randomInt() {
      return Math.floor(Math.random() * 256);
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
#navigator {
  background: #ffffff;
  height: 30px;
  text-align: center;
  margin: 0;
  margin-top: -30px;
}
#message {
  color: 'black';
  display: inline-block;
  width: 20%;
}
.selected {
  background-color: steelblue;
  color: white;
}
button {
  border: none;
  background-color: white;
  font-family: "Montserrat", "Avenir";
  text-transform: uppercase;
  height: 100%;
  font-weight: 700;
  letter-spacing: 1px;
  color: steelblue;
  transition: all 0.3s;
  outline: none;
}
button:hover {
  color: white;
  background-color: steelblue;
}
</style>
