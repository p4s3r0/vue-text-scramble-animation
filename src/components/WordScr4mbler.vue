<template>
  <div id="container">
      <p class="WordScr4mblerText">{{ this.word }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    text: {
      type: String,
      default: "Word-Scrambler"
    },
    init: {
      type: String,
      default: "Scra-mBlErWord",
    },
    switchSpeed: {
      type: Number,
      default: 50,
    },
    unscrambleTime: {
      type: Number,
      default: 5,
    },
    scramble_character: {
      type: String,
      default: "ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789#+;-"
    } ,
    animationType: {
      type: String,
      default: "random"
    },
  },
  components: {
  },
  data() {
    return {
      scramble_iteration: 0,
      repeater: null,
      word: this.init,
    }
  },
  methods: {
    scramble() {
      let end = false;
      let final_stage = false;
      this.scramble_iteration++;
      if (this.scramble_iteration >= this.unscrambleTime) {
        final_stage = true;
      }
      let new_word = ""
      for(let i = 0; i < this.text.length; i++)
      {
        let random_char = this.word.charAt(i);

        if (!final_stage && Math.random() < 0.5) {
          random_char = this.scramble_character.charAt(Math.floor(Math.random()*this.scramble_character.length))
        }
        if (final_stage) {
          // reveal word linear
          if(this.animationType == "linear")
          {
            if(i < this.scramble_iteration-10) {
              random_char = this.text.charAt(i);
            }
          } else {
            // reveal word random
            if (Math.random() < 0.2) {
              random_char = this.text.charAt(i);
            }
          }
        }
        new_word = new_word + random_char;
        if (new_word === this.text) {
          end = true;
        }
      }
      this.word = new_word; 
      if (end) {
        clearInterval(this.repeater);
      }
    }
  },
  mounted() {
    this.repeater = setInterval(this.scramble, this.switchSpeed);
  }
}
</script>

<style scoped>
.WordScr4mblerText {
  color: white;
}
</style>
