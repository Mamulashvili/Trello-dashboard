<template>
  <div @drop.self="onDrop($event)" @dragover.prevent @dragenter.prevent>
    <slot />
  </div>
</template>

<script>
export default {
  name: "BaseDrag",
  emits: ["drop"],
  props: {
    transferData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onDrop(e) {
      const transferData = e.dataTransfer.getData(
        "payload",
        JSON.parse(this.transferData)
      );
      this.$emit("drop", transferData);
    },
  },
};
</script>
