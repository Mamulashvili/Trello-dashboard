<template>
  <div>
    <select
      class="form form-control"
      @change="$emit('handleChange', $event.target.value)"
    >
      <option value="" selected disabled>{{ defaultSelectValue }}</option>
      <option
        v-for="(select, index) in selects"
        :key="index"
        :value="select.name"
      >
        {{ select.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "BaseDropdown",
  emits: ["handleChange"],
  props: {
    selects: {
      type: [Array, Object],
    },
    defaultSelectValue: { type: String },
  },
};
</script>

<style lang="scss" scoped></style>
