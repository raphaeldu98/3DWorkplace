import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "./assets/main.css";
//引入矢量图标库
import "./assets/icons/iconfont.css";
import "./assets/icons/iconfont.js";

//引入在线iconfont
import IconFontOnline from "vue-iconfont-online";
const app = createApp(App);
app.use(Antd);
app.mount("#app");
