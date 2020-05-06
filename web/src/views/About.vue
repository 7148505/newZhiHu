<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="header">Login</div>
      <div class="form-wrapper">
        <input
          type="text"
          name="username"
          placeholder="username"
          class="input-item"
          v-model="loginForm.username"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          class="input-item"
          v-model="loginForm.password"
          @keyup="checkCapslock"
          @blur="capsTooltip = false"
          @keyup.enter="handleLogin"
        />
        <div class="btn" @click="handleLogin">
          <a href="#">Login</a>
        </div>
      </div>
      <div class="msg">
        Don`t have account?
        <a href="#">Sign up</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import Vue from "vue";
import { Vue, Component } from "vue-property-decorator";
// import { Route } from "vue-router";
import { saveErrorLogger, userRegistration } from "../api/data";

@Component({
  name: "Login",
  components: {}
})
export default class Login extends Vue {
  private capsTooltip = false;

  private loginForm = {
    username: "admin",
    password: "1111111"
  };
  // created() {
  // console.log("1");
  // }

  // private passwordType: string = "password";
  // private loading: boolean = false;
  // private showDialog: boolean = false;
  // private redirect: string | undefined = undefined;
  //
  private checkCapslock({ shiftKey = "", key = "" } = {}) {
    if (key && key.length === 1) {
      if (
        (shiftKey && key >= "a" && key <= "z") ||
        (!shiftKey && key >= "A" && key <= "Z")
      ) {
        this.capsTooltip = true;
      } else {
        this.capsTooltip = false;
      }
    }
    if (key === "CapsLock" && this.capsTooltip === true) {
      this.capsTooltip = false;
    }
  }
  // watch
  // @Watch("$route", { immediate: true })
  private handleLogin(): void {
    // let data = {};
    userRegistration(this.loginForm).then((res: object) => {
      // this.tableData = res.data;
      console.log("登录" + res);
    });
  }
}
</script>

<style scoped lang="less">
* {
  padding: 0;
  margin: 0;
  font-family: "Open Sans Light";
  letter-spacing: 0.05em;
}

.container {
  height: 100%;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
}

.login-wrapper {
  background-color: #fff;
  width: 250px;
  height: 500px;
  border-radius: 15px;
  padding: 0 50px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.login-wrapper .header {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
}

.login-wrapper .form-wrapper .input-item {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 0;
  padding: 10px;
  border-bottom: 1px solid rgb(128, 125, 125);
  font-size: 15px;
  outline: none;
}

.login-wrapper .form-wrapper .input-item::placeholder {
  text-transform: uppercase;
}

.login-wrapper .form-wrapper .btn {
  text-align: center;
  padding: 10px;
  width: 100%;
  margin-top: 40px;
  background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
  color: #fff;
  a {
    text-decoration-line: none;
    color: #1b2343;
  }
}

.login-wrapper .msg {
  text-align: center;
  line-height: 80px;
}

.login-wrapper .msg a {
  text-decoration-line: none;
  color: #a6c1ee;
}
</style>
