<template>
  <v-container fluid>
    <v-row class="videoSection">
      <v-col cols="10" md="5" offset="1">
        <h1>CONHEÇA A RIBUS,</h1>
        <h1>DO DIGITAL AO CONCRETO!</h1>
        <p>Dê o Play no Vídeo!</p>
        <img
          class="ribTokenImg"
          src="../assets/token-ribus.webp"
          alt="Rib Token"
        />
      </v-col>
      <v-col cols="10" md="5">
        <video-embed
          class="media"
          src="https://www.youtube.com/watch?v=9vt1mEW7Csw"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.videoSection H1 {
  font-family: "Roboto Condensed", sans-serif;
  color: white;
  font-size: 3.5vw;
}
.videoSection p {
  font-family: "PT Sans", sans-serif;
  color: white;
  font-size: 3.1vw;
}

.ribTokenImg {
  padding-top: 1em;
  width: 23vw;
}

@media (max-device-width: 960px) {
  .videoSection H1 {
    font-size: 10vw;
  }

  .videoSection p {
    font-size: 7vw;
  }

  .ribTokenImg {
    padding-top: 1em;
    width: 80%;
  }
}
</style>
