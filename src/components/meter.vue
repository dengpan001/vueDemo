<template>
    <Row class="fullHeight">

      <Col span="12" :style="{padding:'0 5px',height: '100% '}">
         <panelHeader></panelHeader>
         <panelBody>
            <Table stripe :columns="columns1" :data="data1"></Table>
            <Page :total="100" show-elevator></Page>
        </panelBody>
      </Col>

      <Col class="" span="12" :style="{padding:'0 5px',height: '100% '}">
        <panelHeader></panelHeader>
        <panelBody>
          <Form :model="formItem" :label-width="80">
            <FormItem label="Input">
              <Input v-model="formItem.input" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="Select">
              <Select v-model="formItem.select">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
              </Select>
            </FormItem>
            <FormItem label="DatePicker">
              <Row>
                <Col span="11">
                <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
                </Col>
              </Row>
            </FormItem>
            <FormItem label="Radio">
              <RadioGroup v-model="formItem.radio">
                <Radio label="male">Male</Radio>
                <Radio label="female">Female</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="Checkbox">
              <CheckboxGroup v-model="formItem.checkbox">
                <Checkbox label="Eat"></Checkbox>
                <Checkbox label="Sleep"></Checkbox>
                <Checkbox label="Run"></Checkbox>
                <Checkbox label="Movie"></Checkbox>
              </CheckboxGroup>
            </FormItem>
            <FormItem label="Switch">
              <i-switch v-model="formItem.switch" size="large">
                <span slot="open">On</span>
                <span slot="close">Off</span>
              </i-switch>
            </FormItem>
            <FormItem label="Slider">
              <Slider v-model="formItem.slider" range></Slider>
            </FormItem>
            <FormItem label="Text">
              <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem>
              <Button type="primary">Submit</Button>
              <Button type="ghost" style="margin-left: 8px">Cancel</Button>
            </FormItem>
          </Form>
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
          columns1: [
            {
              title: '表具编号',
              key: 'meterNo'
            },
            {
              title: '表具型号',
              key: 'mtDes'
            },
            {
              title: '通讯时间',
              key: 'setUpTime'
            },

            {
              title: '阀门',
              key: 'valveStateDes'
            }

          ],
          data1:[
              {"meterNo":"171221000001","mtDes":"金卡1.0中心计费金额表","setUpTime":1513838584000,"valveStateDes":"关"},
              {"meterNo":"201712181812","mtDes":"金卡1.0中心计费金额表","setUpTime":1513592018000,"valveStateDes":"关"},
              {"meterNo":"201712182006","mtDes":"金卡1.0中心计费金额表","setUpTime":1513598971000,"valveStateDes":"关"},
              {"meterNo":"201712191153","mtDes":"金卡1.0中心计费金额表","setUpTime":1513655736000,"valveStateDes":"关"},
              {"meterNo":"201712191158","mtDes":"金卡1.0中心计费金额表","setUpTime":1513655934000,"valveStateDes":"关"},
              {"meterNo":"201712191839","mtDes":"金卡1.0中心计费金额表","setUpTime":1513680043000,"valveStateDes":"关"},
              {"meterNo":"201712191857","mtDes":"金卡1.0中心计费金额表","setUpTime":1513681088000,"valveStateDes":"关"},
              {"meterNo":"201712191921","mtDes":"金卡1.0中心计费金额表","setUpTime":1513682533000,"valveStateDes":"关"},
              {"meterNo":"201712191928","mtDes":"金卡1.0中心计费金额表","setUpTime":1514004857000,"valveStateDes":"关"},
              {"meterNo":"201712191930","mtDes":"金卡1.0中心计费金额表","setUpTime":1513683064000,"valveStateDes":"关"}
           ],
          formItem: {
            input: '',
            select: '',
            radio: 'male',
            checkbox: [],
            switch: true,
            date: '',
            time: '',
            slider: [20, 50],
            textarea: ''
          }
        }
      },
      components: {
        panelBody,
        Layout,
        panelHeader
      },

      name: "meter"
    }
</script>

<style scoped>
.border{border:1px solid blue;}
</style>
