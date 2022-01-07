<template>
  <div>
    <button
      class="btn btn-secondary custom-btn"
      :class="btnStyle"
      @click="$emit('handleClick')"
    >
      <slot name="beforeText"></slot>
      <span :class="textStyle">
        {{ title }}
      </span>
      <slot name="afterText"></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  emits: ["handleClick"],
  props: {
    title: {
      type: String,
      required: true,
      default: "Title",
    },
    btnStyle: { type: String },
    textStyle: { type: String },
  },
};
</script>

<style lang="scss" scoped>
.custom-btn {
  padding: 0.1rem 0.7rem;
  font-size: 13px;
  margin-right: 0.8rem;
}
</style>
