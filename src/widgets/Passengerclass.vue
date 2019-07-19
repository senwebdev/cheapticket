<template>
    <div class="col-xxl-6 col-xl-6 col-lg-12" v-on-clickaway="away" >
        <label for="choose-options-round">Passengers/Class</label>
        <button 
            class="btn dropdown-toggle choose-options" id="choose-options-round" 
            @click.prevent="isOpen=!isOpen"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
        >
            <div class="choose-options-round">{{parseInt(adult_num)+parseInt(child_num)+parseInt(infant_num)}} Passenger, {{picked_class || 'Unpicked Class'}} </div>
        </button>
        <div 
            class="dropdown-menu options" 
            v-show="isOpen" 
            :style="$store.state.showDropdown 
                ? 'position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 82px, 0px);'
                : 'position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, -273px, 0px);'
            "
        >
            <div class="title-option">Travellers</div>
            <div class="number">
                <span class="title-age">Adult (12+ yr)</span>
                <button @click.prevent="operatePassenger('m_adult')" class="minus">-</button>
                <input id="adult-round" type="number" v-model="adult_num" min="1" step="0.01">
                <button @click.prevent="operatePassenger('p_adult')" class="plus">+</button>
            </div>
            <div class="number">
                <span class="title-age">Child (2-11 yr)</span>
                <button @click.prevent="operatePassenger('m_child')" class="minus">-</button>
                <input id="child-round" type="number" v-model="child_num" min="0">
                <button @click.prevent="operatePassenger('p_child')" class="plus">+</button>
            </div>
            <div class="number">
                <span class="title-age">Infant (0-2 yr)</span>
                <button @click.prevent="operatePassenger('m_infant')" class="minus">-</button>
                <input id="infant-round" type="number" v-model="infant_num" min="0">
                <button @click.prevent="operatePassenger('p_infant')" class="plus">+</button>
            </div>
            <div class="title-option">Class</div>
            <div class="form-check" v-for="(item, id) in classes" v-bind:key="id">
                <input class="form-check-input class-option-round" type="radio" name="exampleRadios" :id="item.id" :value="item.name" :checked="checked">
                <label class="form-check-label" :for="item.id">{{item.name}}</label>
            </div>
        </div>
    </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import axios from 'axios';

export default {
    mixins: [ clickaway ],

    data() {
        return {
            isActive: false,
            classes: [],
            adult_num: 1, child_num: 0, infant_num: 0,
            picked_class: 'Economy',
            isOpen: false,
            checked: true,
        };
    },
    async created() {
        await axios.get('http://dev.cheaptickets.co.in/b2c2/booking/class')
        .then((response) => {
            this.classes = response.data.data;
        });
    },
    methods: {
        operatePassenger( operateCase ) {
            // const sumPassenger = this.adult_num + this.child_num + this.infant_num;
            // if (sumPassenger > 8) {
            //     this.clearPassenger();
            // }
            if ( operateCase === 'm_adult') {
                this.adult_num--;
                if ( this.adult_num < 2 ) { this.adult_num = 1; }
                if ( this.infant_num >= this.adult_num ) { this.infant_num = this.adult_num; }
            } else if ( operateCase === 'p_adult') {
                this.adult_num++;
                if ( this.adult_num > 8 ) { this.adult_num = 9; }
            } else if ( operateCase === 'm_child') {
                this.child_num--;
                if ( this.child_num < 1 ) { this.child_num = 0; }
            } else if ( operateCase === 'p_child') {
                this.child_num++;
                if ( this.child_num > 8 ) { this.child_num = 9; }
            } else if ( operateCase === 'm_infant') {
                this.infant_num--;
                if ( this.infant_num < 1 ) { this.infant_num = 0; }
            } else if ( operateCase === 'p_infant') {
                this.infant_num++;
                if ( this.infant_num >= this.adult_num ) { this.infant_num = this.adult_num; }
            } else {
                //
            }
        },
        away() {
            this.isOpen = false;
        },
        clearPassenger() {
            this.adult_num = 1;
            this.child_num = 0;
            this.infant_num = 0;
        },
    },
};
</script>

<style lang="scss" scoped>
.dropdown-menu{
    display:inline-grid;
    top:65%;
    left: 5px;
}
.dropdown-menu.options {
    top:7px !important;
}
#choose-options-round{
    height: 56px;
    border-radius: 7px;
    box-shadow: 2px 5px 2px -4px grey;
    background: #FBFBFB !important;
    border: 1px solid #E8E8E8;
    margin-top: 10px;
}
.number {
    float: none !important;
    display: block !important;
    font-size: 1rem;
}
.number input{
    display: inline !important;
}
.number .title-option {
    margin-bottom: -10px;
}

.radio-label{
    font-size: 25px;
    vertical-align: super;
    margin-left: 10px;
}
.number input {
    color: #495057;
    background: #FBFBFB;
    border: 1px solid #E8E8E8;
    margin: 3px;
    width: 100px;
}
.number input[type=number]::-webkit-inner-spin-button, 
.number input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
}

</style>
