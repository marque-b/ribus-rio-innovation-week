<template>
  <v-container fluid class="formContainer">
    <v-row class="iconsRow">
      <v-col class="icon" cols="10" md="1" offset="1">
        <img src="../assets/icon4Riw.png" alt="3 mil tokenistas" />
        <h3>+ 3.000</h3>
        <p>Tokenistas</p>
      </v-col>
      <v-col class="icon" cols="10" md="1" offset-md="2">
        <img src="../assets/icon3Riw.png" alt="3 mil tokenistas" />
        <h3>+ 6.000</h3>
        <p>Cadastros</p>
      </v-col>
      <v-col class="icon" cols="10" md="1" offset-md="2">
        <img src="../assets/icon2Riw.png" alt="3 mil tokenistas" />
        <h3>+ 120</h3>
        <p>Empresas cadastradas</p>
      </v-col>
      <v-col class="icon" cols="10" md="1" offset-md="2">
        <img src="../assets/icon1Riw.png" alt="3 mil tokenistas" />
        <h3>+ 50 milhões</h3>
        <p>Tokens vendidos</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="ctaCol" cols="10" md="6" offset="3">
        <h3>
          Entre agora para a Revolução do Mercado Imobiliário, cadastre-se e
          ganhe 10 tokens!
        </h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="formCol" cols="10" md="4" offset="4">
        <form class="leadForm">
          <label for="nameInput"
            >Nome
            <br />
            <input id="nameInput" type="text" v-model="nome" />
          </label>
          <label for="telInput"
            >Telefone
            <br />
            <input id="telInput" type="text" v-model="tel" />
          </label>
          <label for="emailInput"
            >Email
            <br />
            <input id="emailInput" type="text" v-model="email" />
          </label>
          <button class="sendFormBtn" type="button">Continuar</button>
        </form>
      </v-col>
    </v-row>
    <footer>
      <div class="bottomBar" />
    </footer>
  </v-container>
</template>

<script>
export default {
  name: "RiwLeeds",
  data: () => ({
    nome: "",
    tel: "",
    email: "",
  }),
};
</script>

<style scoped>
.icon {
  padding-top: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.icon img {
  width: 120%;
  padding-bottom: 1em;
}

.icon h3 {
  font-family: "PT Sans", sans-serif;
  color: white;
  font-size: 1.9vw;
  white-space: nowrap;
}

.icon p {
  font-family: "PT Sans", sans-serif;
  color: white;
  font-size: 1.7vw;
  white-space: nowrap;
}

.ctaCol h3 {
  color: white;
  font-size: 2.5vw;
  margin-top: 1.5em;
  margin-bottom: 2em;
}

.leadForm {
  color: white;
  display: flex;
  flex-direction: column;
}

.leadForm label {
  font-size: 1em;
  line-height: 2em;
}

.leadForm input {
  background-color: white;
  width: 100%;
  height: 1.8em;
  margin-bottom: 0.5em;
  border-radius: 1em;
}

.sendFormBtn {
  font-size: 1em;
  border: #706f6e 1px solid;
  background-color: #333333;
  height: 2em;
  border-radius: 1em;
  margin: 1em 20% 4em 20%;
}

.bottomBar {
  background-color: #333333;
  height: 1em;
}
</style>
