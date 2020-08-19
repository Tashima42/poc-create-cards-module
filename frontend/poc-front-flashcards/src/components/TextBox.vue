<template>
  <div class="insert-text-field">
    <p class="text-input-label">Text label</p>
    <div class="text-box">
      <p class="text-paragraph">
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "TextBox",
};
</script>

<style lang="scss" scoped>
.insert-text-field {
  display: inline-flex;
  flex-direction: column;
}

.text-input-label {
  align-self: flex-start;

  margin: 0px 0px 1vh 3vw;

  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.1em;
  text-align: center;
  text-transform: uppercase;

  color: #373737;
}

.text-box {
  align-self: center;

  width: 45vw;

  padding: 20px;
  resize: none;

  display: flex;
  flex: 1;

  margin-bottom: 20px;

  background: #5030d1;

  box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14),
    0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  border: none;
  outline: none;
}

.text-paragraph {
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  text-align: left;

  align-self: center;

  word-wrap: break-word;

  color: #e8e8e8;
}

@media (max-width: 1024px) {
  .text-box {
    width: 55vw;
  }
}

@media (max-width: 425px) {
  .text-box {
    width: 70vw;
  }
}
</style>