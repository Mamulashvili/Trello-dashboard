<template>
  <div class="home">
    <the-board />
  </div>
</template>

<script>
// @ is an alias to /src
import TheBoard from "@/components/TheBoard.vue";

export default {
  name: "Home",
  components: {
    TheBoard,
  },
};
</script>
