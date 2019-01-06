import Http from "@/http/http";
import { recommend, user } from "./index";

export default {
  getBannerList() {
    return Http.get(recommend.getBannerList);
  },

  getRecommendSongList() {
    return Http.get(recommend.getRecommendSongList);
  },

  getRecommendSong() {
    return Http.get(recommend.getRecommendSong);
  }
};
