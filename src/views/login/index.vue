<template>
  <div class="login">
    <div class="login-title">
      欢迎登录
    </div>
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          placeholder="请输入手机号码"
          name="username"
          type="text"
          auto-complete="on"
        >
          <template slot="prepend">
            <img src="../../assets/username.png" class="login-img">
          </template>
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          placeholder="请输入验证码"
          name="password"
          type="text"
          auto-complete="on"
        >
          <template slot="prepend">
            <img src="../../assets/password.png" class="login-img">
          </template>

          <template slot="suffix">
            <el-button
              type="primary"
              :disabled="disabledCodeTextBtn"
              size="small"
              class="login-code-btn"
              @click="getCode"
            >
              {{ codeText }}
            </el-button>
            <!-- <div class="login-code">{{ codeText }}</div> -->
          </template>
        </el-input>
      </el-form-item>

      <ElButton
        :loading="loading"
        type="primary"
        style="width:100%"
        @click.native.prevent="handleLogin"
      >
        登录
      </ElButton>
    </el-form>
  </div>
</template>

<script src="./script.js"></script>

<style scoped lang="scss">
@import "./style.scss";
</style>
