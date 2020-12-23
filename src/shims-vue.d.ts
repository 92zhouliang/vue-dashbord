declare module '*.vue' {
  // ts 不能识别以.vue为后缀的文件，需通过定义vue模块生命vue构造函数
  import Vue from 'vue'
  export default Vue
}
