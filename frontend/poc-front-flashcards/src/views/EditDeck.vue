<template>
  <div class="edit-deck">
    <p class="deck-name">Programming deck</p>
    <div class="card-edit">
      <div class="card">
        <div class="text-input">
          <InsertTextLarge class="insert-text" />
          <InsertTextLarge class="insert-text" />
        </div>
        <button class="delete-button">
          <img src="../assets/icons/edit-trash.svg" />
        </button>
      </div>
      <div class="card">
        <div class="text-input">
          <InsertTextLarge class="insert-text" />
          <InsertTextLarge class="insert-text" />
        </div>
        <button class="delete-button">
          <img src="../assets/icons/edit-trash.svg" />
        </button>
      </div>
    </div>
    <div class="buttons">
      <DefaultButton buttonText="+" class="button-add" />
      <DefaultButton buttonText="S" class="button-save" />
    </div>
  </div>
</template>

<script>
import DefaultButton from "../components/DefaultButton";
import InsertTextLarge from "../components/InsertTextLarge";

export default {
  name: "EditDeck.vue",
  components: {
    DefaultButton,
    InsertTextLarge,
  },
};
</script>

<style lang="scss" scoped>
.edit-deck {
  display: inline-flex;

  flex-direction: column;
}

.deck-name {
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 2.5rem;
  text-align: center;
  text-transform: uppercase;

  color: #5030d1;

  text-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14),
    0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);
}

.card-edit {
  display: flex;
  flex-direction: row;

  align-content: center;
}

.card {
  margin: 0px 1.5vw 0px 1.5vw;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  width: 41vw;
  height: 60vh;
  min-width: 400px;
  min-height: 437.6px;

  background: #d1d8ff;
  box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14),
    0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.text-input {
  align-self: center;
}

.delete-button {
  align-self: center;
  justify-self: flex-end;

  margin: 0px 1.5vw 0px 0px;

  border: none;
  background: none;
  outline: none;
}

.delete-button:active {
  transform: translateY(2px) translateX(-2px);
}

.buttons {
  display: inline-flex;
  flex-direction: row;

  align-self: center;
}

.button-add {
  margin: 3vh 2vw 0px 2vw;
}

.button-save {
  margin: 3vh 2vw 0px 2vw;
}
@media (max-width: 768px) {
  .card-edit {
    flex-direction: column;
  }

  .card {
    flex-direction: column;

    margin: 3vh 0vw 3vh 0vw;

    width: 80vw;
    height: 60vh;
  }
  .text-input {
    display: flex;
    flex-direction: column;
  }
  .delete-button {
    margin: 3vh 0vw 0px 0px;
  }
}

@media (max-width: 320px) {
  .card {
    height: 80vh;
  }
}
</style>