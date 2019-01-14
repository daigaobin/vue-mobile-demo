import { MessageBox } from 'mint-ui'
import expandSrcUrl from '@/assets/down.png'
import shrinkSrcUrl from '@/assets/up.png'
import { getPrescriptionDetailByID } from '@/api/prescription'

export default {
  name: 'PrescriptionDetails',

  data() {
    return {
      id: this.$route.params.id,
      prescriptionDetails: {}
    }
  },

  computed: {},

  created() {
    this.getPrescriptionDetailByID()
  },

  methods: {
    getPrescriptionDetailByID() {
      getPrescriptionDetailByID(this.id).then((resp) => {
        if (resp.data && resp.data.code === 200) {
          this.prescriptionDetails = resp.data.data
        }
      })
    }
  },
  components: {}
}
