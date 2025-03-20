<template>
  <div id="app">
    <h1>ETL Alkalmazás</h1>
    <button @click="closeApp">Alkalmazás bezárása</button>
    <ETLProgress v-if="showETLProgress" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ETLProgress from './components/ETLProgress.vue';

const showETLProgress = ref(false);

function closeApp() {
  if (window.electronAPI) {
    window.electronAPI.closeApp();
  } else {
    console.error("Az Electron API nem elérhető.");
  }
}

// Az ETL progress megnyitása
onMounted(() => {
  window.electronAPI.openETLProgress(() => {
    showETLProgress.value = true;
  });
});
</script>

<style>
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #ff4444;
  color: white;
  border: none;
  border-radius: 5px;
}

button:hover {
  background-color: #cc0000;
}
</style>
