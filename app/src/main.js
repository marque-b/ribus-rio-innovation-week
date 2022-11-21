import Vue from "vue";
import App from "./App.vue";
import vuetify from "@/plugins/vuetify";
import Embed from "v-video-embed";

Vue.use(Embed);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
