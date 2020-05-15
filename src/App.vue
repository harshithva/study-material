<template>
  <fragment>
    <hr class="top-line" />
    <div class="container">
      <div class="row">
        <div class="col">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col">
        <p class="text-center">&copy; Copyright 2020</p>
        <p class="text-center">
          Designed and built with all the love &hearts;
          <a
            href="https://www.github.com/harshithva/"
          >Harshith VA</a>
        </p>
      </div>
    </div>
  </fragment>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>

<style>
.top-line {
  background-color: #34495e;
  height: 1.2rem;
  margin-top: -0.2rem;
}
</style>
