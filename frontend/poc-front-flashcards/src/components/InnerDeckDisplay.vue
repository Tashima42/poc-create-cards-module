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
  width: 30vw;
  height: 25vh;
  min-width: 135px;
  min-height: 111px;

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  margin: 3vh 2vw 3vh 2vw;

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
  text-align: center;
  text-transform: uppercase;

  color: white;
}

@media (max-width: 1000px) {
  .inner-deck-display {
    margin: 3vh 2vw 1.4vh 3vw;
  }
}

@media (max-width: 425px) {
  .inner-deck-display {
    width: 60vw;
    height: 20vh;
  }
}

@media (min-width: 1440px) {
  .inner-deck-display {
    max-width: 418px;
    max-height: 168px;
  }
}
</style>