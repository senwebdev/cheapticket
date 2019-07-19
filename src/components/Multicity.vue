<template>
    <div>
        <div class="form-row">
            <div class="col-xxl col-xl col-lg d-lg-block d-md-none solid-line top"></div>
        </div>
        
        <div v-for="(input, index) in inputs" v-bind:key="index">
            <Multirow 
                @removeChild="removeChild(index)"
                @updateDate="updateDate($event, index)"
                :nextDate="dates[index]"
            />
        </div>

        <div class="form-row">
            <div class="col-xxl col-xl col-lg d-lg-block d-md-none solid-line top"></div>
        </div>
        <div class="form-row">
            <v-btn @click="addRow" color="info">+ Add new</v-btn>
        </div>
        <div class="form-row block-3">
            <Passengerclass />
            <div class="col-xxl-6 align-self-end col-xl-6 col-lg-6">
                <div class="row">
                    <div class="col-xxl-6 co-lxl-6 col-lg-6">
                        <button type="submit" class="btn btn-primary search">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Passengerclass from '../widgets/Passengerclass';
import Multirow from '../widgets/Multirow';

export default {
    components: {
        Passengerclass,
        Multirow,
    },

    data() {
        return{
            today: new Date().toISOString().substr(0, 10),
            inputs: [Multirow, Multirow],
            flag: [],
            prevDate: [],
            dates: [],
        };
    },
    created() {
        this.flag[0] = false;
        this.flag[1] = false;
    },
    methods: {
        addRow() {
            this.flag.push(true);
            this.inputs.push(Multirow);
        },
        removeChild(id) {
            this.inputs.splice(id, 1);
        },
        updateDate($event, index) {
            // var today = new Date();
            // var current = new Date($event);
            // today.setDate(current.getDate() + 2);
            // this.dates[index] = today.toISOString().substr(0, 10);
            // console.log(this.dates[index], index);
        },
    },
    async created() {
        await axios.get('http://dev.cheaptickets.co.in/b2c2/meta/searchairport')
        .then((response) => {
            this.from_locations = response.data.map((location) => location.city_name + '(' + location.city_code + ')');
            this.to_locations = response.data.map((location) => location.city_name + '(' + location.city_code + ')');
        });
    },
};
</script>

<style lang="scss" scoped>

</style>