<template>
    <div class="col-xxl-3 col-xl-3 left-side">
        <div class="left-side-wrapper">
            <router-link to="/" class="header-logo"><img src="https://res.cloudinary.com/kr-soft/image/upload/v1562141120/logo_zdiyww.png"><span>CheapTicket.in</span></router-link>
            <div class="account-name">Jordan Hunt</div>
            <div class="account-links">
                <router-link to="/accountsettings">account settings</router-link>
                <router-link to="/logout">logout</router-link>
            </div>
            <div class="left-menu">
                <ul>
                    <li><router-link :style="{color: text_color}" to="/booking">My Booking</router-link></li>
                    <li><router-link :style="{color: text_color}" to="/travelers">Travelers</router-link></li>
                    <li><router-link :style="{color: text_color}" to="/contact">Contact us</router-link></li>
                    <li><router-link :style="{color: text_color}" to="/faq">FAQ</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {
    },
    data() {
        return {
            text_color: '',
        };
    },
    created() {
        const hour = new Date().getHours();
        this.text_color = (hour < 5 || hour > 19) ? 'white' : 'black';
    },
};
</script>

<style lang="scss">
@media (max-width: 1639px){
// .header-logo span {
//     display: block;
// }
}
</style>


