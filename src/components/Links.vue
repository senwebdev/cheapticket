<template>
    <div class="col-9">
        <ul>
            <li><router-link :style="{color: text_color}" to="/">Home |</router-link></li>
            <li><router-link :style="{color: text_color}" to="/contact">&nbspContact Us |</router-link></li>
            <li><router-link :style="{color: text_color}" to="/about">&nbspAbout Us |</router-link></li>
            <li><router-link :style="{color: text_color}" to="/booking">&nbspBooking Guidelines |</router-link></li>
            <li><router-link :style="{color: text_color}" to="/payment">&nbspPayment |</router-link></li>
            <li><router-link :style="{color: text_color}" to="/flightchanges">&nbspFlight Changes |</router-link></li>
            <li><router-link :style="{color: text_color}" to="/termsofservices">&nbspTerms of Services |</router-link></li>
            <li><router-link :style="{color: text_color}" to="/traveladvisory">&nbspTravel Advisory |</router-link></li>
            <li><router-link :style="{color: text_color}" to="/visa">&nbspVisa |</router-link></li>
            <li><router-link :style="{color: text_color}" to="/faq">&nbspFAQ |</router-link></li>
            <li><router-link :style="{color: text_color}" to="/affiliations">&nbspAffiliations |</router-link></li>
            <li><router-link :style="{color: text_color}" to="/privacypolicy">&nbspPrivacy Policy |</router-link></li>
            <li><router-link :style="{color: text_color}" to="/greatdeals">&nbspGreat Deals |</router-link></li>
            <li><router-link :style="{color: text_color}" to="/activities">&nbspActivities</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return{
            text_color: '',
        };
    },
    created() {
        const state = this.$store.state.dateState;
        this.text_color = (state === 'night') ? 'white !important' : 'black';
    },
};
</script>

<style scoped>
li{
    cursor:pointer;
}

ul, li {
margin:0;
padding: 0;
}
</style>
