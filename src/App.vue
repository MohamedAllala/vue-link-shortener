<script setup lang="ts">
import LinkShortener from './components/LinkShortener.vue'
import Layout from './components/Layout.vue'
</script>

<template>
  <Layout>
    <template #default> 
      <LinkShortener/>  
    </template>
  </Layout>
</template>
