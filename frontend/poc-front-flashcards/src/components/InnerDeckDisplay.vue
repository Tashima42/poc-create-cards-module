<template>
  <div class="inner-deck-display" :style="cssVars">
    <p class="deck-name">{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "InnerDeckDisplay",
  data() {
    return {
      name: "baralho de testes",
    };
  },
  props: {
    corBg: {
      type: String,
      default: "#D13060",
    },
  },
  computed: {
    cssVars() {
      return {
        "--cor-bg": this.corBg,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.inner-deck-display {
  width: 34vw;
  height: 20vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--cor-bg);
  box-shadow: 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2),
    0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}

.deck-name {
  color: white;
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2em;
  line-height: 42px;
  text-align: center;
  text-transform: uppercase;
}
</style>