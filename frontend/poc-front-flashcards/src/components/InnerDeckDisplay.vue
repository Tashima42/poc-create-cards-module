<template>
  <div class="inner-deck-display">
    <p class="deck-name">{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "InnerDeckDisplay",
  data() {
    return {
      name: this.deckName,
    };
  },
  props: {
    deckName: {
      type: String,
      default: "Deck name",
    },
  },
};
</script>

<style lang="scss" scoped>
.inner-deck-display {
  width: 20vw;
  height: 10vh;
  min-width: 312px;
  min-height: 180px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 30px;

  background: #d13060;

  box-shadow: 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2),
    0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}

.deck-name {
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2em;
  line-height: 42px;
  text-align: center;
  text-transform: uppercase;

  color: white;
}
</style>