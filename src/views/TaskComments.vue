<template>
  <div class="py-3">
    <ul>
      <li v-for="(comment, index) in comments" :key="index">
        <b><p class="comment-author">Shota M.</p></b>
        <p class="comment">{{ comment }}</p>
      </li>
    </ul>

    <div class="d-flex">
      <user-block :imgUrl="require('@/assets/images/avatar.png')" />
      <input
        type="text"
        class="form-control"
        placeholder="Write a comment"
        v-model="comment"
        @keyup.enter="updateComments"
      />
    </div>
    <div>
      <small
        class="text-danger"
        v-for="error in v$.comment.$errors"
        :key="error.$uid"
      >
        {{ error.$message }}
      </small>
    </div>
    <small><b>Tip:</b> Press enter for submit comment</small>
  </div>
</template>

<script>
import UserBlock from "@/components/TheColumnTaskUserBlock";
import { mapGetters } from "vuex";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  name: "TaskComments",

  components: {
    UserBlock,
  },

  data() {
    return {
      v$: useVuelidate(),
      comment: "",
    };
  },

  validations() {
    return {
      comment: {
        required,
        $autoDirty: true,
        $lazy: true,
      },
    };
  },

  computed: {
    ...mapGetters({
      getComments: "getComments",
      getTaskById: "getTaskById",
    }),

    comments() {
      return this.getComments(this.$route.params.id);
    },
    task() {
      return this.getTaskById(this.$route.params.id);
    },
  },

  methods: {
    async updateComments() {
      const canSubmit = await this.v$.comment.$validate();
      console.log(canSubmit);
      if (!canSubmit) return;

      this.$store
        .dispatch("insertTaskValue", {
          task: this.task,
          key: "comments",
          value: this.comment,
        })
        .then(() => {
          this.v$.$reset();
          this.comment = "";
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
small {
  font-size: 10px;
  color: #595b5f;
}

ul {
  padding-left: 0;

  li {
    list-style-type: none;
    font-size: 11px;
    color: #595b5f;

    .comment-author,
    .comment {
      margin: 0;
    }

    .comment-author {
      color: #4a5975;
    }

    .comment {
      margin-bottom: 7px;
    }
  }
}
</style>
