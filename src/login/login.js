// /**
//  * Created by Administrator on 2017/5/22.
//  */
// /**
//  * Created by Administrator on 2017/5/22.
//  */
// import md5 from 'md5'
// import { login, getReplaceCode } from '../../api/login'
// import {getDictfindByType} from '@/api/taxManager'
// import {getUser} from "~/api/redirectPage";
// import {mapActions, mapState} from 'vuex'
// import axios from "axios/index";
// export default {
//   data: function () {
//     var checkerificaCode = (rule, value, callback) => {
//       if (!value) {
//         return callback(new Error('请输入验证码'));
//       } else if (value !=this.initverificaCode) {
//         return callback(new Error('验证码不正确'));
//       } else {
//         callback();
//       }
//     };
//     return {
//       loading: false,
//       savePassword: false,
//       ruleForm: {
//         username: '',
//         password: '',
//         verificaCode: '',
//       },
//       rules: {
//         username: [
//           {required: true, message: '请输入用户名', trigger: 'blur'}
//         ],
//         password: [
//           {required: true, message: '请输入密码', trigger: 'blur'},
//         ],
//         verificaCode: [
//           {validator: checkerificaCode, trigger: 'blur'} //验证码验证
//         ],
//       },
//       initverificaCode: '',
//        verificaCodeSrc:'./static/img/logo-crm@2x.png'
//     }
//   },
//
//   mounted(){
//     var self = this;
//     self.ruleForm.username = localStorage.getItem('AccountNumber');  //读取用户账号
//     self.ruleForm.password = localStorage.getItem('AccountPassword');  //读取用户账号
//     self.savePassword = localStorage.getItem('savePassword') == 'true' ? true : false;  //用户密码是否保存
//       this.replaceCode()
//       this.getSelsectOp(this,'landbaseSelectedOp' );
//    /* if (!this.data.userInfo.id) {
//           this.getAdminData()
//         console.log(1)
//       }*/
//   },
//   /* computed: {
//         ...mapState(['adminInfo']),
//     },
//     watch: {
//         userInfo: function (newValue){
//             if (newValue.userId) {
//                 this.$message({
//                     type: 'success',
//                     message: '检测到您之前登录过，将自动登录'
//                 });
//                 this.$router.push('/home')
//             }else{
//                 this.$router.push('/login')
//             }
//         }
//     },*/
//   methods: {
//       getSelsectOp( refthis,typeString ) {
//           //获取组织服务源数据
//
//           getDictfindByType( {type:typeString}).then(response => {
//
//               if (response.code == 'H0000' && response.data) {
//                   if(response.data.length >0)
//                   {
//                       var data = response.data[0];
//                       var dataArray =data.value.split(',');
//                       refthis.landSelectedOptioncheckList= dataArray;
//                       refthis. landSelectedOptionDict.dictId =data.dictId;
//                       localStorage.setItem('landSelectedOptioncheckList', data.value);  //储存查询配置
//                   }else
//                   {
//                       refthis.landSelectedOptioncheckList= [];
//                       localStorage.setItem('landSelectedOptioncheckList', '');  //储存查询配置
//                   }
//
//               } else {
//                   refthis.$message.error(response.data.msg);
//               }
//           }).catch(error => {
//               console.log(error.data);
//           });
//       },
//
//
//         submitForm(formName) { //用户登陆
//       let self = this;
//
//       self.$refs[formName].validate((valid) => {
//         if (valid) {
//           // 一次加密
//           var password = self.ruleForm.password;
//           password = md5(password);
//           //  二次加密
//           password = self.ruleForm.username + password + self.ruleForm.verificaCode + '';
//           password = md5(password);
//           self.loading = true;
//
//             this.loading = true
//              login({
//                 account: this.ruleForm.username,
//                 password,
//                 checkCode: this.ruleForm.verificaCode
//             }).then(function (response) {
//              console.log(response.data.userInfo)
//             self.loading = false;
//             if (response.code == '200') {
//                 sessionStorage.setItem('Authorization', response.data.session_key)
//                 sessionStorage.setItem('sessionid', response.data.sessionid)
//                 sessionStorage.setItem('user_msg', JSON.stringify(response.data));    // 用户信息到本地
//               sessionStorage.setItem('session_key', response.data.session_key);    //储存授权信息到本地
//             /*  sessionStorage.setItem('jobName', response.data.userInfo.jobinfoDTO.jobName); //储存职位名*/
//               sessionStorage.setItem('orgName', response.data.userInfo.orgInfoDTO.orgname); //储存部门名
//               sessionStorage.setItem('userName', response.data.userInfo.username); //储存用户名
//               localStorage.setItem('AccountNumber', self.ruleForm.username);  //储存用户账号
//               if (self.savePassword) {
//                 localStorage.setItem('AccountPassword', self.ruleForm.password);  //储存用户密码
//                 localStorage.setItem('savePassword', true);  //是否勾选储存用户密码
//               } else {
//                 localStorage.removeItem('AccountPassword');
//                 localStorage.removeItem('savePassword');
//               }
//               self.$message({
//                 message: '登录成功！',
//                 type: 'success'
//               });
//               self.$router.push('/home');
//
//             } else {
//               self.$message.error(response.data.msg);
//               self.replaceCode(); //重新获取验证码
//               sessionStorage.setItem('session_key', null); // 将token清空
//             }
//           }).catch(function (error) {
//             self.loading = false;
//             self.replaceCode(); //重新获取验证码
//             console.log(error);
//             self.$message.error('请求错误！');
//             sessionStorage.setItem('session_key', null);  // 将token清空
//           });
//         } else {
//           console.log('error submit!!');
//           return false;
//         }
//       });
//     },
//     replaceCode(){
//
//         getReplaceCode().then(res => {
//             if (res.code === 200) {
//                 this.initverificaCode = res.data
//             }
//         }).catch(error => {
//             console.log(error.data)
//         })
//     },
//   }
// }
