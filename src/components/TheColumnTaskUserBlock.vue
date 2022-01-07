<template>
  <div>
    <p v-if="title" class="small my-0 mt-2">{{ title }}</p>
    <div>
      <img :src="imgUrl" alt="Avatar" class="img-small" />
      <span v-if="user" class="x-small">{{ user }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheColumnTaskUserBlock",
  props: {
    title: { type: String },
    imgUrl: { type: String },
    user: { type: String },
  },
};
</script>
