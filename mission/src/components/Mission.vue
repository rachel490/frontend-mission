<template>
  <div>
    <input type="text" v-model="inputValue" />
    <button id="submit-btn" type="button" @click="rotate">제출</button>
    <button id="alert-btn" type="button" @click="alarm">알림</button>
    <p data-test="string-rotation">{{ value }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      count: 0,
    };
  },
  methods: {
    rotate() {
      const str = [...this.inputValue];
      str.push(str[0]);
      str.shift();
      this.inputValue = str.join('');
    },
    alarm() {
      this.count += 1;
      alert(`${this.inputValue} ${this.count}`);
    },
  },
};
</script>

<style></style>
