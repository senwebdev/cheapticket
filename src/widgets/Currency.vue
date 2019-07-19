<template>
    <div class="header-right-currency">
        <a 
            href="#" 
            class="header-right-currency-default" 
            @click.prevent="showCurrency=!showCurrency" 
            v-on-clickaway="awayCurrency"
            :style="{color: text_color}"
        >
        {{currencies[currencyIndex].title}}
        </a>
        <transition name="slide">
            <ul class="selectCurrency" v-if="showCurrency">
                <li
                v-for="(item,id) in currencies" v-bind:key="id"
                @click="currencyIndex = id"
                >
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
            showCurrency: false,
            currencyIndex: 0,
            currencies: [{
                    title: 'USD - $',
                }, {
                    title: 'INR - ₹',
                }, {
                    title: 'JPY - ¥',
                }, {
                    title: 'AUD - $',
                },
             ],
        };
    },
    methods: {
        awayCurrency() {
            this.showCurrency = false;
        },
    },
    created() {
        this.text_color = (this.$store.state.dateState === 'night') ? 'white !important' : 'black';
    },
};
</script>

<style lang="scss" scoped>
.selectCurrency {
  position: absolute;
  width: 80px;
  font-size:15px;
    top: 17px;
    left: 3px;
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
    padding: 10px 15px 0px 15px;
    height: 30px;
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


