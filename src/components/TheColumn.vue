<template>
  <div
    class="p-2 m-2 d-flex flex-column w-100 bg-sec rounded task-wrapper"
    draggable="true"
    @dragover.prevent
    @dragenter.prevent
    @dragstart.self="pickupColumn($event, columnIndex)"
    @drop="moveTaskOrColumn($event, column.tasks, columnIndex)"
  >
    <div class="mb-3 text-start fw-bold">
      {{ column.name }}
      <small v-bgc="'#222'">
        {{ column.tasks.length }}
      </small>
    </div>

    <the-column-task
      v-for="(task, taskIndex) in column.tasks"
      :key="`${task.id}_${taskIndex}`"
      :task="task"
      :columnIndex="columnIndex"
      :taskIndex="taskIndex"
      :toColumnTasks="column.tasks"
      :board="board"
    />

    <input
      type="text"
      class="bg-transparent add-task-input"
      placeholder="+ Enter new task"
      @keyup.enter="createNewTask($event, column.name)"
    />
  </div>
</template>

<script>
import TheColumnTask from "@/components/TheColumnTask";
import moveTaskOrColumnMixin from "@/mixins/moveTaskOrColumnMixin";

export default {
  name: "TheColumn",
  components: {
    TheColumnTask,
  },
  mixins: [moveTaskOrColumnMixin],
  props: {
    column: {
      type: Object,
      required: true,
    },
  },

  computed: {
    isTaskOpen() {
      return this.$route.name == "Task";
    },
  },

  methods: {
    pickupColumn(e, columnIndex) {
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.dropEffect = "move";

      e.dataTransfer.setData("column-index", columnIndex);
      e.dataTransfer.setData("type", "column");
    },

    createNewTask(e, columnName) {
      this.$store.dispatch("createTask", {
        taskName: e.target.value,
        columnName,
      });
      e.target.value = "";
    },
  },
};
</script>
