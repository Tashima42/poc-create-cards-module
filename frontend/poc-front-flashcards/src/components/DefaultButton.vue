<template>
  <div class="default-button">
    <button class="new-btn">
      <slot></slot>
    </button>
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
.new-btn {
  padding: 1.2vh 1.3vw 1.2vh 1.3vw;

  color: #e8e8e8;

  box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14),
    0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 10px;
  outline: none;
}

.new-btn:active {
  transform: translateY(2px) translateX(-2px);
}

.default-button[green] .new-btn {
  background: #5cb85c;
}
.default-button[blue] .new-btn {
  background: #384ed3;
}
.default-button[red] .new-btn {
  background: #da2239;
}

@media (max-width: 1024px) {
  .new-btn {
    padding: 1.2vh 1.8vw 1.2vh 1.8vw;
  }
}
@media (max-width: 425px) {
  .new-btn {
    padding: 1.2vh 6vw 1.2vh 6vw;
  }
}
</style>
