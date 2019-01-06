<template>
  <div class="prescription-details">
    <!-- <div data-v-4a47f32a="" class="mint-search">
      <div class="mint-searchbar">
        <div class="mint-searchbar-inner">
          <i class="mintui mintui-search"></i>
          <input type="search" placeholder="搜索" class="mint-searchbar-core" />
        </div>
        <a class="mint-searchbar-cancel" style="">取消</a>
      </div>
      <div class="mint-search-list">
        <div class="mint-search-list-warp">
          <a class="mint-cell" v-for="r in result" :key="r.value">
            <div class="mint-cell-left"></div>
            <div class="mint-cell-wrapper">
              <div class="mint-cell-title">
                <span class="mint-cell-text">{{ r.title }} </span>
              </div>
              <div class="mint-cell-value"><span></span></div>
            </div>
            <div class="mint-cell-right"></div
          ></a>
        </div>
      </div>
    </div> -->
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
