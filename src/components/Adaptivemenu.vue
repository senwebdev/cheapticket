<template>
    <div class="container adaptive-menu-wrapper">
        <div class="row">
            <div class="col adaptive-menu">
                <div class="menu-title"><img src="https://res.cloudinary.com/kr-soft/image/upload/v1562141120/menu_title_rwidqh.png">Menu</div>
                <ul class="menu-list">
                    <li><router-link to="search"><img src="https://res.cloudinary.com/kr-soft/image/upload/v1562141120/menu_search_nzei0a.png">Search flights</router-link></li>
                    <li><router-link to="booking"><img src="https://res.cloudinary.com/kr-soft/image/upload/v1562141120/menu_booking_qcmhjq.png">My booking</router-link></li>
                    <li><router-link to="travelers"><img src="https://res.cloudinary.com/kr-soft/image/upload/v1562141120/menu_title_rwidqh.png">Travelers</router-link></li>
                    <li><router-link to="recent"><img src="https://res.cloudinary.com/kr-soft/image/upload/v1562141120/menu_search_nzei0a.png">Recent search</router-link></li>
                    <li><router-link to="faq"><img src="https://res.cloudinary.com/kr-soft/image/upload/v1562141120/menu_booking_qcmhjq.png">FAQ</router-link></li>
                    <li class="contacts">
                        <router-link to="contact"><img src="https://res.cloudinary.com/kr-soft/image/upload/v1562141120/menu_title_rwidqh.png">Contacts</router-link>
                        <span><a href="tel:+91120488777">+91-120-4887777</a>(24/7)</span>
                    </li>
                </ul>
                <div class="user-block">
                    <span><img src="https://res.cloudinary.com/kr-soft/image/upload/v1562141122/menu_user_gkonwn.png">Jordan Hunt</span>
                    <a href="#">Accout settings</a>
                    <a href="#">Logout</a>
                </div>
                <div class="select-your-language" data-toggle="modal" data-target="#select-your-language">Select your language</div>
                <div class="view-block">View full version</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.adaptive-menu-wrapper{
    display:block;
}
</style>
