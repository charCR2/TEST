<template>
  <Row>
    <Menu mode="horizontal" :theme="theme1" active-name="1" >
      <div class="wrapper-header-nav-row">
      <span>阅即</span>
    <div class="wrapper-header-nav-list">
    <MenuItem name="1">
      <Icon type="ios-paper"></Icon>
      内容 &nbsp
    </MenuItem>
    <Submenu name="2">
      <template slot="title">
        <Icon type="stats-bars"></Icon>
        用户
      </template>
      <MenuGroup title="使用">
        <MenuItem name="3-1">新增和启动</MenuItem>
        <MenuItem name="3-2">活跃分析</MenuItem>
        <MenuItem name="3-3">时段分析</MenuItem>
      </MenuGroup>
      <MenuGroup title="留存">
        <MenuItem name="3-4">用户留存</MenuItem>
        <MenuItem name="3-5">流失用户</MenuItem>
      </MenuGroup>
    </Submenu>
    <MenuItem name="3">
      <Icon type="settings"></Icon>
     设置 &nbsp
    </MenuItem>
</div>
      </div>
  </Menu>

  <!--<p>Change theme</p>-->
  <!--<RadioGroup v-model="theme1">-->
    <!--<Radio label="light"></Radio>-->
    <!--<Radio label="dark"></Radio>-->
    <!--<Radio label="primary"></Radio>-->
  <!--</RadioGroup>-->
  </Row>
</template>
<script>
export default {
  data () {
    return {
      theme1: 'light'
    }
  }
}
</script>
<style>
  ul span{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-size:26px ;
  }
  .wrapper-header-nav-list {
    height: inherit;
    float: right;
  }
  .wrapper-header-nav-row{
    height: inherit;
    margin:0 15px 0 50px
  }
</style>
