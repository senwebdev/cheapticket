<template>
<div class="container header clearfix">
    <div class="row justify-content-end">
        <div class="col-xxl-9 col-xl-9 col-lg-12 col-md-12">
            <div class="row">
                <div class="col-xxl-2 col-xl-2 col-lg col-md"></div>
                <div class="col-xxl-10 col-xl-10 col-lg-12 col-md-12">
                    <div class="row">
                        <div class="col-xxl col-xl-4 col-lg-12 col-md-12 header-left">
                            <div class="row header-adaptive">
                                <div class="col-xxl col-xl col-lg-6 col-md-6 header-adaptive-left">
                                    <a href="#" class="header-logo"><img src="https://res.cloudinary.com/kr-soft/image/upload/v1562141120/logo_zdiyww.png"></a>
                                    <a href="#" class="header-arrow-icon"><img src="https://res.cloudinary.com/kr-soft/image/upload/v1562141117/header_arrow_icon_hp4sc2.png"></a>
                                </div>
                                <div class="col-xxl col-xl col-lg-auto col-md-auto header-adaptive-right">
                                    <a @click.prevent = "toggleMenu" class="menu-adaptive-icon"><img src="https://res.cloudinary.com/kr-soft/image/upload/v1562141120/menu_adaptive_icon_udrxxk.png"></a>
                                </div>
                            </div>
                            <div class="header-phone">
                                <a href="tel:+91120488777"><span class="phone-icon"></span>+91-120-4887777</a>
                                <span>- 24/7</span>
                            </div>
                        </div>
                        <div class="col-xxl col-xl col-lg-12 col-md-12 header-right">
                            <Language/>
                            <Currency/>
                            <div class="header-right-manage">
                                <router-link to="/recentsearch">Recent search</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
        return {
            is_clicked: false,
        };
    },
    methods: {
        toggleMenu() {
            this.is_clicked = !this.is_clicked;
            this.$emit('toggleMenu', this.is_clicked);
        },
    },
};
</script>

<style lang="scss" scoped>
.header .header-adaptive {
    display: none;
}
.header .header-adaptive-left {
    text-align: left;
}
@media (max-width: 1279px){
.header .header-adaptive {
    display: block !important;
}}
.header {
    line-height: 100px !important;
}
@media (max-width: 1279px){
.header {
    padding-top: 10px !important;
    line-height: normal !important;
}}
.left-side-wrapper .header-logo span {
    display: inline-flex;
}


</style>


