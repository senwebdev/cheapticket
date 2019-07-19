<template>
    <div class="form-row block-1">
        <div class="col-xxl col-xl col-lg col-md-12">
            <label for="from-select-one-way">From</label>
            <!-- <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="button" data-id="from-select-round" title="New Delhi (DEL)" aria-expanded="true"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">New Delhi (DEL)</div></div> </div></!-->
            <v-autocomplete
                class="autocomplete"
                solo
                :items="from_locations"
                v-model="$store.state.from_location" 
                placeholder="New Delhi (DEL)"
                @change="onSaveCity"
            >
            <template v-slot:prepend-item>
                <v-text-field class="prepend_input" @keyup="onInputCity($event.target.value)"></v-text-field>
            </template>
            </v-autocomplete>

        </div>
        <div class="col-xxl col-xl col-lg col-md-12">
            <label for="to-select-round">To</label>
            <v-autocomplete 
                class="autocomplete"
                :items="to_locations" 
                solo 
                v-model="$store.state.to_location" 
                placeholder="Mumbai (BOM)"
                @change="onSaveCity"
            >
            <template v-slot:prepend-item>
                <v-text-field class="prepend_input" @keyup="onInputCity($event.target.value)"></v-text-field>
            </template>
            </v-autocomplete>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return{
            from_locations: [],
            from_location: '',
            to_locations: [],
            to_location: '',
            origin_locations: [{
                from: [],
                to: [],
            }],
        };
    },
    computed: {
        ...mapGetters(['cities']),
    },
    async created() {
        await axios.get('http://dev.cheaptickets.co.in/b2c2/meta/searchairport')
        .then((response) => {
            this.from_locations = response.data.map((location) => location.city_name + '(' + location.city_code + ')');
            this.to_locations = response.data.map((location) => location.city_name + '(' + location.city_code + ')');
            this.origin_locations.from = this.from_locations;
            this.origin_locations.to = this.to_locations;
        });
    },
    methods: {
        ...mapActions(['saveCity']),
        onSaveCity() {
            const cities = {
                from_location: this.from_location,
                to_location: this.to_location,
            };
            this.saveCity(cities);
        },
        onInputCity(value) {
            if (value === '') {
                this.from_locations = this.origin_locations.from;
                this.to_locations = this.origin_locations.to;
            } else {
                const from = this.from_locations.filter((city) => city.toLowerCase().includes(value.toLowerCase()));
                const to = this.to_locations.filter((city) => city.toLowerCase().includes(value.toLowerCase()));
                const fromL = [...new Set(from)];
                const toL = [...new Set(to)];
                this.from_locations = fromL;
                this.to_locations = toL;
            }
        },
    },
};
</script>

<style >
.btn-light.dropdown-toggle, form.form-search.dropdown-toggle.choose-options {
    height: 56px;
    padding-top: 0;
    padding-bottom: 0;
    color: #495057;
    line-height: 56px;
    background: #FBFBFB;
    border: 1px solid #E8E8E8;
    border-radius: 6px;
}
.prepend_input {
    margin: 5px;
    border: 3px solid deepskyblue;
    border-radius: 10px;
    height: 48px;
    box-shadow: 0px 0px 2px 2px lightskyblue;
}
.autocomplete input {
    cursor: pointer;
    pointer-events: none;
    font-size: 1rem !important;
}
.autocomplete input::placeholder {
    color:black !important;
}
.autocomplete>.v-input__control>.v-input__slot>.v-select__slot>input {
    pointer-events: none;
}
.autocomplete>.v-input__control>.v-input__slot {
    border-radius: 7px !important;
}
.v-input__slot {
    background: #FBFBFB !important;
    border-radius:10px;
    border: 1px solid #E8E8E8 !important;
    min-height: 56px !important;
    cursor:pointer !important;
}
.prepend_input>.v-input__control>.v-input__slot{
    background: white !important;
    min-height: 40px !important;
    margin-top: -8px;
    border: none !important;
}
.prepend_input>.v-input__control>.v-input__slot::after {
    display:none !important;
}
.v-list__tile.v-list__tile--link:hover {
    background: dodgerblue !important;
    color:white !important;
}
.v-list__tile.v-list__tile--link{
    font-size:1rem;
    height:35px;
    padding-left:24px;
}
.v-text-field {
    padding:8px;
    padding-top:10px !important;
}
</style>
