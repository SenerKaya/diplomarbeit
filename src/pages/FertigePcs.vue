<template>
  <div class="Uebersicht">
    <h1> Hier Fertige PCs</h1>
  </div>
  <form>
    <!-- Email input -->
    <div class="form-outline mb-sm-2">
      <input type="email" id="form2Example1" class="form-control" />
      <label class="form-label" for="form2Example1">Email address</label>
    </div>

    <!-- Password input -->
    <div class="form-outline mb-sm-2">
      <input type="password" id="form2Example2" class="form-control" />
      <label class="form-label" for="form2Example2">Password</label>
    </div>

    <!-- 2 column grid layout for inline styling -->


    <!-- Submit button -->
    <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

    <!-- Register buttons -->
    <div class="text-center">
      <p>Not a member? <a href="#!">Register</a></p>
      <p>or sign up with:</p>
    </div>
  </form>

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


</style>