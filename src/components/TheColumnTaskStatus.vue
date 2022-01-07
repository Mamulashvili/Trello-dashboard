<template>
  <div>
    <p class="small my-0">{{ title }}</p>
    <div class="btn-group" role="group">
      <button
        id="btnGroupDrop1"
        type="button"
        class="btn btn-success dropdown-toggle cust-btn-group"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {{ active || "Status" }}
      </button>
      <ul
        class="dropdown-menu custom-dropdown-menu"
        aria-labelledby="btnGroupDrop1"
      >
        <li
          v-for="(item, index) in dropdownData"
          :key="index"
          @click="$emit('handleClick', item)"
        >
          <p class="dropdown-item" href="#">{{ item.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheColumnTaskStatus",
  emits: ["handleClick"],
  props: {
    title: {
      type: String,
      required: true,
      default: "Status",
    },
    active: {
      type: [String, null],
      required: true,
      default: "Status",
    },
    dropdownData: {
      type: [Array, Object],
      required: true,
    },
  },
};
</script>

<style scoped>
p {
  margin: 0;
  cursor: pointer;
}
</style>
