<template>
  <div>
    <router-link :to="link" class="text-decoration-none">
      <div class="card-body bg-color mt-3" :class="bgColor">
        <h5 class="card-title">{{name}}</h5>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.bg-color-1 {
  background-color: #4568dc;
}
.bg-color-2 {
  background-color: #e74c3c;
}
.bg-color-3 {
  background-color: #f1c40f;
}
.bg-color-4 {
  background-color: #9b59b6;
}
.bg-color-5 {
  background-color: #2ecc71;
}
.bg-color-6 {
  background-color: #f1c40f;
}
.bg-color {
  color: white;
  transition: all 0.4s;
  border-radius: 0 1rem 0 1rem;
  /* box-shadow: 0.2rem 0.5rem; */
}
.bg-color:hover {
  background-color: white;
  color: black;
  border: solid 0.1rem #4568dc;
}
a {
  text-decoration: none;
}
</style>

<script>
export default {
  props: ["name", "link", "bg-color"]
};
</script>