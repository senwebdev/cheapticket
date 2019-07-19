<template>
    <div class="col-xxl-3 col-xl-2 right-side" :style="{background: back_color, padding: padding}">
        <div class="row">
            <div class="col">
                <span>Quick tools</span>
                <ul>
                    <li><router-link :style="{color: text_color}" to="/booking">My Booking</router-link></li>
                    <li><router-link :style="{color: text_color}" to="/contact">Contact us</router-link></li>
                    <li><router-link :style="{color: text_color}" to="/faq">FAQ</router-link></li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    data() {
        return {
            text_color: '',
            back_color: '',
            padding: '0',
        };
    },
    created() {
        this.text_color = ( this.$store.state.dateState === 'night' ) ? 'white !important' : 'black';
        this.back_color = ( this.$store.state.dateState === 'morning' ) ? '#F9F9F9' : 'none';
        this.padding = '0';
   },
};
</script>

<style >
  /*Right-side*/
.right-side {
    padding: 32px 0 32px 35px;
    background: #F9F9F9;
}
.right-side .partners {
    margin-top: 200px;
}

ul {
    margin: 0 ;
    padding: 0 !important;
}
</style>
