<template>
  <h1 data-test='title'>{{ title }}</h1>
</template>

<script>
export default {
  data() {
    return {
      title: 'My Shopping Mall',
    };
  },
};
</script>

<style scoped>
h1 {
  margin: 0;
  padding: 10px 0;
  text-align: center;
}
</style>
