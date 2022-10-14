<template>
  <br>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
        <h1>Anmeldung</h1>
        <br>
  <form>
    <!-- Email input -->
    <div class="form-outline mb-sm-2">
      <input type="email" id="form2Example1" class="form-control"  placeholder="Benutzername"/>
      <br>
      <input type="password" id="form2Example2" class="form-control" placeholder="Passwort" />
    </div>
    <br>
    <!-- Submit button -->
    <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

    <!-- Register buttons -->
    <div class="text-center">
      <p>Not a member? <a href="#!">Register</a></p>
      <p>or sign up with:</p>
    </div>
  </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginForm"
}
</script>

<style scoped>



</style>