<template>
  <v-md-editor
    v-model="mdData"
    mode="preview"
    height="100%"
  ></v-md-editor>
</template>

<script>
import { readFile } from 'fs';
import { pathJoin } from '@/utils/node';

export default {
  data() {
    return {
      mdData: '',
    };
  },
  created() {
    this.getMdData();
  },
  methods: {
    getMdData() {
      const filePath = pathJoin('README.md');
      readFile(filePath, (error, data) => {
        if (error) console.log(error);
        this.mdData = data.toString();
      });
    },
  },
};
</script>

<style>
</style>
