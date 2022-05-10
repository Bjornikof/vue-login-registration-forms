<template>
  <v-app :style="{background: $vuetify.theme.themes.light.background}">
    <div class="content">
      <v-card class="card">
        <v-tabs fixed-tabs>
          <v-tab href="#login">Login</v-tab>
          <v-tab-item value="login">
            <LoginForm/>
          </v-tab-item>
          <v-tab href="#signUp">Sign Up</v-tab>
          <v-tab-item value="signUp">
            <SignUpForm/>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </div>
  </v-app>
</template>
<script>
import LoginForm from "@/components/Login";
import SignUpForm from "@/components/SignUp";
export default {
  name: 'App',
  components: {SignUpForm, LoginForm},
  data() {
    return {
      //
    }
  }
}
</script>
<style>
.content {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 550px;
  height: 650px;
  min-width: 275px;
  overflow: hidden;
}
</style>