<template>
  <div>
    <this-dialog :is-show="isShowCheckDialog" @on-close="checkStatus">
      请检查你的支付状态
      <div class="button" @click="checkStatus">
        支付成功
      </div>
      <div class="button" @click="checkStatus">
        支付失败
      </div>
    </this-dialog>
    <this-dialog :is-show="isShowSuccessDialog" @on-close="hideSuccessDialog">
      购买成功！
    </this-dialog>
    <this-dialog :is-show="isShowFailDialog" @on-close="hideFailDialog">
      购买失败！
    </this-dialog>
  </div>
</template>

<script>
import Dialog from './../components/base/dialog'
export default{
  components: {
    thisDialog:Dialog
  },
  props:{
    isShowCheckDialog:{
      type: Boolean,
    },
    orderId:{
      type:[String,Number]
    }
  },
  data(){
    return{
      isShowSuccessDialog: false,
      isShowFailDialog: false
    }
  },
  methods:{
    chooseSelection(index){
      this.nowIndex = index
      this.$emit('on-change',this.banks[index])
    },
    checkStatus(){
      this.$http.get('/api/checkOrder',{orderId: this.orderId})
      .then((res)=>{
        this.isShowSuccessDialog = true
        this.$emit('on-close-check-dialog')
      },(err)=>{
        this.isShowFailDialog = true
        this.$emit('on-close-check-dialog')
      })
    },
    hideSuccessDialog(){
      this.isShowSuccessDialog = false
    },
    hideFailDialog(){
      this.isShowFailDialog = false
    }
  }
}
</script>
<style scoped>

</style>

