<template>
    <Row :style="{height:'calc(100% - 40px) ',background: '#fff'}">
      <Col span="24" :style="{height: '100% '}">
      <happy-scroll resize size="8">
          <slot></slot>
      </happy-scroll>
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
