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
$padding-outer-vertical: 0px;
$padding-outer-horizontal: 5px;

$margin-outer-horizontal: 20px;
$margin-outer-vertical: 10px;

.outer-deck-display {
  padding-top: $padding-outer-vertical;
  padding-bottom: $padding-outer-vertical;
  padding-left: $padding-outer-horizontal;
  padding-right: $padding-outer-horizontal;

  margin-right: $margin-outer-horizontal;
  margin-bottom: $margin-outer-vertical;
  margin-top: $margin-outer-vertical;

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

$margin-edit-vertical: 15px;

.edit-button {
  margin-bottom: $margin-edit-vertical;
  margin-top: $margin-edit-vertical;

  border: none;
  background: none;
  outline: none;
}

.edit-button:active {
  transform: translateY(2px) translateX(-2px);
}
</style>