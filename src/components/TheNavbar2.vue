<template>
  <nav class="navbar navbar-expand-sm navbar-dark">
    <div class="container">
      <div class="collapse navbar-collapse" id="navBarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/FertigePcs"  class="nav-link">Fertige PCs</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/PcSelberKonfigurieren"  class="nav-link">PC selber konfigurieren</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/UebersichtCpuKompabilitaet"  class="nav-link pl-0" >Übersicht CPU Kompabilität </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: "TheNavbar2",
};

</script>

<style scoped>
.container {
  background-color: #2c3e50;
}
.navbar-expand-sm{
  padding-bottom: 0;
  padding-top: 0;
}
</style>