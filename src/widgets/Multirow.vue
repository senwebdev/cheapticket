<template>
    <div class="form-row">
        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-12">
            <div class="form-group">
                <label for="from-select-one-way">From</label>
                <v-autocomplete
                    class="autocomplete"
                    :items="from_locations" 
                    solo 
                    v-model="from_location" 
                    placeholder="New Delhi (DEL)"
                >
                <template v-slot:prepend-item>
                    <v-text-field class="prepend_input" @keyup="onInputCity($event.target.value)"></v-text-field>
                </template>
                </v-autocomplete>
            </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-12">
            <div class="form-group">
                <label for="to-select-round">To</label>
                <v-autocomplete 
                    class="autocomplete"
                    :items="to_locations" 
                    solo 
                    v-model="to_location" 
                    placeholder="Mumbai (BOM)"
                >
                <template v-slot:prepend-item>
                    <v-text-field class="prepend_input" @keyup="onInputCity($event.target.value)"></v-text-field>
                </template>
                </v-autocomplete>
            </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-12 col-md-12">
            <div class="form-group">
                <label for="depart-multi">Depart on</label>
                <v-menu
                    v-model="depart_menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                >
                    <template v-slot:activator="{ on }">
                        <v-text-field
                            class="date_menu"
                            v-model="depart_date"
                            append-icon="event"
                            @click:append="depart_menu=true"
                            solo
                            readonly
                            v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="depart_date" 
                        @input="depart_menu = false"
                        v-bind:min="today"
                        @change="updateDate"
                    ></v-date-picker>
                </v-menu>
            </div>
        </div>
        <a 
            @click.prevent="$emit('removeChild', 'clicked')" 
            class="multi-close"
        ><img src="https://res.cloudinary.com/kr-soft/image/upload/v1562141121/multi_close_xfhxu5.png"></a>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['nextDate'],
    data() {
        return {
            today: new Date().toISOString().substr(0, 10),
            from_location: null, to_location: null,
            from_locations: [], to_locations: [],
            depart_menu: false,
            depart_date: '',
            origin_locations: [{
                from: [],
                to: [],
            }],
        };
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
        updateDate() {
            this.$emit('updateDate', this.depart_date);
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

<style>
.multi-close {
    left: -55px;
    margin-top: 50px;
    cursor: pointer;
    position: absolute;
    z-index: 7;
}

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
.autocomplete input  {
    cursor: pointer;
    pointer-events: none;
    font-size: 1rem !important;
}
.date_menu input {
    cursor: pointer;
    font-size: 1rem !important;
}

.autocomplete input::placeholder {
    color:black !important;
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
    display:none;
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
