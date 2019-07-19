<template>
    <div class="container header clearfix" :style="{paddingBottom: paddingBottom}">
        <div class="row">
            <div class="col header-left">
                <div class="row">
                    <div class="col-xxl col-xl-5 col-lg col-md">
                        <router-link to="/" class="header-logo"><img src="https://res.cloudinary.com/kr-soft/image/upload/v1562141120/logo_zdiyww.png"><span :style="{color: text_color}">CheapTicket.in</span></router-link>
                        <a href="#" class="header-arrow-icon"><img src="https://res.cloudinary.com/kr-soft/image/upload/v1562141117/header_arrow_icon_hp4sc2.png"></a>
                    </div>
                    <div class="col-xxl col-xl-7 col-lg-auto col-md-auto">
                        <div class="header-phone">
                            <a :style="{color: text_color}" href="tel:+91120488777" class="header-phone-link"><span :style="{background: phone_img}" class="phone-icon"></span>+91-120-4887777</a>
                            <span :style="{color: text_color}">- 24/7</span>
                        </div>
                        <a @click.prevent = "toggleMenu" class="menu-adaptive-icon"><img src="https://res.cloudinary.com/kr-soft/image/upload/v1562141120/menu_adaptive_icon_udrxxk.png"></a>
                    </div>
                </div>
            </div>
            <div class="col-auto header-right">
                <Language/>
                <Currency/>
                <div class="header-right-manage"><router-link :style="{color: text_color}" to="/booking">Manage bookings</router-link></div>
                <div class="header-right-sign-up"><router-link :style="{color: text_color}" to="/signup"><span :style="{background: signup_img}"></span>Sign up</router-link></div>
                <div class="header-right-login"><router-link :style="{color: text_color}" to="/login"><span :style="{background: login_img}"></span>Login</router-link></div>
            </div>
        </div>
    </div>
</template>

<script>
import Language from '../widgets/Language';
import Currency from '../widgets/Currency';

export default {
    components: {
        Language,
        Currency,
    },
    data() {
        return{
            is_clicked: false,
            text_color: '',
            phone_img: '',
            signup_img: '',
            login_img: '',
            paddingBottom: 0,
        };
    },
    methods: {
        toggleMenu() {
            this.is_clicked = !this.is_clicked;
            this.$emit('toggleMenu', this.is_clicked);
        },
    },
    created() {
        const state = this.$store.state.dateState;
        if (state === 'night') {
            this.text_color = 'white !important';
            this.phone_img =
            'url("https://res.cloudinary.com/kr-soft/image/upload/v1562141122/phone_white_cy2yh0.png") no-repeat';
            this.signup_img =
            'url("https://res.cloudinary.com/kr-soft/image/upload/v1562141123/sign_up_white_fxzthk.png") no-repeat';
            this.login_img =
            'url("https://res.cloudinary.com/kr-soft/image/upload/v1562141120/login_white_ko6jr1.png") no-repeat';
        } else {
            this.text_color = 'black';
            this.phone_img =
            'url("https://res.cloudinary.com/kr-soft/image/upload/v1562141122/phone_er2v0o.png") no-repeat';
            this.signup_img =
            'url("https://res.cloudinary.com/kr-soft/image/upload/v1562141123/sign_up_xwu2bp.png") no-repeat';
            this.login_img =
            'url("https://res.cloudinary.com/kr-soft/image/upload/v1562141119/login_r6co23.png") no-repeat';
        }
        if (state !== 'morning') {
            this.paddingBottom = 0;
        }
    },
};

</script>

<style lang="scss" scoped>
@media (max-width: 1919px){
.header-right-sign-up, .header-right-login {
    display: block;
}}
.header .header-adaptive-left {
    text-align: left;
}
.header-left {
    text-align: left;
}
</style>
