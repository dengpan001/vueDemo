<template>
  <Layout class="fullHeight" :style="{padding: '10px',backgroundColor: '#D9E0E7'}">
    <Content class="fullHeight" :style="{padding: '0px',overflow:'hidden',borderRadius: '8px 8px 0 0;'}">
      <router-view />
    </Content>
  </Layout>
</template>

<script>
    export default {
        name: "wrapper"
    }
</script>

<style scoped>
  .fullHeight{
    height: 100%;
  }
</style>
