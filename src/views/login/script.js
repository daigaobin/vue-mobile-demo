/**
 * Created by daigb on 2018/12/24.
 */
import { USER_LOGIN } from "@/store/mutationType";

export default {
  name: "Login",
  components: {},
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入手机号码"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("请输入验证码"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ]
      },
      timer: "",
      second: 6,
      codeText: "获取验证码",
      disabledCodeTextBtn: false,
      loading: false,
      showDialog: false,
      redirect: undefined
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('hashchange', this.afterQRScan)
  },
  destroyed() {
    // window.removeEventListener('hashchange', this.afterQRScan)
  },
  methods: {
    getCode() {
      this.disabledCodeTextBtn = true;
      this.timer = setInterval(() => {
        if (this.second === 1) {
          clearInterval(this.timer);
          this.timer = null;
          this.disabledCodeTextBtn = false;
          this.codeText = "获取验证码";
          return;
        }
        this.codeText = this.second-- + "秒后获取";
      }, 1000);
    },

    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch(USER_LOGIN, this.loginForm)
            .then(() => {
              this.loading = false;
              this.$router.push({ path: this.redirect || "/home" });
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          return false;
        }
      });
    }
  }
};
