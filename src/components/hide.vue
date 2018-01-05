<style scoped>
  .expand-row{
    margin-bottom: 16px;
  }
</style>
<template>
<div>
   <Row class="expand-row">
     <Col span="8">
     <span class="expand-key">状态: </span>
     <span class="expand-value">{{ row.status }}</span>
     </Col>
   </Row>
    <Row class="expand-row">
    <Col span="8">
    <span class="expand-key">原因: </span>
    <span class="expand-value">{{ row.reason }}</span>
    </Col>
    </Row>
 </div>
</template>
<script>
  export default {
    props: {
      row: Object
    }
  };
</script>
