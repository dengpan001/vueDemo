<!--<template>-->
  <!--<div id="app">-->
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
  <!--name: 'app'-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--#app {-->
  <!--font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
  <!-- -webkit-font-smoothing: antialiased;-->
  <!-- -moz-osx-font-smoothing: grayscale;-->
  <!--text-align: center;-->
  <!--color: #2c3e50;-->
  <!--margin-top: 60px;-->
<!--}-->
<!--</style>-->
<style scoped>
  .layout{
    height:100%;
    width:100%;
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .leftBackgroundColor{
    background-color: #2C343C !important;
  }
  .fullHeight{
    height: 100%;
  }
</style>
<template>
  <div class="layout fullHeight" id="app">
    <Layout class="fullHeight">
      <wrapperTopMenu></wrapperTopMenu>
      <Layout class="fullHeight">
        <!--<left-Sider></left-Sider>-->
        <Sider class="leftBackgroundColor fullHeight" hide-trigger :style="{background: '#fff'}" >
          <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                设备信息
              </template>
              <router-link to="/meter">
                  <MenuItem name="1-1">表具型号维护</MenuItem>
              </router-link>
              <router-link to="/parameter">
                    <MenuItem name="1-3">报警参数维护</MenuItem>
              </router-link>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                采集监控
              </template>
              <router-link to="/iview/table">
                <MenuItem name="2-1">
                  表具监控
                </MenuItem>
              </router-link>
              <router-link to="/iview/card">
              <MenuItem name="2-2">
               报警监控
              </MenuItem>
              </router-link>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
              网络管理
              </template>
              <MenuItem name="3-1">前置机服务配置</MenuItem>
            </Submenu>
            <Submenu name="4">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                采集监控报表
              </template>
              <MenuItem name="4-1">日用量报表（工业）</MenuItem>
              <MenuItem name="4-2">日用量报表（民用）</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
         <wrapper></wrapper>

      </Layout>
    </Layout>
  </div>
</template>
<script>
  import wrapperTopMenu from './publicComponents/wrapperTopMenu'
  import wrapperSidebar from './publicComponents/wrapperSidebar'
  import wrapper from './publicComponents/wrapper'

  export default {
    data () {
      return {
        isCollapsed: false
      };
    },
    components:{
      wrapperTopMenu,
      wrapperSidebar,
      wrapper
    }
  }
</script>
