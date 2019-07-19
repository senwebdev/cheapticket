<template>
    <div class="header-right-country" >
        <a :style="{color: text_color}" href="#" class="header-right-country-default" @click.prevent="showFlag=!showFlag" v-on-clickaway="awayFlag">
            <img v-bind:src="flags[flagIndex].avatar"><span>{{flags[flagIndex].title}}</span>
        </a>
            <transition name="slide">
                <ul class="selectFlag" v-if="showFlag">
                    <li
                    v-for="(item,id) in flags" v-bind:key="id"
                    @click="flagIndex=id"
                    >
                        <img :src="item.avatar">
                        <v-label>{{item.title}}</v-label>
                    </li>
                </ul>
            </transition>
    </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
    mixins: [ clickaway ],

    data() {
        return{
            text_color: '',
            showFlag: false,
            flagIndex: 0,
            flags: [{
                    avatar: 'https://res.cloudinary.com/kr-soft/image/upload/v1562151550/english_qa8gwk.png',
                    title: 'ENGLISH(US)',
                }, {
                    avatar: 'https://res.cloudinary.com/kr-soft/image/upload/v1562151552/india_ejhplp.png',
                    title: 'India',
                }, {
                    avatar: 'https://res.cloudinary.com/kr-soft/image/upload/v1562151808/oman_nmkimm.png',
                    title: 'Oman',
                }, {
                    avatar: 'https://res.cloudinary.com/kr-soft/image/upload/v1562151548/qatar_g61mta.png',
                    title: 'Qatar',
                }, {
                    avatar: 'https://res.cloudinary.com/kr-soft/image/upload/v1562151550/bahrain_mt6tkr.png',
                    title: 'Bahrain',
                },
            ],
        };
    },
    methods: {
        awayFlag() {
            this.showFlag = false;
        },
    },
    created() {
        this.text_color = (this.$store.state.dateState === 'night') ? 'white !important' : 'black';
    },
};
</script>

<style lang="scss" scoped>

.selectFlag {
  position: absolute;
  width: 160px;
  font-size:10px;
  top:13px;
  left:3px;
  margin: 0;
  padding: 0;
  list-style-type: none;
  transform-origin: top;
  transition: transform .2s ease-in-out;
  overflow: hidden;
  z-index:1000;
  li{
    background: white;
    display: flex;
    padding: 15px;
    height: 43px;
    &:hover{
        cursor: pointer;
    }
    label {
        font-size: 14px;
    }
    label:hover{
        cursor: pointer;
    }
    img{
        height: 13px;
        width: 19px;
    }
  }
}
.slide-enter, .slide-leave-to{
  transform: scaleY(0);
}
</style>


