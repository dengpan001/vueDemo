<template>
  <Row class="fullHeight">

    <Col span="12" :style="{padding:'0 5px',height: '100% '}">
      <panelHeader></panelHeader>
      <panelBody>
        <Tree :data="data4" show-checkbox multiple></Tree>
      </panelBody>
    </Col>

    <Col class="" span="12" :style="{padding:'0 5px',height: '100% '}">
    <panelHeader></panelHeader>
    <panelBody>
      <Tabs type="card" closable @on-tab-remove="handleTabRemove">
        <TabPane label="标签一" v-if="tab0">标签一的内容</TabPane>
        <TabPane label="标签二" v-if="tab1">标签二的内容</TabPane>
        <TabPane label="标签三" v-if="tab2">标签三的内容</TabPane>
      </Tabs>
    </panelBody>
    </Col>
  </Row>
</template>

<script>
  import Layout from "iview/src/components/layout/layout";
  import panelHeader from '../publicComponents/panelHeader';
  import panelBody from "../publicComponents/panelBody";

  export default {
    data () {
      return {
        data4: [
          {
            title: 'parent 1',
            expand: true,
            selected: true,
            children: [
              {
                title: 'parent 1-1',
                expand: true,
                children: [
                  {
                    title: 'leaf 1-1-1',
                    disabled: true
                  },
                  {
                    title: 'leaf 1-1-2'
                  }
                ]
              },
              {
                title: 'parent 1-2',
                expand: true,
                children: [
                  {
                    title: 'leaf 1-2-1',
                    checked: true
                  },
                  {
                    title: 'leaf 1-2-1'
                  }
                ]
              }
            ]
          }
        ],
        tab0: true,
        tab1: true,
        tab2: true
      }
    },
    components: {
      panelBody,
      Layout,
      panelHeader
    },
    methods: {
      handleTabRemove (name) {
        this['tab' + name] = false;
      }
    },
    name: "meter"
  }
</script>

<style scoped>
  .border{border:1px solid blue;}
</style>
