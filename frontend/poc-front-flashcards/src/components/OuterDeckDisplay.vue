<template>
  <div class="outer-deck-display">
    <InnerDeckDisplay backgroundColor="#8130D1" deckName="test deck" />
    <div class="edit-sec">
      <button class="edit-button" @click="editDeck">
        <img src="../assets/icons/edit-pencil.svg" />
      </button>
      <button class="edit-button">
        <img src="../assets/icons/edit-trash.svg" />
      </button>
    </div>
  </div>
</template>

<script>
import InnerDeckDisplay from "./InnerDeckDisplay";
export default {
  name: "OuterDeckDisplay",
  components: {
    InnerDeckDisplay,
  },
  methods: {
    editDeck() {
      this.$router.push({ name: "EditDeck" });
    },
  },
};
</script>

<style lang="scss" scoped>
.outer-deck-display {
  padding: 0px 1vw 0px 1vw;

  margin: 2vh 1vw 2vh 1vw;

  display: inline-flex;
  flex-direction: row;

  background: #d1d8ff;
  box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14),
    0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.edit-sec {
  display: flex;
  flex-direction: column;

  justify-content: center;
}

.edit-button {
  margin: 2vh 0px 2vh 0px;

  border: none;
  background: none;
  outline: none;
}

.edit-button:active {
  transform: translateY(2px) translateX(-2px);
}

@media (max-width: 1000px) {
  .outer-deck-display {
    flex-direction: column;
  }

  .edit-sec {
    flex-direction: row;
  }

  .edit-button {
    margin: 1vh 3vw 1vh 3vw;
  }
}
</style>