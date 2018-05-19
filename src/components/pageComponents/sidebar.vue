<template>
    <Col span="4" class="height">
  <Menu :theme="theme3" active-name="1" width="auto" class="height" >
    <MenuItem  style="font-size: 16px;"  disabled="disabled">
      <Icon type="document-text"></Icon>
     目录
    </MenuItem>
    <MenuGroup title="第一卷">
      <router-link :to="{name:'pages'}">
      <MenuItem name="1" >
        <Tooltip content="第一章：天才的陨落" placement="right" delay="800">
          <p class="chapter">第一章：天才的陨落</p>
        </Tooltip>
      </MenuItem>
      </router-link>
      <router-link :to="{name:'pages2'}">
      <MenuItem name="2">
        <Tooltip content="第二章：斗气大陆" placement="right" delay="1000">
        <p class="chapter">第二章：斗气大陆</p>
        </Tooltip>
      </MenuItem>
      </router-link>
    </MenuGroup>
  </Menu>
    </Col>
</template>
<script>
  export default {
    data () {
      return {
        theme3: 'light',
        catalog:[{
          title:'第一章：天才的陨落',
          children1:'第一节'
        }

        ]
      }
    }
  }
</script>
<style>
a{
  color: black;
}
  .height{
    height:100%;
  }

  .chapter{
    padding-left: 10px;
    font-size: 13px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .ivu-tooltip{
    display: block;
  }
   .ivu-tooltip-rel {
     display: block;
  }

</style>
