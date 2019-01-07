<template>
  <div class="statistics">
    <mt-loadmore :bottom-method="getProductList" :bottom-all-loaded="allLoaded">
      <ul>
        <li v-for="s in statisticsList" :key="s.id" class="statistics-list">
          <div class="clearfix statistics-item" :class="{ border: s.expand }">
            <span class="left ">
              <i class="statistics-block" /><span class="statistics-date">
                {{ s.date }}
              </span>
            </span>
            <span class="right">
              <img
                :src="getImgUrl(s)"
                class="statistics-img"
                @click="toggle(s)"
              >
            </span>
          </div>
          <ul v-if="s.expand">
            <li
              v-for="(item, $index) in s.children"
              :key="$index"
              class="statistics-list-item"
            >
              <div class="clearfix">
                <div class="left">
                  <span>{{ item.name }}</span>
                  <span
                    class="statistics-list-item-text"
                  >
                    {{ item.number }} {{ item.company }}
                  </span>
                </div>
                <div class="right statistics-list-item-number">
                  <i class="f16 number">
                    20
                  </i><i class="f12">
                    件
                  </i>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </mt-loadmore>
    <SlidingChild :len="3" />
  </div>
</template>
<script src="./script.js"></script>

<style scoped lang="scss">
@import "./style.scss";
</style>
