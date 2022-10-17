<template>

<nav class="navbar navbar-expand-sm navbar-dark">
<div class="container">
  <router-link to="/"  class="navbar-brand">PC-Konfigurator</router-link>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navBarNav">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a href="/Login"  class="nav-link">Login</a>
    </li>
    <li class="nav-item active">
      <a href="/register"  class="nav-link">Register</a>
    </li>
  </ul>
</div>
</div>
</nav>

</template>

<script>

export default {
  name: "TheNavbar",
  components: {},

};

</script>

<style scoped>
.container{
  background-color: #141a1f;
  color:white;
}

.navbar-expand-sm{
  padding-bottom: 0;
}

</style>