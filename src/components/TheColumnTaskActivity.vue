<template>
  <div>
    <p class="highlight">Activity</p>
    <div class="activity-routes">
      <span>Show: </span>
      <router-link :to="{ name: 'Comments' }">Comments</router-link>
      <router-link :to="{ name: 'History' }">History</router-link>
      <router-link :to="{ name: 'Worklog' }">Work log</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheColumnTaskActivity",
};
</script>

<style lang="scss" scoped>
.router-link-active {
  background-color: #595b5f;
  color: #f4f5f7;
}
</style>
