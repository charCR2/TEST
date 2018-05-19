<template>
  <Row>
    <Menu mode="horizontal" :theme="theme1" active-name="1" >
      <div class="wrapper-header-nav-row">
      <span>阅即</span>
    <div class="wrapper-header-nav-list">
    <MenuItem name="1">
      <Icon type="ios-paper"></Icon>
      主题 &nbsp
    </MenuItem>
    <Submenu name="2">
      <template slot="title">
        <Icon type="stats-bars"></Icon>
        用户
      </template>
      <MenuGroup title="使用">
        <MenuItem name="3-1">我的书屋</MenuItem>
        <MenuItem name="3-2">搜索书籍</MenuItem>
        <MenuItem name="3-3">个人信息</MenuItem>
        <MenuItem name="3-4">添加书签</MenuItem>
      </MenuGroup>
      <MenuGroup title="系统">
        <MenuItem name="3-5">设置</MenuItem>
        <MenuItem name="3-6">退出</MenuItem>
      </MenuGroup>
    </Submenu>
    <MenuItem name="3">
      <Icon type="settings"></Icon>
     关于 &nbsp
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
