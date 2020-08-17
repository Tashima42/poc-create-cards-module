<template>
  <div class="criar-baralho">
    <button class="btn-criar">CRIAR BARALHO</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@font-face {
  font-family: "Roboto Condensed";
  src: local("Roboto Condensed"),
    url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap");
}

.btn-criar {
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.7em;
  line-height: 42px;
  text-align: center;

  width: 30vw;
  height: 7vh;

  background: #1f38d1;
  color: #e8e8e8;

  box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14),
    0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 10px;
}
</style>
