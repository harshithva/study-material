<template>
  <fragment>
    <hr class="top-line" />
    <div class="container">
      <Subject />
    </div>
  </fragment>
</template>

<script>
import Subject from "./components/Subject.vue";

export default {
  name: "App",
  components: {
    Subject
  }
};
</script>

<style>
.top-line {
  background-color: #34495e;
  height: 1rem;
}
</style>
