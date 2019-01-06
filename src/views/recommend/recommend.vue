<template>
    <div class="m-recommend">
        <div class="decorate"></div>
        <div class="m-recommend-container">
            <mt-swipe :auto="2000" class="m-swipe">
                <mt-swipe-item v-for="(b,$index) in bannerList" :key="$index">
                    <img :src="b.picUrl">
                </mt-swipe-item>
            </mt-swipe>

            <div>
                <p>推荐歌单</p>
                <ul>
                    <li class="item" v-for="l in recommendSongList" :key="l.id">
                        <p class="play-count">
                            <i class="fa fa-headphones"></i>{{getPlayCount(l.playCount)}}
                        </p>
                        <img :src="l.picUrl" class="play-cover">
                        <p>{{l.name}}</p>
                    </li>
                </ul>
            </div>

            <div>
                <p>推荐歌曲</p>
                <ul>
                    <li class="item" v-for="l in recommendSong" :key="l.id">
                        <img :src="l.image" class="play-cover">
                        <p>{{l.name}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Recommend from '@/api/recommend';
    import {createRecommendSong} from '@/common/js/song'
    export default {
        name: "Recommend",

        data() {
            return {
                bannerList: [],
                recommendSongList: [],
                recommendSong: [],

            }
        },

        created() {
            this.init();
        },

        mounted() {

        },

        computed: {

        },

        methods: {
            init() {
                this.getBannerList();
                this.getRecommendSongList();
                this.getRecommendSong();
            },

            getBannerList() {
                Recommend.getBannerList().then(({data}) => {
                   if(data && data.code === 200){
                       this.bannerList = data.banners;
                   }
                });
            },

            getRecommendSongList() {
                Recommend.getRecommendSongList().then(({data}) => {
                    if(data && data.code === 200){
                        this.recommendSongList = data.result;
                    }
                });
            },

            getRecommendSong() {
                Recommend.getRecommendSong().then(({data}) => {
                    if(data && data.code === 200){
                        let list = data.result.map((item) => {
                            return createRecommendSong(item)
                        });
                        this.recommendSong = list;
                    }
                });
            },

            getPlayCount(playCount) {
                return Number.parseInt(playCount / 10000) + '万';
            }
        }
    }
</script>

<style scoped lang="scss">
    .m-recommend {
        padding-top: 10px;
        position: absolute;
        top: 85px;
        bottom: 0;
        width: 100%;
        z-index: 100;
        .decorate {
            position: absolute;
            top: 0;
            z-index: -10;
            background: #d44439;
            width: 100%;
            height: 5rem;
        }
        .m-recommend-container {
            width: 96%;
            margin: 0 auto;
            .m-swipe {
                height: 8rem;
                border-radius: 5px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .item {
                display: inline-block;
                position: relative;
                box-sizing: border-box;
                width: 33%;
                padding: 0 1%;
                font-size: 10px;
                vertical-align: top;
                .play-count {
                    color: white;
                    position: absolute;
                    right: 10px;
                    top: 0;
                }

                .play-cover {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>