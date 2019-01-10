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
      <el-form-item prop="phone">
        <el-input
          v-model="loginForm.phone"
          placeholder="请输入手机号码"
          prefix-icon="fa fa-mobile fa-2x"
        />
      </el-form-item>

      <el-form-item prop="vcode">
        <el-input
          v-model="loginForm.vcode"
          placeholder="请输入验证码"
          prefix-icon="fa fa-lock fa-2x"
        >
          <el-button
            slot="suffix"
            type="primary"
            :disabled="disabledCodeTextBtn"
            size="mini"
            class="login-code-btn"
            @click="getCode"
          >
            {{ codeText }}
          </el-button>
          <!-- <div class="login-code">{{ codeText }}</div> -->
        </el-input>
      </el-form-item>

      <el-button
        :loading="loading"
        type="primary"
        style="width:100%"
        @click.native.prevent="handleLogin"
      >
        登 录
      </el-button>
    </el-form>
  </div>
</template>

<script src="./script.js"></script>

<style scoped lang="scss">
@import "./style.scss";
</style>
