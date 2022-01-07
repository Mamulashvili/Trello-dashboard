<template>
  <teleport to="body">
    <div class="backdrop" @click.self="redirectHome">
      <div class="custom-modal rounded bg-white p-3">
        <div v-if="title" class="modal-headed">
          <h4 class="fw-bold">{{ title }}</h4>
          <hr />
        </div>
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: "BaseModal",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    redirectHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style lang="scss" scoped>
.backdrop {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(73, 80, 87, 0.7);
  height: 100vh;

  .custom-modal {
    width: 50%;
    height: auto;
    max-height: 50%;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: auto;
  }
}
</style>
