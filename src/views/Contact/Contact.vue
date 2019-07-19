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
                            <router-link to="#" class="header-logo"><img src="https://res.cloudinary.com/kr-soft/image/upload/v1562141120/logo_zdiyww.png"><span>CheapTicket.in</span></router-link>
                            <div class="account-name">Jordan Hunt</div>
                            <div class="account-links">
                                <router-link to="/accountsettings">account settings</router-link>
                                <router-link to="/logout">logout</router-link>
                            </div>
                            <div class="left-menu">
                                <ul>
                                    <li><router-link to="/booking">My Booking</router-link></li>
                                    <li><router-link to="/travelers">Travelers</router-link></li>
                                    <li><router-link to="/contact">Contact us</router-link></li>
                                    <li><router-link to="/faq">FAQ</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!--Right Side-->
                    <div class="col-xxl-9 col-xl-9 col-lg-12 col-md-12 right-side">
                        <!--Row Contact Us Adaptive Title-->
                        <div class="row contact-us-adaptive-title">
                            <div class="col-xxl col-xl col-lg-1 col-md-2 contact-icon"><a href="#"></a></div>
                            <div class="col-xxl col-xl col-lg-11 col-md-10">Contact us</div>
                        </div>
                        <!--Row Contact Us-->
                        <div class="row contact-us">
                            <div class="col-xxl-2 col-xl-2 col-lg-1 col-md contact-icon"><a href="#"></a></div>
                            <div class="col-xxl-3 col-xl-10 col-lg-11 col-md-12 contact-us-left">
                                <div class="contact-us-left-title">Contact us</div>
                                <div class="contact-us-left-text">
                                    <div class="contact-us-left-text-block">
                                        <p>Airtickets India P. LTD</p>
                                        <p>C-101 Sector - 2 Noida 201301 UP</p>
                                    </div>
                                    <div class="contact-us-left-text-block">
                                        <p>Email: <a href="#">cs@cheapticket.in</a></p>
                                        <p>Travel Expert: +91-120-4887777  (24X7)</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-7 col-xl-12 col-lg-12 col-md-12 contact-us-right">
                                <div class="contact-us-map">
                                    <img src="https://res.cloudinary.com/kr-soft/image/upload/v1562141116/contact_map_z1adnc.png">
                                </div>
                            </div>
                        </div>
                        <!--Row Contact Support-->
                        <div class="row contact-support">
                            <div class="col-xxl-2 col-xl-2 col-lg-1 col-md"><a href="#"></a></div>
                            <div class="col-xxl-8 col-xl-9 col-lg-10 col-md-12">
                                <div class="contact-support-title">Support</div>
                                <!--Contact Support Select-->
                                <div class="contact-support-select">
                                    <label for="contact-support-select">Submit Requestion</label>
                                    <select class="form-control" id="contact-support-select">
                                        <option value="contact-support-select-1">Flight Booking</option>
                                        <option value="contact-support-select-2">Flight Booking</option>
                                        <option value="contact-support-select-3">Flight Booking</option>
                                        <option value="contact-support-select-4">Flight Booking</option>
                                        <option value="contact-support-select-5">Flight Booking</option>
                                    </select>
                                    <div class="submit-requestion-info">
                                        Passengers holding our E-tickets &amp; require A Copy of the E-ticket, Change Bookings, Cancellation,
                                        Refunds, Schedule change &amp; other Services, please provide the details below, to enable us to
                                        assist you.
                                    </div>
                                </div>
                                <!--Contact Support Form-->
                                <form>
                                    <div class="form-row">
                                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 form-group">
                                            <label for="name-support" class="form-label">Name*</label>
                                            <input type="text" class="form-control" id="name-support" placeholder="Name" required="">
                                        </div>
                                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 form-group">
                                            <label for="email-support" class="form-label">Email*</label>
                                            <input type="email" class="form-control" id="email-support" placeholder="Email" required="">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 form-group">
                                            <label for="mobile-number-support" class="form-label">Mobile Number*</label>
                                            <input type="tel" class="form-control" id="mobile-number-support" required="">
                                        </div>
                                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 form-group">
                                            <label for="country-support">Country*</label>
                                            <select class="form-control" id="country-support" required="">
                                                <option value="">Country</option>
                                                <option value="en">England</option>
                                                <option value="in">India</option>
                                                <option value="om">Oman</option>
                                                <option value="qa">Qatar</option>
                                                <option value="bh">Bahrain</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 form-group">
                                            <label for="ref-no-support" class="form-label">Ref. No.*</label>
                                            <input type="text" class="form-control" id="ref-no-support" placeholder="Air Cart Number or Ticket Number" required="">
                                        </div>
                                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 form-group">
                                            <label for="pnr-no-support" class="form-label">PNR No.</label>
                                            <input type="text" class="form-control" id="pnr-no-support" placeholder="PNR No.">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 form-group">
                                            <label for="journey-type-support">Journey Type*</label>
                                            <select class="form-control" id="journey-type-support" required="">
                                                <option value="">Select Journey Type</option>
                                                <option value="journey-type-support-1">Journey Type 1</option>
                                                <option value="journey-type-support-2">Journey Type 2</option>
                                                <option value="journey-type-support-3">Journey Type 3</option>
                                                <option value="journey-type-support-4">Journey Type 4</option>
                                                <option value="journey-type-support-5">Journey Type 5</option>
                                            </select>
                                        </div>
                                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 form-group">
                                            <label for="subject-support">Subject*</label>
                                            <select class="form-control" id="subject-support" required="">
                                                <option value="">Select Subject</option>
                                                <option value="subject-support-1">Subject 1</option>
                                                <option value="subject-support-2">Subject 2</option>
                                                <option value="subject-support-3">Subject 3</option>
                                                <option value="subject-support-4">Subject 4</option>
                                                <option value="subject-support-5">Subject 5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 form-group">
                                            <label for="mode-of-payment-support">Mode Of Payment * </label>
                                            <select class="form-control" id="mode-of-payment-support" required="">
                                                <option value="">Select Payment Type</option>
                                                <option value="mode-of-payment-support-1">Payment Type 1</option>
                                                <option value="mode-of-payment-support-2">Payment Type 2</option>
                                                <option value="mode-of-payment-support-3">Payment Type 3</option>
                                                <option value="mode-of-payment-support-4">Payment Type 4</option>
                                                <option value="mode-of-payment-support-5">Payment Type 5</option>
                                            </select>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 form-group">
                                            <label class="form-label">Upload File</label>
                                            <label for="upload-file-support" class="custom-file-label form-control">Choose file</label>
                                            <input type="file" class="custom-file-input form-control" id="upload-file-support">
                                        </div>
                                        <div class="col-xxl-2 align-self-end col-xl-2 col-lg-2 col-md-12 form-group">
                                            <a href="#" class="btn btn-primary upload-file-button">Upload</a>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-xxl col-xl col-lg col-md form-group">
                                            <label for="services-support" class="form-label">Services</label>
                                            <textarea type="text" class="form-control" id="services-support" rows="4" placeholder="Give Details of your existing bookings "></textarea>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-xxl col-xl col-lg col-md form-group">
                                        <ul class="support-form-info">
                                            <li>Re-bookings, Changes or Cancellation possible only 24 hours before departure time.</li>
                                            <li>For Services within 24 hours of departure, send e-mail &amp; follow-up with our Call Center 24X7.</li>
                                            <li>Airline Fees, &amp; Service charges apply</li>
                                        </ul>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-xxl-3 col-xl-4 col-lg-5 col-md-12">
                                            <button type="submit" class="btn btn-primary submit-query">Submit Query</button>
                                        </div>
                                        <div class="col-xxl-3 col-xl-4 col-lg-5 col-md-12 fill-in-required">
                                            *Please fill in all required fields
                                        </div>
                                    </div>
                                </form>
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
@import '@/assets/style/contact-us.scss';
@import '@/assets/style/adaptive-contact-us.scss';

@media (max-width: 1279px) {
    .left-side{
        display:none !important;
    }
    .right-side{
        display: block !important;
    }
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
