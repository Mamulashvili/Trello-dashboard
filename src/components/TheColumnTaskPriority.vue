<template>
  <div>
    <p class="small my-0 mt-2">Priority</p>
    <select
      v-if="!assignedPriority"
      class="form form-control"
      @change="updateTaskPiority($event)"
    >
      <option value="" selected disabled>Choose priority</option>
      <option
        v-for="priority in priorities"
        :key="priority.id"
        :value="priority.name"
      >
        {{ priority.name }}
      </option>
    </select>
    <p v-else class="x-small">{{ assignedPriority }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TheColumnTaskPriority",
  props: {
    assignedPriority: {
      type: [String],
    },

    taskId: {
      type: String,
      required: true,
    },
  },

  computed: {
    ...mapGetters({ priorities: "priorities/getPriorities" }),
  },

  methods: {
    updateTaskPiority(e) {
      this.$store.dispatch("priorities/updateTaskPriority", {
        priority: e.target.value,
        id: this.$route.params.id,
      });
    },
  },
};
</script>
