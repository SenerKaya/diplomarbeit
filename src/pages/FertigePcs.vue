<template>
  <div class="Uebersicht">
    <h1> Hier Fertige PCs</h1>

    <button class="css-button-rounded--sky"> Klick mich </button>

  </div>


<!--  <div>
  <main>
    <div class="container"> </div>
    <div class="row"></div>
    <div class="col-12">
      <slot> <h1> hier sind fertige PCs</h1></slot>
    </div>
  </main>
  </div>-->

</template>

<script>

export default {
  name: "FertigePcs",
};

</script>

<style scoped>
.css-button-rounded--sky {
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  border: 2px solid #4433ff;
  background: #4433ff;
}
.css-button-rounded--sky:hover {
  background: #fff;
  color: #4433ff
}

</style>