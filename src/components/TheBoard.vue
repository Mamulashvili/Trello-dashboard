<template>
  <div
    class="container-fluid d-flex flex-row justify-content-between align-items-start p-3 overflow-auto"
  >
    <the-column
      v-for="(column, columnIndex) of getBoardData.columns"
      :key="columnIndex"
      :column="column"
      :columnIndex="columnIndex"
      :board="getBoardData"
    />

    <div class="p-3 m-2 d-flex flex-column w-100 bg-sec rounded task-wrapper">
      <form @submit.prevent="createColumn">
        <input
          type="text"
          class="bg-transparent bg-white form-control"
          placeholder="New column name"
          v-model="newColumnName"
        />
        <div v-if="v$.newColumnName.$error" class="d-flex mt-2">
          <small
            class="text-danger"
            v-for="error in v$.newColumnName.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </small>
        </div>
      </form>
    </div>
  </div>

  <base-modal v-if="isTaskOpen">
    <router-view />
  </base-modal>
</template>

<script>
import { mapGetters } from "vuex";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import TheColumn from "@/components/TheColumn";

export default {
  name: "TheBoard",
  components: {
    TheColumn,
  },

  data() {
    return {
      v$: useVuelidate(),
      newColumnName: "",
    };
  },

  validations() {
    return {
      newColumnName: { required, $autoDirty: true },
    };
  },

  computed: {
    ...mapGetters(["getBoardData"]),
    isTaskOpen() {
      return this.$route.path.includes("task");
    },
  },

  methods: {
    async createColumn() {
      const isValid = await this.v$.newColumnName.$validate();
      if (!isValid) return;

      this.$store
        .dispatch("createColumn", { columnName: this.newColumnName })
        .then(() => {
          this.newColumnName = "";
          this.v$.newColumnName.$reset();
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

:global(.add-task-input) {
  border: none;
  font-size: 12px;
  &:focus {
    outline: none;
  }
}

.task-wrapper {
  min-width: 300px;
}
</style>
