<template>
  <el-dialog
    :visible="ModelState"
    :title="title"
    :close-on-click-modal='false'
    :close-on-press-escape='false'
    :modal-append-to-body="false"
    @close="closeDialog">
    <div class="form">
      <el-table
        :data="areaData"
        border
        stripe
        align="center"
        style="width:100%">
        <el-table-column
          label="设备号"
          align='center'
          property="id">
        </el-table-column>
        <el-table-column
          property="name"
          label="设备名称"
          align='center'>
        </el-table-column>

      </el-table>
    </div>
  </el-dialog>
</template>

<script>
  import { getDeviceList } from "@/api/device";

  export default {
    name:'deviceDetail',
    data(){
      return {
        areaData:[],
        title :"设备详情",
        //详情弹框信息
        dialog: {
          width:'400px',
          formLabelWidth:'120px'
        }
      }
    },
    props:{
      ModelState: {
        type: Boolean,
        default: false
      },
      DeviceClassId:{
        type: Number,
        default: 0
      }
    },
    mounted(){
    },
    methods:{
      showDevice(val){
          getDeviceList(val).then(res=>{
            this.areaData = res.data.devices;
            console.log(res.data.devices);
          })

      },
      closeDialog(){
        this.$emit('closeModal','false')
      },

    }
  }
</script>

<style lang="less" scoped>
  .search_container{
    margin-bottom: 20px;
  }
  .btnRight{
    float: right;
    margin-right: 0px !important;
  }
  .searchArea{
    background:rgba(255,255,255,1);
    border-radius:2px;
    padding: 18px 18px 0;
  }
</style>
