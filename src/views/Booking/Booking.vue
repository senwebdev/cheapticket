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

            <!--Main Content-->
            <div class="container booking-page-content clearfix">
                <div class="row">
                    <!--Left Side-->
                    <Navigation/>
                    <!--Right Side-->
                    <div class="col-xxl-9 col-xl-9 col-lg-12 col-md-12 right-side">
                        <!--Row Booking Block-->
                        <div class="row booking-block">
                            <div class="col">
                                <!--Row Booking Title-->
                                <div class="row booking-title">
                                    <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 booking-user"><a href="#"></a></div>
                                    <div class="col-xxl-10 col-xl-10 col-lg-11 col-md-10">My booking</div>
                                </div>
                                <!--Row Booking Airports #1-->
                                <div class="row justify-content-end booking-airports-wrapper">
                                    <div class="col-xxl-10 col-xl-10 col-lg-11 col-md-12 booking-airports">
                                        <div class="booking-first-airport">
                                            <div class="booking-airport-name">DEL</div>
                                            <div class="booking-airport-date">10:45, 3 NOV</div>
                                            <div class="booking-airport-place">Delhi Indira Gandhi Intl, New Delhi (DEL) Terminal: 3</div>
                                        </div>
                                        <div class="booking-second-airport">
                                            <div class="booking-airport-name">BOM</div>
                                            <div class="booking-airport-date">12:55, 3 NOV</div>
                                            <div class="booking-airport-place">Dubai Intl Arpt, Dubai (DXB) Terminal: 1</div>
                                        </div>
                                        <div class="booking-price">₹ 14,227</div>
                                        <div class="booking-status">Status: <span class="status-progress">In progress</span></div>
                                        <div class="booking-passengers">
                                            Passengers:
                                            <span>Mr. Alan Fleming, </span>
                                            <span>Ms Beth Hart</span>
                                        </div>
                                        <div class="booking-links">
                                            <a href="#">Print ticket</a>
                                            <a href="#">Send to email</a>
                                            <a href="#">Download pdf</a>
                                        </div>
                                        <!--Booking Toggle-->
                                        <div class="booking-toggle">
                                            <div class="toggle-flight-name"><span></span>Air India, AI-471, AI-644</div>
                                            <div class="toggle-passengers-wrapper">
                                                <!--Toggle Passengers Block-->
                                                <div class="toggle-passengers-block">
                                                    <div class="toggle-passengers-title">Passengers:</div>
                                                    <div class="toggle-passengers-tickets title">
                                                        <div class="wrapper-for-toggle-ticket">
                                                            <div class="toggle-ticket title">CRS PNR</div>
                                                        </div>
                                                        <div class="wrapper-for-toggle-ticket">
                                                            <div class="toggle-ticket title">Air PNR</div>
                                                        </div>
                                                        <div class="wrapper-for-toggle-ticket">
                                                            <div class="toggle-ticket title">Ticket No.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--Toggle Passengers Block-->
                                                <div class="toggle-passengers-block">
                                                    <div class="toggle-passengers-info">
                                                        <div class="custom-control custom-checkbox booking-checkbox adaptive">
                                                            <input type="checkbox" class="custom-control-input" id="booking-checkbox-1-adaptive">
                                                            <label for="booking-checkbox-1-adaptive" class="custom-control-label"></label>
                                                        </div>
                                                        <div class="toggle-passenger-name">Mr. Ernest Quinn</div>
                                                        <div class="toggle-passenger-child">Adult</div>
                                                        <div class="toggle-passenger-status">Confirmed</div>
                                                    </div>
                                                    <div class="toggle-passengers-tickets">
                                                        <div class="wrapper-for-toggle-ticket">
                                                            <div class="toggle-ticket title">CRS PNR</div>
                                                            <div class="toggle-ticket">B9B1PT</div>
                                                        </div>
                                                        <div class="wrapper-for-toggle-ticket">
                                                            <div class="toggle-ticket title">Air PNR</div>
                                                            <div class="toggle-ticket">B9B1PT</div>
                                                        </div>
                                                        <div class="wrapper-for-toggle-ticket">
                                                            <div class="toggle-ticket title">Ticket No.</div>
                                                            <div class="toggle-ticket">B9B1PT</div>
                                                        </div>
                                                    </div>
                                                    <div class="custom-control custom-checkbox booking-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="booking-checkbox-1">
                                                        <label for="booking-checkbox-1" class="custom-control-label"></label>
                                                    </div>
                                                </div>
                                                <!--Toggle Passengers Block-->
                                                <div class="toggle-passengers-block">
                                                    <div class="toggle-passengers-info">
                                                        <div class="custom-control custom-checkbox booking-checkbox adaptive">
                                                            <input type="checkbox" class="custom-control-input" id="booking-checkbox-2-adaptive">
                                                            <label for="booking-checkbox-2-adaptive" class="custom-control-label"></label>
                                                        </div>
                                                        <div class="toggle-passenger-name">Ms. Beth Hart</div>
                                                        <div class="toggle-passenger-child">Adult</div>
                                                        <div class="toggle-passenger-status">Confirmed</div>
                                                    </div>
                                                    <div class="toggle-passengers-tickets">
                                                        <div class="wrapper-for-toggle-ticket">
                                                            <div class="toggle-ticket title">CRS PNR</div>
                                                            <div class="toggle-ticket">B7B2CR</div>
                                                        </div>
                                                        <div class="wrapper-for-toggle-ticket">
                                                            <div class="toggle-ticket title">Air PNR</div>
                                                            <div class="toggle-ticket">B7B2CR</div>
                                                        </div>
                                                        <div class="wrapper-for-toggle-ticket">
                                                            <div class="toggle-ticket title">Ticket No.</div>
                                                            <div class="toggle-ticket">B7B2CR</div>
                                                        </div>
                                                    </div>
                                                    <div class="custom-control custom-checkbox booking-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="booking-checkbox-2">
                                                        <label for="booking-checkbox-2" class="custom-control-label"></label>
                                                    </div>
                                                </div>
                                                <!--Toggle Passengers Block-->
                                                <div class="toggle-passengers-block">
                                                    <div class="toggle-passengers-info buttons">
                                                        <button class="btn change">Change / reshedule</button>
                                                        <button class="btn cancel">Cancel</button>
                                                    </div>
                                                    <div class="toggle-passengers-tickets buttons">
                                                        <div class="wrapper-for-toggle-ticket">
                                                            <a href="#" class="toggle-ticket link">Print ticket</a>
                                                        </div>
                                                        <div class="wrapper-for-toggle-ticket">
                                                            <a href="#" class="toggle-ticket link">Send to email</a>
                                                        </div>
                                                        <div class="wrapper-for-toggle-ticket">
                                                            <a href="#" class="toggle-ticket link">Download pdf</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--Toggle Passengers Block-->
                                                <div class="toggle-passengers-block">
                                                    <div id="accordion-booking-1">
                                                        <div class="card">
                                                            <div class="card-header" id="heading-collapse-booking-1">
                                                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#booking-collapse-1" aria-expanded="true" aria-controls="booking-collapse-1">
                                                                    Terms and conditions
                                                                </button>
                                                            </div>
                                                            <div id="booking-collapse-1" class="collapse" data-parent="#accordion-booking-1">
                                                                <div class="card-body">
                                                                    <div class="disclaimer">
                                                                        Disclaimer: CheapTicket is not liable for any deficiency in service by Airline or Service providers.
                                                                    </div>
                                                                    <ul class="terms-and-conditions first">
                                                                        <li>All flight timings shown are local times;</li>
                                                                        <li>Use <strong>Ref No.</strong> for communication with us;</li>
                                                                        <li>Use <strong>Airline PNR</strong> for contacting the Airlines;</li>
                                                                        <li>Carry a print-out of e-ticket for check-in;</li>
                                                                        <li>In case of no-show, tickets are non-refundable;</li>
                                                                        <li>Ensure your passport is valid for more than 6 months;</li>
                                                                        <li>Please check Transit &amp; Destination Visa Requirement;</li>
                                                                        <li><span></span>
                                                                            All payments are charged in INR. If any other currency
                                                                            has been chosen the price in that currency is only indicate;
                                                                        </li>
                                                                    </ul>
                                                                    <ul class="terms-and-conditions second">
                                                                        <li>For cancellation, airline charges &amp; ser. fee apply;</li>
                                                                        <li>The INR price is the final price;</li>
                                                                        <li>Carry a photo ID/ Passport for check-in;</li>
                                                                        <li>Meals, Seat &amp; Special Requests are not guaranteed;</li>
                                                                        <li>Present Frequent Flier Card at check-in;</li>
                                                                        <li>Carriage is subject to Airlines Terms &amp; Conditions;</li>
                                                                        <li>Ensure passenger names are correct, name change is not permitted;</li>
                                                                        <li>For any change Airline charges, difference of fare &amp; ser. fee apply;</li>
                                                                        <li>You might be asked to provide card copy &amp; ID proof of card holder.</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" class="booking-flight-details">Flight details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--Row Booking Block-->
                        <div class="row booking-block">
                            <div class="col">
                                <!--Row Booking Title-->
                                <div class="row booking-title previous-trips">
                                    <div class="col-xxl-2 col-xl-2 col-lg-1 col-md"></div>
                                    <div class="col-xxl-10 col-xl-10 col-lg-11 col-md-12">Previous Trips</div>
                                </div>
                                <!--Row Previous Trips #1-->
                                <div class="row justify-content-end booking-airports-wrapper">
                                    <div class="col-xxl-10 col-xl-10 col-lg-11 col-md-12 booking-airports previous-trips">
                                        <div class="booking-first-airport">
                                            <div class="booking-airport-name">DEL</div>
                                            <div class="booking-airport-date">10:45, 3 NOV</div>
                                            <div class="booking-airport-place">Delhi Indira Gandhi Intl, New Delhi (DEL) Terminal: 3</div>
                                        </div>
                                        <div class="booking-second-airport">
                                            <div class="booking-airport-name">BOM</div>
                                            <div class="booking-airport-date">12:55, 3 NOV</div>
                                            <div class="booking-airport-place">Dubai Intl Arpt, Dubai (DXB) Terminal: 1</div>
                                        </div>
                                        <div class="booking-price">₹ 14,227</div>
                                        <div class="booking-status">Status: <span>Flight</span></div>
                                        <div class="booking-passengers">
                                            Passengers:
                                            <span>Mr. Alan Fleming, </span>
                                            <span>Ms Beth Hart</span>
                                        </div>
                                        <div class="booking-flight-details">Flight details</div>
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

<style lang="scss" scoped >
@import '@/assets/style/adaptive-booking-page.scss';
.container {
    width: 100% ;
    padding-right: 15px !important;
    padding-left: 15px !important;
    margin-right: auto !important;
    margin-left: auto !important;
    max-width: 0 !important;
}
@media (max-width: 1279px){
.container {
    max-width: 768px !important;
    padding: 0 9px !important;
}}
@media (max-width: 1920px){
.container {
    max-width: 1920px !important;
}}
@media (max-width: 767px){
.container {
    max-width: 320px !important;
    padding: 0 8px !important;
}}
@media (min-width: 320px){
.container {
    max-width: 320px;
}}
@media (max-width: 1279px) {
    .left-side{
        display:none !important;
    }
    .right-side{
        display: block !important;
    }
}
.left-side-wrapper .header-logo span {
    display: inline-flex;
}

.footer{
    background: none !important;
}
.footer ul {
    margin: 0;
    line-height: 0;
    padding: 0;
}
.footer li a{
    color: black !important;
}
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
