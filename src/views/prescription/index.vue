<template>
  <div class="prescription">
    <mt-loadmore :bottom-method="getProductList" :bottom-all-loaded="allLoaded">
      <ul>
        <li
          v-for="pr in prescriptionList"
          :key="pr.id"
          class="prescription-list"
        >
          <div
            class="clearfix prescription-item"
            :class="{ border: pr.expand }"
          >
            <span class="left ">
              <i class="prescription-block" /><span class="prescription-date">
                {{ pr.date }}
              </span>
            </span>
            <span class="right">
              <img
                :src="getImgUrl(pr)"
                class="prescription-img"
                @click="toggle(pr)"
              >
            </span>
          </div>
          <ul v-if="pr.expand">
            <li
              v-for="(c, $index) in pr.children"
              :key="$index"
              class="prescription-list-item"
            >
              <div class="clearfix">
                <div class="left">
                  <img src="123">
                </div>
                <div class="left">
                  <span>{{ c.name }}</span>
                  <span class="prescription-list-item-date">
                    {{ c.date }}
                  </span>
                  <span class="prescription-list-item-desc">
                    {{ c.desc }}
                  </span>
                </div>
                <div class="right">
                  <mt-button
                    size="small"
                    type="primary"
                    @click.native="goDetails(c)"
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
