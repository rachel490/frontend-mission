<template>
  <div>
    <input type="text" v-model="value" />
    <button type="button" v-on:click="move">제출</button>
    <button type="button">알림</button>
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    move() {
      const str = [...this.value];
      str.push(str[0]);
      str.shift();
      this.value = str.join("");
    },
  },
};
</script>

<style></style>
