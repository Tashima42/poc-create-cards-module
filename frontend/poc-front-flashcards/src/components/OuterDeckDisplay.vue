<template>
  <div class="outer-deck-display">
    <InnerDeckDisplay backgroundColor="#8130D1" deckName="test deck" />
    <div class="edit-sec">
      <button class="edit-button">
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
};
</script>

<style lang="scss" scoped>
.outer-deck-display {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 30px;
  padding-right: 30px;

  margin-right: 20px;
  margin-bottom: 10px;
  margin-top: 10px;

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
  margin-bottom: 15px;
  margin-top: 15px;

  border: none;
  background: none;
  outline: none;
}

.edit-button:active {
  transform: translateY(2px) translateX(-2px);
}
</style>