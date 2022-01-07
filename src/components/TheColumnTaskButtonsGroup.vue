<template>
  <div class="d-flex">
    <base-button title="Attach" btnStyle="customTaskHeaderBtn">
      <template v-slot:beforeText>
        <i class="fas fa-paperclip"></i>
      </template>
    </base-button>

    <base-button title="Create subtask" btnStyle="customTaskHeaderBtn">
      <template v-slot:beforeText>
        <i class="far fa-check-square"></i>
      </template>
    </base-button>

    <base-button title="Link issue" btnStyle="customTaskHeaderBtn">
      <template v-slot:beforeText>
        <i class="fas fa-link"></i>
      </template>
    </base-button>
  </div>
</template>

<script>
export default {
  name: "TheColumnTaskButtonsGroup",
};
</script>

<style scoped>
i {
  padding-right: 7px;
}
</style>
