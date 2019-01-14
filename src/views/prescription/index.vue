<!-- 我的处方 -->
<template>
  <div class="prescription">
    <mt-loadmore :bottom-method="getProductList" :bottom-all-loaded="allLoaded">
      <ul>
        <li
          v-for="pr in prescriptionList"
          :key="pr.date"
          class="prescription-list"
        >
          <div
            class="clearfix prescription-item"
            :class="{ border: pr.expand }"
          >
            <span class="left ">
              <i class="prescription-block" />
              <span class="prescription-date">
                {{ pr.date }}
              </span>
            </span>
            <span class="right">
              <img
                :src="getImgUrl(pr)"
                class="prescription-down"
                @click="toggle(pr)"
              >
            </span>
          </div>
          <ul v-if="pr.expand">
            <li
              v-for="c in pr.list"
              :key="c.id"
              class="prescription-list-item"
            >
              <div class="clearfix">
                <div class="left">
                  <img src="123" class="prescription-list-item-avatar">
                </div>
                <div class="left">
                  <span>{{ c.patientName }}</span>
                  <span class="prescription-list-item-date">
                    {{ c.seedate }}
                  </span>
                  <span class="prescription-list-item-desc">
                    {{ c.diagnosis }}
                  </span>
                </div>
                <div class="right">
                  <mt-button
                    size="small"
                    type="primary"
                    class="prescription-list-item-details-btn"
                    @click.native="getPrescriptionDetailByID(c.id)"
                  >
                    详情
                  </mt-button>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </mt-loadmore>
    <SlidingChild :len="3" :title="title" />
  </div>
</template>
<script src="./script.js"></script>

<style scoped lang="scss">
@import "./style.scss";
</style>
