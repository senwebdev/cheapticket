<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      text_color: '',
    };
  },
  created() {
    const now = new Date().getHours();
    if ( now >= 6 && now < 11 ) {
      this.$store.dispatch('updateState', 'morning');
    } else if ( now >= 11 && now < 19 ) {
      this.$store.dispatch('updateState', 'noon');
    } else {
      this.$store.dispatch('updateState', 'night');
    }
  },
};
</script>

<style lang="scss" >

@import '@/assets/style/adaptive-booking-page.scss';
@import '@/assets/style/adaptive-confirm-page.scss';
@import '@/assets/style/adaptive-contact-us.scss';
@import '@/assets/style/adaptive-faq.scss';
@import '@/assets/style/adaptive-my-profile.scss';
@import '@/assets/style/adaptive-result-page.scss';
@import '@/assets/style/adaptive.scss';
@import '@/assets/style/booking-page.scss';
@import '@/assets/style/confirm-page.scss';
@import '@/assets/style/contact-us.scss';
@import '@/assets/style/faq.scss';
@import '@/assets/style/home.scss';
@import '@/assets/style/main.scss';
@import '@/assets/style/my-profile.scss';
@import '@/assets/style/result-page.scss';

</style>
