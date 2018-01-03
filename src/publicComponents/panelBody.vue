<template>
  <Row :style="{height:'100% ',background: '#fff'}">
    <Col span="24" :style="{height: '100% '}">
    <slot></slot>
    </Col>
  </Row>
</template>

<script>
    export default {
        name: "panel-body"
    }
</script>

<style scoped>

</style>
