<template>
  <happy-scroll resize size="8" :style="{height:'100% '}">
    <Row :style="{height:'100% ',background: '#fff'}">
      <Col span="24" :style="{height: '100% '}">
      <slot></slot>
      </Col>
    </Row>
  </happy-scroll>
</template>

<script>

    export default {
        name: "panel-body"
    }
</script>

<style scoped>
.happy-scroll-container{
  height:100% !important;
}
</style>
