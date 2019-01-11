import { MessageBox } from 'mint-ui'
import expandSrcUrl from '@/assets/down.png'
import shrinkSrcUrl from '@/assets/up.png'
import SlidingChild from '@/components/slide/SlidingChild'
import { getReciptList } from '@/api/prescription'

export default {
  name: 'Prescription',

  data() {
    return {
      allLoaded: false,
      title: '处方详情',
      prescriptionList: []
    }
  },
  computed: {},

  created() {
    this.getReciptList()
  },

  methods: {
    getReciptList() {
      getReciptList(18888888888, 10).then((resp) => {
        if (resp.data && resp.data.code === 200) {
          this.prescriptionList = resp.data.data
        }
      })
    },

    getPrescriptionDetailByID(id) {
      this.$router.push({ name: 'PrescriptionDetails', params: { id }})
    },

    getImgUrl(pr) {
      return pr.expand ? shrinkSrcUrl : expandSrcUrl
    },
    toggle(pr) {
      this.$set(pr, 'expand', !pr.expand)
    },
    deleteProduct() {
      MessageBox.confirm('确定要删除此产品?').then(action => {
        debugger
      })
    }

  },
  components: { SlidingChild }
}
