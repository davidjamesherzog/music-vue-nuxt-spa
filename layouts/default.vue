<template>
  <div class="container">
    <el-container style="height: 100%">
      <search />
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Search from '@/components/Search.vue';

@Component({
  name: 'App',
  components: {
    Search
  }
})
export default class App extends Vue {}
</script>

<style>
#__nuxt {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

.float-right {
  float: right;
}

.el-header {
  overflow: hidden;
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  font-size: 1rem;
  position: fixed;
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  z-index: 9999;
}

@media only screen and (max-width: 768px) {
  .el-main {
    padding: 0 !important;
  }
}

.el-main {
  margin-top: 60px;
}

.el-aside {
  color: #333;
}

body {
  margin: 0px;
}
</style>
