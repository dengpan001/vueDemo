<template>
  <Table border :columns="columns1" :data="data1"></Table>
</template>
<script>
  export default {
    data () {
      return {
        //key值对应数据的key
        columns1: [
          {
            title: '表具编号',
            key: 'name'
          },
          {
            title: '表具型号',
            key: 'age'
          },
          {
            title: '最后通讯时间',
            key: 'date'
          }
        ],
        data1: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ]
      }
    }
  }
</script>
