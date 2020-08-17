<template>
  <div class="create-deck">
    <button class="new-deck-btn">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: "DefaultButton",
  data() {
    return {
      text: this.buttonText,
    };
  },
  props: {
    buttonText: {
      type: String,
      default: "button",
    },
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "Roboto Condensed";
  src: local("Roboto Condensed"),
    url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap");
}

.new-deck-btn {
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.7em;
  line-height: 42px;
  text-align: center;
  text-transform: uppercase;

  padding-left: 1.7vw;
  padding-right: 1.7vw;
  padding-top: 1.2vh;
  padding-bottom: 1.2vh;

  background: #384ed3;
  color: #e8e8e8;

  box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14),
    0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 10px;
  outline: none;
}

.new-deck-btn:active {
  transform: translateY(2px) translateX(-2px);
}
</style>
