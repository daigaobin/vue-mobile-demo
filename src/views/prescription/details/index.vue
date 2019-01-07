<template>
  <div class="prescription-details">
    <el-row class="prescription-details-list ">
      <el-col> 编号：6012311231321 </el-col>
    </el-row>

    <el-row class="prescription-details-list ">
      <el-col :span="12">
        <div><label>患者姓名：</label>张三</div>
        <div><label>患者姓名：</label>张三</div>
        <div><label>患者姓名：</label>张三</div>
      </el-col>
      <el-col :span="12">
        <div><label>年龄：</label>24</div>
      </el-col>
    </el-row>

    <el-row class="prescription-details-list ">
      <el-col> <label>主诉：</label>6012311231321 </el-col>
    </el-row>
  </div>
</template>

<script src="./script.js"></script>

<style scoped lang="scss">
@import "./style.scss";
</style>
