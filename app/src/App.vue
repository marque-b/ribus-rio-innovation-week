<script setup>
import HeaderLogo from "./components/HeaderLogo.vue";
import VideoSection from "./components/VideoSection.vue";
import FormSection from "./components/FormSection.vue";
</script>

<template>
  <v-app>
    <v-container fluid class="appContainer">
      <v-container fluid class="topSection">
        <img
          id="backgroundImg"
          src="./assets/background-top.png"
          alt="Imagem de fundo"
        />
        <HeaderLogo />
        <VideoSection />
      </v-container>
      <FormSection />
    </v-container>
  </v-app>
</template>

<style scoped>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
/* End of CSS reset */

.appContainer {
  background: radial-gradient(ellipse at top, #e66465, transparent),
    radial-gradient(ellipse at bottom, #4d9f0c, transparent);
}

#backgroundImg {
}
/* .topSection {
  background-image: url("./assets/background-top.png");
  background-repeat: no-repeat !important;
  background-position: center -1px !important;
  background-size: cover !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
} */

/* .appContainer img {
  position: absolute;
  top: 0;
  z-index: 0;
} */
</style>
