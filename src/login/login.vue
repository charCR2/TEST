<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
  .right-login{
    float: left;
    width:100%;
    padding: 20px 10% 27px 10%;
    max-width: 350px;
    background-color:#fff;
    height:400px;

  }
  .right-login input{
    -webkit-appearance: none;
    background-color: #fff;
    border: 1px solid #fff;
    border-bottom :1px solid #ccc;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 30px;
    line-height: 1;
    outline: 0;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
  }
  .verifica-code-img{
    position: absolute;
    width: 55px;
    height: 28px;
    margin-right: 4px;
    right:2px;
    top:2px;
    line-height: 28px;
    text-align :center;
    background-color: #eee
  }
  .forgot-password{
    color: #8a8a8a;
    font-size: 13px;
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer
  }


  .ms-title{
    font-size: 16px;
    margin-bottom: 45px;

  }

</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
        </Menu>
      </Header>
      <Content :style="{ background: '#ccc', height: '594px'}">

        <row style="height: 100%">
          <Col span="6" style="height: 100%" >

          </Col>
          <Col span="12"style="height: 100%">

          </Col>
          <Col span="6" style="background: #fff;height: 100%">
          <div class="right-login">
            <h1 class="ms-title">
              <span style="padding-left:5px ">登录</span>
            </h1>
            <Form :model="ruleForm" :rules="rules" ref="ruleForm"  class="login-form">
              <FormItem prop="username">
                <input class="input-size" v-model="ruleForm.username" placeholder="用户名" autocomplete="false">
              </FormItem>
              <FormItem prop="password">
                <input type="password" placeholder="密码" v-model="ruleForm.password" autocomplete="false">
              </FormItem>
              <FormItem prop="verificaCode" >
                <input @keyup.enter.native="submitForm('ruleForm')" v-model="ruleForm.verificaCode" placeholder="验证码" autocomplete="false">
                <p class="verifica-code-img" @click="replaceCode()">{{initverificaCode}}</p>
              </FormItem>
              <div class="save-password">
                <Checkbox class="check-box" v-model="savePassword">记住密码</Checkbox>
              </div>
              <div style="margin: 30px auto;text-align: center">
                <Button type="ghost" @click="handleSubmit('ruleForm')">登录</Button>
                <Button type="ghost" @click="handleSubmit('ruleForm')">注册</Button>
              </div>
              账号密码随便输入；验证码为1234
              <a class="forgot-password">忘记密码？</a>
            </Form>
          </div>
          </Col>
        </row>
      </Content>
      <Footer class="layout-footer-center">footer</Footer>
    </Layout>
  </div>
</template>
<script>
  export default {
    data: function () {
      var checkerificaCode = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入验证码'));
        }
        // else if (value != this.initverificaCode) {
        else if (value !== '1234') {
          return callback(new Error('验证码不正确'));
        } else {
          callback();
        }
      };
      return {
        loading: false,
        savePassword: false,
        ruleForm: {
          username: '',
          password: '',
          verificaCode: '',
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
          ],
          verificaCode: [
            {validator: checkerificaCode, trigger: 'blur'} //验证码验证
          ],
        },
        initverificaCode: '',
        verificaCodeSrc: './static/img/logo-crm@2x.png'
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('登陆成功！');
            this.$router.push('home')
          } else {
            this.$Message.error('登陆失败！');
          }
        })
      }
    }
  }
</script>
