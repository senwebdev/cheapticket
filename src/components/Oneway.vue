<template>
    <div>
        <Fromtoform />
        <div class="form-row block-2">
            <div class="col-xxl col-xl col-lg-6">
                <div class="form-group">
                    <label for="depart-on-round">Depart on</label>
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
                            autofocus
                            readonly
                            solo
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker 
                            v-model="depart_date" 
                            @input="depart_menu = false"
                            v-bind:min="today"
                        ></v-date-picker>
                    </v-menu>
                </div>
            </div>
            <div class="col-xxl col-xl col-lg-6">
                <div class="form-group" style="opacity:0.3" @click.prevent = "$emit('changeTrip', 'option2')">
                    <label for="depart-on-round" >Return on</label>
                    <v-menu
                        v-model="return_menu"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        min-width="290px"
                    >
                        <template v-slot:activator="{ on }">
                        <v-text-field
                            class="date_menu"
                            v-model="return_date"
                            append-icon="event"
                            readonly
                            solo
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker 
                            v-model="return_date" 
                            @input="return_menu = false" 
                        ></v-date-picker>
                    </v-menu>
                </div>
            </div>

            <Passengerclass/>
        </div>
        <div class="form-row block-3">
            <div class="col-xxl-3 col-xl-3 col-lg-6">
                <button type="submit" class="btn btn-primary search">Search</button>
            </div>
        </div>
    </div>
</template>

<script>
import Passengerclass from '../widgets/Passengerclass';
import Fromtoform from '../widgets/Fromtoform';

export default {
    components: {
        Passengerclass,
        Fromtoform,
    },
    data() {
        return{
            depart_date: new Date().toISOString().substr(0, 10),
            return_date: '',
            today: new Date().toISOString().substr(0, 10),
            depart_menu: false,
            return_menu: false,
        };
    },
    methods: {
    },
};
</script>

<style >
.date_menu>.v-input__control>.v-input__slot {
    border-radius: 7px !important;
}
</style>