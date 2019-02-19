<template>
  <div>
    <!-- 图片区域滑动头 -->
    <div id="slider" class="mui-slide">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item',{'mui-active' : item.id ==0 }]"
            v-for="item in categories"
            :key="item.id"
            @tap="getPhotoList(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>

    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link v-for="(item , index) in photoList" :key="index"
      :to="'/home/photoInfo/'+item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h3 class="info-title">{{ item.title }}</h3>
          <div class="info-body">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import mui from "@/libs/mui/js/mui.min.js";

export default {
  created() {
    this.getCategories();
    this.getPhotoList(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  data() {
    return {
      categories: [],
      photoList: []
    };
  },
  methods: {
    getCategories() {
      this.$http.get("getimgcategory").then(result => {
        this.categories = result.body.message;
        this.categories.unshift({
          id: 0,
          title: "全部"
        });
      });
    },
    getPhotoList(cateid) {
      this.$http.get("getimages/" + cateid).then(result => {
        this.photoList = result.body.message;
      });
    }
  }
};
</script>

<style lang="less" scoped>
*{
  touch-action: pan-y;
}
.photo-list {
  padding: 10px;
  padding-bottom: 0;
  li {
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 10px #999;
    position: relative;
    img{
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info{
      color: #fff;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
      .info-title{
        font-size: 14px;
      }
      .info-body{
        font-size: 12px;
      }
    }
  }
}
</style>
