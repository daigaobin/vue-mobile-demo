/**
 * Created by daigb on 2018/12/24.
 */
import { USER_LOGIN } from '@/store/modules/mutationType'
import { Toast } from 'mint-ui'

export default {
  name: 'Login',

  components: {},

  data() {
    const validatePhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入手机号码'))
      } else {
        callback()
      }
    }

    const validateVcode = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入验证码'))
      } else {
        callback()
      }
    }

    return {
      loginForm: {
        phone: '',
        vcode: ''
      },
      loginRules: {
        phone: [
          { required: true, trigger: 'blur', validator: validatePhone }
        ],
        vcode: [
          { required: true, trigger: 'blur', validator: validateVcode }
        ]
      },
      timer: '',
      second: 60,
      codeText: '获取验证码',
      disabledCodeTextBtn: false,
      loading: false,
      showDialog: false,
      redirect: undefined
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
      this.disabledCodeTextBtn = true
      this.timer = setInterval(() => {
        if (this.second === 1) {
          clearInterval(this.timer)
          this.timer = null
          this.disabledCodeTextBtn = false
          this.codeText = '获取验证码'
          this.second = 60
          return
        }
        this.codeText = this.second-- + '秒后获取'
      }, 1000)
    },

    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch(USER_LOGIN, this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/product' })
          }).catch((resp) => {
            Toast({
              message: resp.data.msg,
              position: 'bottom',
              duration: 2000
            })
            this.loading = false
          })
        } else {
          return false
        }
      })
    }
  }
}
