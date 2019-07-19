<template>
    <div class="col-xxl-9 col-xl-10 left-side" :style="{background: back_color, paddingTop: paddingTop, paddingRight: paddingRight}">
        <div class="row">
            <div class="col-xxl-1 col-xl-1 col-lg-1 d-lg-block d-md-none">
                <a v-if="trip_method!=='option3'" class="black-plane" href="#" :style="{margin:marginPlane}"><img src="https://res.cloudinary.com/kr-soft/image/upload/v1562141115/black-plane_da05ce.png"></a>
            </div>
            <form class="col-xxl-11 col-xl-11 col-lg-11 col-md-12 form-search" :style="setBackground">
                <fieldset class="form-group button-options">
                    <div class="form-check" :class="{ }">
                        <input type="radio" 
                            class="form-check-input tab-option" 
                            name="optionsRadios" id="radio-multi-1" 
                            value="option1" data-tab="form-tab-1" 
                            checked="true"
                            v-model="trip_method"
                            @change="$emit('updateOption', false)"
                        >
                        <label
                            for="radio-multi-1" 
                            class="form-check-label"
                        ><span>One way</span>
                        </label>
                    </div>
                    <div class="form-check">
                        <input type="radio" 
                            class="form-check-input tab-option" 
                            name="optionsRadios" id="radio-multi-2" 
                            value="option2" 
                            data-tab="form-tab-2"
                            v-model="trip_method"
                            @change="$emit('updateOption', false)"
                        >
                        <label for="radio-multi-2" class="form-check-label"><span>Round trip</span></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" 
                            class="form-check-input tab-option" 
                            name="optionsRadios" id="radio-multi-3" 
                            value="option3" 
                            data-tab="form-tab-3"
                            v-model="trip_method"
                            @change="$emit('updateOption', $event.target.value)"
                        >
                        <label for="radio-multi-3" class="form-check-label"><span>Multi city</span></label>
                    </div>
                </fieldset>
                <Oneway 
                    v-if="trip_method=='option1'" 
                    @changeTrip="trip_method=$event"
                />
                <Roundtrip
                    v-if="trip_method=='option2'"
                />
                <Multicity 
                    v-if="trip_method=='option3'"
                    :option="trip_method"
                />
                <div class="form-row recent-searches" v-if="$store.state.dateState == 'morning'">Recent Searches</div>
                <div class="form-row flights" v-if="$store.state.dateState == 'morning'">
                    <div class="col">
                        <a href="#">
                            <span>DEL - BOM</span>
                            <span>3 NOV ‘17, 1 Adult</span>
                        </a>
                    </div>
                    <div class="col">
                        <a href="#">
                            <span>BLR - GOI</span>
                            <span>8 NOV ‘17, 1 Adult</span>
                        </a>
                    </div>
                    <div class="col">
                        <a href="#">
                            <span>HYD - BOM</span>
                            <span>15 NOV ‘17, 2 Adults</span>
                        </a>
                    </div>
                    <div class="col">
                        <a href="#">
                            <span>CCU - MAA</span>
                            <span>3 NOV ‘17, 1 Adult</span>
                        </a>
                    </div>
                    <div class="col">
                        <a href="#">
                            <span>HYD - BOM</span>
                            <span>15 NOV ‘17, 2 Adults</span>
                        </a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Oneway from './Oneway';
import Roundtrip from './Roundtrip';
import Multicity from './Multicity';
import { mapActions } from 'vuex';

export default {

    components: {
        Oneway,
        Roundtrip,
        Multicity,
    },
    data() {
        return{
            trip_method: 'option1',
            back_color: '',
            paddingTop: '0',
            paddingRight: '0',
            marginPlane: '',
        };
    },
    created() {
        const state = this.$store.state.dateState;
        this.back_color = (state === 'morning') ? 'white' : 'none';
        if (state === 'morning') {
            this.paddingTop = '32px';
            this.paddingRight = '35px';
            this.marginPlane = '0 auto';
        }
    },
    methods: {
        setBackground() {
            const state = this.$store.state.dateState;
            if (state === 'morning') {
                return 'background: #fff';
            } else {
                return 'background: none';
            }
        },
    },
};
</script>

<style scoped>

.left-side {
    padding: 0;
}
.black-plane {
    display: block;
    width: 22px;
    height: 22px;
    margin: 100px auto 0;
}
.form-check-label::before{
    /* border:3px solid white !important; */
}

.flights .col:last-child {
margin-right: 0;
}
.flights .col span {
display: block;
font-size: 14px;
line-height: 17px;
letter-spacing: -0.0553833px;
}
.flights .col span:first-child {
font-size: 20px;
line-height: 24px;
letter-spacing: -0.079752px;
}
.recent-searches {
font-size: 24px;
line-height: 104px;
}
.flights {
padding-right: 35px;
}
form.form-search .form-row.flights .col {
margin-right: 20px;
padding: 9px 25px;
background: #FBFBFB;
border: 1px solid #E8E8E8;
border-radius: 6px;
opacity: 0.55;
}
.button-options {
    margin-bottom: 35px;
}
</style>