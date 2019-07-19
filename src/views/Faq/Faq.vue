<template>
    <div>
        <div class="page-wrapper">
            <!--Adaptive Menu-->
            <transition name="slide">
                <Adaptivemenu v-if="is_adaptive" class="menu"/>
            </transition>

            <!--Modal Window with Language and Currency-->
            <div class="modal fade" id="select-your-language" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-title" id="exampleModalLabel">Select your language and currency</div>
                        <form>
                            <div class="form-group">
                                <select class="form-control">
                                    <option value="en">English</option>
                                    <option value="in">India</option>
                                    <option value="om">Oman</option>
                                    <option value="qa">Qatar</option>
                                    <option value="bh">Bahrain</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <select class="form-control">
                                    <option value="usd">USD - $</option>
                                    <option value="inr">INR - ₹</option>
                                    <option value="jpy">JPY - ¥</option>
                                    <option value="aud">AUD - $</option>
                                </select>
                            </div>
                        </form>
                        <button type="button" class="btn btn-primary modal-select"></button>
                    </div>
                </div>
            </div>

            <!--Header-->
            <Pageheader @toggleMenu="is_adaptive=$event"/>

            <div class="container profile-page-content clearfix">
                <div class="row">
                    <!--Left Side-->
                    <div class="col-xxl-3 col-xl-3 left-side">
                        <div class="left-side-wrapper">
                            <router-link to="/" class="header-logo"><img src="https://res.cloudinary.com/kr-soft/image/upload/v1562141120/logo_zdiyww.png"><span>CheapTicket.in</span></router-link>
                            <div class="account-name">Jordan Hunt</div>
                            <div class="account-links">
                                <a href="#">account settings</a>
                                <a href="#">logout</a>
                            </div>
                            <div class="left-menu">
                                <ul>
                                    <li><router-link to="booking">My Booking</router-link></li>
                                    <li><router-link to="travelers">Travelers</router-link></li>
                                    <li><router-link to="contact">Contact us</router-link></li>
                                    <li><router-link to="faq">FAQ</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!--Right Side-->
                    <div class="col-xxl-9 col-xl-9 col-lg-12 col-md-12 right-side">
                        <!--Row FAQ Block-->
                        <div class="row faq-block">
                            <div class="col">
                                <!--Row FAQ Title-->
                                <div class="row faq-title top-block-title faq-wrapper">
                                    <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 faq-icon"><a href="#"></a></div>
                                    <div class="col-xxl-10 col-xl-10 col-lg-11 col-md-10">
                                        Frequently Asked Questions
                                    </div>
                                </div>
                                <!--Row FAQ Top Block Info-->
                                <div class="row justify-content-end faq-top-block-info faq-wrapper">
                                    <div class="col-xxl-10 col-xl-10 col-lg-11 col-md-12">
                                        <div class="row">
                                            <div class="col-xxl-9 col-xl-12 col-lg-12 col-md-12 faq-top-block-info-text">
                                                CheapTicket.in Online Travel Portal, offers Cheapest International &amp; Domestic Airline Tickets.
                                                FAQ (Frequently Asked Questions), assist and answers most frequented questions by customers on
                                                Flight Bookings, Ticketing Online, Payment, Airlines Dynamic Fares, Fare Change, Re-booking,
                                                Baggage Rules, Cancellations, Refunds, Rules &amp; Regulations, Airlines &amp; our Service Fee’s.
                                            </div>
                                        </div>
                                        <div class="col-xxl-9 col-xl-12 col-lg-12 col-md-12 faq-top-block-info-select">
                                            <label for="type-your-question-here">Type your question here</label>
                                            <input type="text" class="form-control" id="type-your-question-here">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--Row FAQ Block-->
                        <div class="row faq-block">
                            <div class="col">
                                <!--Row FAQ Tabs-->
                                <div class="row justify-content-end faq-tabs faq-wrapper">
                                    <div class="col-xxl-10 col-xl-10 col-lg-11 col-md-12">
                                        <!--FAQ Questions Column 1-->
                                        <div class="faq-questions-column active" id="faq-tab-1">
                                            <div class="faq-answers-block-title"><a href="#">My Account</a></div>
                                            <div class="faq-answers-block-wrapper">
                                                <div class="faq-answers-block">
                                                    <div class="faq-answers-title">Q. Customer’s Account 1?</div>
                                                    <div class="faq-answers-text">
                                                        <strong>A.</strong> On booking of an Airline ticket, you are automatically
                                                        provided with Customer’s Account with Username &amp; Password for viewing bookings,
                                                        Print e-ticket, Check status, help save time with the next booking &amp; also to receive
                                                        our special offers &amp; promotions. Y our Profile &amp; details are “Secured”.
                                                    </div>
                                                </div>
                                                <div class="faq-answers-block">
                                                    <div class="faq-answers-title">Q. Creating an Account?</div>
                                                    <div class="faq-answers-text">
                                                        <strong>A.</strong> An account on home page may be created with User name
                                                        &amp; Password, to facilitate future bookings, &amp; checking your transactions. On your
                                                        making any booking an account is also created with your Name &amp; e-mail id.
                                                    </div>
                                                </div>
                                                <div class="faq-answers-block">
                                                    <div class="faq-answers-title">Q. Reset the Password?</div>
                                                    <div class="faq-answers-text">
                                                        <strong>A.</strong> My Account password can be rest on the home page with User name,
                                                        E-mail id add and click “Forgot Password?
                                                    </div>
                                                </div>
                                                <div class="faq-answers-block">
                                                    <div class="faq-answers-title">Q.View your e-ticket?</div>
                                                    <div class="faq-answers-text">
                                                        <strong>A.</strong> The travel details or e-tickets can be viewed
                                                        with Registered MOB No. , E-mail ID, PNR No. &amp; or Booking ID.
                                                    </div>
                                                </div>
                                                <div class="faq-answers-block">
                                                    <div class="faq-answers-title">Q. Print E-ticket?</div>
                                                    <div class="faq-answers-text">
                                                        <strong>A.</strong> On “My Account” view and Print the
                                                        e-ticket on giving details.
                                                    </div>
                                                </div>
                                                <div class="faq-answers-block">
                                                    <div class="faq-answers-title">Q. Cancellation of bookings?</div>
                                                    <div class="faq-answers-text">
                                                        <strong>A.</strong> To cancel your booking to send an e-mail
                                                        cs@cheapticket.in , from which the booking was made with your Booking reference
                                                        and PNR, followed by a call to +91-120-4887777.
                                                    </div>
                                                </div>
                                                <div class="faq-answers-block">
                                                    <div class="faq-answers-title">Q. Change &amp; Re-schedule?</div>
                                                    <div class="faq-answers-text">
                                                        <strong>A.</strong> To Change &amp; Re-schedule your booking to send an e-mail
                                                        cs@cheapticket.in , from which the booking was made with your Booking reference
                                                        and PNR, followed by a call to +91-120-4887777.
                                                    </div>
                                                </div>
                                                <div class="faq-answers-block">
                                                    <div class="faq-answers-title">Q. Refunds?</div>
                                                    <div class="faq-answers-text">
                                                        <strong>A.</strong> For full or part Refunds, send an e-mail cs@cheapticket.in, from which the
                                                        booking was made with your Booking reference and PNR, followed by a call
                                                        to +91-120-4887777.
                                                    </div>
                                                </div>
                                                <div class="faq-answers-block">
                                                    <div class="faq-answers-title"><strong>Q.</strong> Delete Existing Account?</div>
                                                    <div class="faq-answers-text"><strong>A.</strong> You have the facility to delete your account.</div>
                                                </div>
                                            </div>
                                        </div>

                                        <!--FAQ List Column-->
                                        <div class="faq-list-column">
                                            <ul>
                                                <li data-tab="faq-tab-1" class="active"><a href="#">My Account</a></li>
                                                <li data-tab="faq-tab-2"><a href="#">Online Flight Bookings</a></li>
                                                <li data-tab="faq-tab-3"><a href="#">Dynamic Fares &amp; Fare</a></li>
                                                <li data-tab="faq-tab-4"><a href="#">Changes</a></li>
                                                <li data-tab="faq-tab-5"><a href="#">Fees’s &amp; Charges?</a></li>
                                                <li data-tab="faq-tab-6"><a href="#">Cancellation</a></li>
                                                <li data-tab="faq-tab-7"><a href="#">Re-Schedule</a></li>
                                                <li data-tab="faq-tab-8"><a href="#">Re-booking</a></li>
                                                <li data-tab="faq-tab-9"><a href="#">Refunds</a></li>
                                                <li data-tab="faq-tab-10"><a href="#">Special Service Request</a></li>
                                                <li data-tab="faq-tab-11"><a href="#">Baggage Rules</a></li>
                                                <li data-tab="faq-tab-12"><a href="#">Payment Options</a></li>
                                                <li data-tab="faq-tab-13"><a href="#">Passport &amp; Visa</a></li>
                                                <li data-tab="faq-tab-14"><a href="#">Vaccination</a></li>
                                                <li data-tab="faq-tab-15"><a href="#">Mobile App</a></li>
                                                <li data-tab="faq-tab-16"><a href="#">Customer Care</a></li>
                                                <li data-tab="faq-tab-17"><a href="#">Connecting</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--Row FAQ Block-->
                        <div class="row faq-block">
                            <div class="col">
                                <!--Row FAQ Title-->
                                <div class="row justify-content-end faq-title bottom-block-title faq-wrapper">
                                    <div class="col-xxl-10 col-xl-10 col-lg-11 col-md-12">
                                        Did not find the answer?
                                        <span>Write us on email or phone:</span>
                                    </div>
                                </div>
                                <!--Row FAQ Top Block Info-->
                                <div class="row justify-content-end faq-bottom-block-info faq-wrapper">
                                    <div class="col-xxl-10 col-xl-10 col-lg-11 col-md-12">
                                        <p>Email: <a href="#">cs@cheapticket.in</a></p>
                                        <p>Travel Expert: +91-120-4887777  (24X7)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         <!--Footer-->
        <div class="container footer">
            <div class="row justify-content-end bottom-menu">
                <div class="col-xxl-9 col-xl-9 col-lg-12 col-md-12">
                    <div class="row">
                        <div class="col-xxl-8 xol-xl-8 col-lg-12 col-md-12">
                            <Links/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row after-bottom-menu">
                <div class="col-xxl xol-xl col-lg-6 col-md-6 confirm-copyright">CheapTicket.in, 2017</div>
                <div class="col-xxl xol-xl col-lg-auto col-md-auto confirm-made-with">Made with lodoss tea</div>
            </div>
        </div>
    </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
@import '@/assets/style/faq.scss';
@import '@/assets/style/adaptive-faq.scss';

@media (max-width: 1279px) {
    .left-side{
        display:none !important;
    }
    .right-side{
        display: block !important;
    }
}
// @media (max-width: 1279px){
// .container {
//     max-width: 768px;
//     padding: 0 9px;
// }}

// @media (max-width: 1919px){
// .container {
//     max-width: 1280px;
// }}
// .header {
//     line-height: 100px;
// }
// @media (min-width: 768px){
// .container {
//     max-width: 750px;
// }}
// @media (min-width: 320px){
// .container {
//     max-width: 320px;
// }}
// .container {
//     width: 100%;
//     padding-right: 15px;
//     padding-left: 15px;
//     margin-right: auto;
//     margin-left: auto;
//     max-width: 0;
// }
.slide-enter,
.slide-leave-to {
  transform: scaleY(0);
}

.menu {
  position: absolute;
  transform-origin: top;
  transition: transform .2s ease-in-out;
  overflow: hidden;
}
</style>
