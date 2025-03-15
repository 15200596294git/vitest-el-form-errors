<script lang="ts" setup>
import { ref, reactive } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

const form = ref();
const model = reactive({
  name: "",
});
const rules = {
  name: [{ required: true, message: "请输入用户名" }],
};
const submit = () => {
  form.value?.validate((isValid) => {
    console.log("isValid");
  });
};
</script>

<template>
  <div>
    <el-form ref="form" :model="model" :rules="rules">
      <el-form-item prop="name">
        <el-input v-model="model.name" />
      </el-form-item>
      <el-form-item>
        <el-button data-test="submit-btn" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
