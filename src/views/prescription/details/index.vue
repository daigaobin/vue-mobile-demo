<template>
  <div class="prescription-details">
    <div class="prescription-details-list ">
      <div class="prescription-details-list-item">
        <label>编号：</label>{{ prescriptionDetails.proCode }}
      </div>
    </div>

    <div class="prescription-details-list">
      <div style="width:50%;display:inline-block">
        <div class="prescription-details-list-item">
          <label>患者姓名：</label>{{ prescriptionDetails.name }}
        </div>
        <div class="prescription-details-list-item">
          <label>性别：</label>{{ prescriptionDetails.sex }}
        </div>
        <div class="prescription-details-list-item">
          <label>过敏史：</label>{{ prescriptionDetails.allergichistory }}
        </div>
      </div>

      <div style="width:50%;display:inline-block">
        <div class="prescription-details-list-item">
          <label>年龄：</label>{{ prescriptionDetails.age }}
        </div>
        <div class="prescription-details-list-item">
          <label>科室：</label>{{ prescriptionDetails.department }}
        </div>
        <div class="prescription-details-list-item">
          <label>日期：</label>{{ prescriptionDetails.seedate }}
        </div>
      </div>
    </div>

    <div class="prescription-details-list ">
      <div class="prescription-details-list-item">
        <label>主诉：</label>{{ prescriptionDetails.chiefcomplaint }}
      </div>
    </div>

    <div class="prescription-details-list ">
      <div class="left-label">
        <div class="prescription-details-list-item">
          <label>诊断：</label>
        </div>
      </div>

      <div class="right-text">
        <div class="prescription-details-list-item">
          <label>{{ prescriptionDetails.diagnosis }}</label>
        </div>
      </div>
    </div>

    <div class="prescription-details-list ">
      <div class="left-label">
        <div class="prescription-details-list-item">
          <label>R</label>
        </div>
      </div>

      <div class="right-text">
        <div v-for="(l,$index) in prescriptionDetails.list" :key="$index + productsName" class="prescription-details-list-item">
          <label>{{ l.productsName }}</label>
        </div>
      </div>
    </div>

    <div class="prescription-details-list ">
      <div class="prescription-details-list-item">
        <label>药房：</label>{{ prescriptionDetails.pharmacist }}
      </div>
      <div class="prescription-details-list-item">
        <label>药师：</label>{{ prescriptionDetails.pharmacy }}
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style scoped lang="scss">
@import "./style.scss";
</style>
