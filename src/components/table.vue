<template>
  <Row class="fullHeight">
    <Col span="12" :style="{padding:'0 5px',height: '100% '}">
      <panelHeader></panelHeader>
      <panelBody>
         <Table :columns="columns10" :data="data9"></Table>
      </panelBody>
    </Col>
  </Row>
</template>
<!--<template>
  <Table border :columns="columns1" :data="data1"></Table>
</template>-->
<script>
  import expandRow from './hide.vue';
  import Layout from "iview/src/components/layout/layout";
  import panelHeader from '../publicComponents/panelHeader';
  import panelBody from "../publicComponents/panelBody";
  export default {
    components: {
      expandRow,
      panelBody,
      Layout,
      panelHeader
    },
    data () {
      return {
        columns10: [
          {
            type: 'expand',
            width: 50,
            render: (h, params) => {
              return h(expandRow, {
                props: {
                  row: params.row
                }
              })
            }
          },
          {
            title: '表具编号',
            key: 'id'
          },
          {
            title: '表具类型',
            key: 'type'
          },
          {
            title: '表具型号',
            key: 'tType'
          }
        ],
        data9: [
          {
            id: '999910791002',
            type: '智能表',
            tType: '金卡物联网NB10型',
            status: '已拆除',
            reason:'废弃'
          },
          {
            id: '999910791002',
            type: '智能表',
            tType: '金卡物联网NB10型',
            status: '已拆除',
            reason:'损坏'
          },
          {
            id: '999910791002',
            type: '智能表',
            tType: '金卡物联网NB10型',
            status: '已拆除',
            reason:'废弃'
          },
          {
            id: '999910791002',
            type: '智能表',
            tType: '金卡物联网NB10型',
            status: '已拆除',
            reason:'废弃'
          }
        ]
      }
    },
  }
</script>
<!--
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
-->
