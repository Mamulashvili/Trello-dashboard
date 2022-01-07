<template>
  <h5>Task details</h5>
  <hr />
  <div class="row">
    <div class="col-md-8">
      <div class="col-md-12">
        <input
          type="text"
          :value="task.name"
          class="bg-transparent"
          @blur="updateTaskProperty($event.target.value, 'name')"
        />

        <header-buttons-group :style="{ 'margin-top': '5px' }" />
        <p class="highlight">Description</p>
        <textarea
          class="mt-2"
          :value="task.description"
          @blur="updateTaskProperty($event.target.value, 'description')"
          rows="5"
        >
        </textarea>

        <task-activity />
        <router-view />
      </div>
    </div>
    <div class="col-md-4">
      <div class="col-md-12">
        <task-status
          title="Status"
          :dropdownData="statuses"
          :active="task.status"
          @handleClick="updateTaskStatus"
        />

        <user-block
          title="Creator"
          user="Shota Mamulashvili"
          :imgUrl="require('@/assets/images/avatar.png')"
        />

        <user-block
          v-if="task.userAssigned"
          title="Assigned"
          :user="task.userAssigned"
          :imgUrl="require('@/assets/images/memoji_avatar.png')"
        />

        <div v-else>
          <p class="small my-0 mt-2">Assigne</p>
          <base-dropdown
            :selects="users"
            defaultSelectValue="Assign user"
            @handleChange="updateAssignedUser"
          />
        </div>

        <task-priority :assignedPriority="task.priority" :taskId="task.id" />

        <p class="small my-0 mt-2">Time tracking</p>
        <p class="x-small">3h 25m</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TheColumnTaskPriority from "@/components/TheColumnTaskPriority";
import TheColumnTaskStatus from "@/components/TheColumnTaskStatus";
import TheColumnTaskButtonsGroup from "@/components/TheColumnTaskButtonsGroup";
import UserBlock from "@/components/TheColumnTaskUserBlock";
import TaskActivity from "@/components/TheColumnTaskActivity";

export default {
  name: "Task",
  components: {
    taskPriority: TheColumnTaskPriority,
    TaskStatus: TheColumnTaskStatus,
    HeaderButtonsGroup: TheColumnTaskButtonsGroup,
    UserBlock,
    TaskActivity,
  },

  computed: {
    ...mapGetters({
      getTaskById: "getTaskById",
      statuses: "statuses/getStatuses",
      users: "users/getUsers",
    }),
    task() {
      return this.getTaskById(this.$route.params.id);
    },
  },

  methods: {
    updateTaskProperty(e, key) {
      this.$store.dispatch("updateTask", {
        task: this.task,
        key,
        value: e,
      });
    },

    updateTaskStatus(status) {
      this.updateTaskProperty(status.name, "status");
    },

    updateAssignedUser(user) {
      this.updateTaskProperty(user, "userAssigned");
    },
  },
};
</script>
