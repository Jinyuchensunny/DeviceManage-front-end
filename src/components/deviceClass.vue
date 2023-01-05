<template>
    <div class="fillcontain">
          <div class="table_container">
            <el-table
                 :data="tableData"
                  border
                  stripe
                  align="center"
                 style="width:100%">
                <el-table-column
                   label="设备分类号"
                   align='center'
                property="id">
                </el-table-column>
                 <el-table-column
                   property="name"
                   label="设备分类名称"
                   align='center'>
                </el-table-column>
              <el-table-column
                prop="operation"
                align='center'
                label="操作">
                <template slot-scope='scope'>
                  <el-button
                    type="primary"
                    size="mini"
                    icon="el-icon-view"
                    @click='oppenModel(scope.row.id)'>详情</el-button>
                  <dialog-custom :DeviceClassId="deviceClassId" :ModelState="showModel" @closeModal="closeModal" ref="child"/>
                </template>
              </el-table-column>
            </el-table>
          </div>
    </div>
</template>

<script>
    import { getDeviceClassList } from "@/api/deviceClass";
    import DeviceDetailDialog from "./deviceDetailDialog"
    export default {
        data(){
            return {
                tableData: [],
                showModel: false ,
                deviceClassId: 0
            }
        },
        components:{
          'dialog-custom': DeviceDetailDialog
        },
        created(){
        },
        mounted(){
            this.getData();
        },
        methods: {
          getData(){
            getDeviceClassList().then(res=>{
              this.tableData = res.data.deviceClass;
              console.log(res.data.deviceClass);
            })
            },
          oppenModel(id){
            this.showModel = true;
            this.deviceClassId = id;
            this.$refs.child.showDevice(id);
          },
          closeModal(){
            this.showModel = false;
          }

        },
    }
</script>

<style lang="less" scoped>
    .fillcontain{
        padding-bottom: 0;
    }
    .contain{
        background: #fff;
        padding: 10px;
        margin-bottom: 20px;
    }
   .pagination{
       padding: 10px 20px;
       text-align: right;
   }
</style>



