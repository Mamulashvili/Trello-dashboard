<template>
  <div
    class="task p-3 mb-2 text-start rounded bg-white"
    draggable="true"
    @dragover.prevent
    @dragenter.prevent
    @dragstart="pickupTask($event, taskIndex, columnIndex)"
    @drop.stop="moveTaskOrColumn($event, toColumnTasks, columnIndex, taskIndex)"
    @click="openTask(task.id)"
  >
    <div class="d-flex justify-content-between align-items-center">
      <p class="fw-bold mb-0">{{ task.name }}</p>
      <div
        v-if="task.comments.length > 0"
        class="badge text-secondary"
        v-bgc:#DEDEDE
      >
        {{ task.comments.length }}
      </div>
    </div>
    <small v-if="task.description">
      {{ task.description }}
    </small>
    <div class="badge" v-bgc:[task.epic.color]="'#fff'">
      {{ task.epic.name }}
    </div>
  </div>
</template>

<script>
import moveTaskOrColumnMixin from "@/mixins/moveTaskOrColumnMixin";

export default {
  name: "TheColumnTask",

  mixins: [moveTaskOrColumnMixin],

  props: {
    task: {
      type: Object,
      required: true,
    },
    taskIndex: {
      type: Number,
      required: true,
    },

    toColumnTasks: {
      type: Array,
      required: true,
    },
  },

  methods: {
    openTask(id) {
      this.$router.push({ name: "Task", params: { id } });
    },

    pickupTask(e, taskIndex, columnIndex) {
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.dropEffect = "move";

      e.dataTransfer.setData("task-index", taskIndex);
      e.dataTransfer.setData("column-index", columnIndex);
      e.dataTransfer.setData("type", "task");
    },
  },
};
</script>

<style scoped lang="scss">
.task {
  small {
    display: inline-block;
    font-size: 11px;
    line-height: 15px;
    margin: 2px 0;
  }
}
</style>
