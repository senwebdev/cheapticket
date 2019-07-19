<template>
<div :scroll="onScroll" :style="{color: text_color}">
  <div class="page-wrapper" v-bind:style="{ 
    backgroundImage: 'url(' + background_img + ')', 
    color: text_color
  }">

    <transition name="slide">
      <Adaptivemenu v-if="is_adaptive" class="menu"/>
    </transition>

    <Homeheader @toggleMenu="adaptive=$event"/>

    <div class="container main-page-content clearfix">
        <div class="row">
            <div class="col title-info" :style="{margin: marginTitle}">
                <h1>Pay Less, Fly More</h1>
                <div class="title-info-span">Lowest Prices and 100% secure!</div>
            </div>
        </div>
        <div class="row">
            <Selecttrip @updateOption="updateOption"/>
            <div class="col-xxl-3 col-xl-2 right-side" v-if="($store.state.dateState === 'morning')">
                <div class="row">
                    <div class="col">
                        <span>Quick tools</span>
                        <ul>
                            <li><router-link to="">Print/View ticket</router-link></li>
                            <li><router-link to="">Cancellations</router-link></li>
                            <li><router-link to="">Change/Reschedule</router-link></li>
                            <li><router-link to="">Contact us</router-link></li>
                            <li><router-link to="">FAQ</router-link></li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col partners">
                        <router-link to=""><img src="https://res.cloudinary.com/kr-soft/image/upload/v1562141121/partners_citrtm.png"></router-link>
                    </div>
                </div>
            </div>
            <Quicktools v-else/>
        </div>
    </div>
    <div class="container bottom-content clearfix" :style="{padding: padding}">
      <div class="row justify-content-start bottom-menu" :style="{marginLeft: marginLeft}" >
        <Links/>
      </div>
    </div>
  </div>
  <Footer/>
</div>
</template>

<script src="./index.js"></script>

<style>
a {
  text-decoration: none !important;
  color:black !important;
}
</style>


<style lang="scss" scoped>
@import '@/assets/style/home.scss';
@import '@/assets/style/adaptive.scss';

.main-page-content {
  padding: 0 15px 0 15px;
}
.footer {
  padding: 0 15px 0 15px;
}
.page-wrapper {
  font-family: 'TT Norms', serif;
}

h1 {
    font-size: 75px;
    line-height: 89px;
}
@media (max-width: 1279px){
h1 {
    font-size: 65px;
    line-height: 78px;
}}
@media (max-width: 767px){
h1 {
    font-size: 24px;
    line-height: 28px;
}}

@media (max-width: 1279px) {
  .left-side{
    display:block !important;
  }
}

.slide-enter,
.slide-leave-to {
  transform: scaleY(0);
}

.menu {
  position: absolute;
  transform-origin: top;
  transition: transform .2s ease-in-out;
  overflow: hidden;
}
@media (max-width: 767px){
.title-info {
    margin: -18px auto 10px !important;
    padding: 25px 14px !important;
    background: #fff !important;
    z-index: 1 !important;
}}
.title-info, 
.bottom-content .bottom-menu,
.footer .security {
  margin-left: 0;
}
/*Left-side*/
.left-side {
  padding: 32px 35px 32px 0;
  background: #fff;
}
.title-info {
    margin: 70px 0 100px 100px;
}
.bottom-content {
  padding: 120px 15px 42px;
  margin-left: 100px;
}
</style>