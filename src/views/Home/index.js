
import Homeheader from '../../components/Homeheader';
import Adaptivemenu from '../../components/Adaptivemenu';
import Selecttrip from '../../components/Selecttrip';
import Quicktools from '../../components/Quicktools';
import Recentsearches from '../../components/Recentsearches';
import Links from '../../components/Links';
import Footer from '../../components/Footer';

const Home = {
  components: {
    Homeheader,
    Adaptivemenu,
    Selecttrip,
    Recentsearches,
    Quicktools,
    Links,
    Footer,
  },
  data() {
    return {
      is_adaptive: false,
      background_img: '',
      text_color: '',
      marginTitle: '70px 0 100px 100px',
      padding: '',
      marginLeft: '100px',
      is_multi: false,
    };
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll);
  },
  created() {
    window.addEventListener('scroll', this.onScroll);
    const state = this.$store.state.dateState;

    if ( state === 'morning' ) {
      this.background_img = process.env.VUE_APP_MORNING_BACK;
      this.marginTitle = '70px 0 100px 0px';
      this.marginLeft = '0';
      this.padding = '25px 15px 25px';
    } else if ( state === 'noon' ) {
      this.background_img = process.env.VUE_APP_NOON_BACK;
    } else {
      this.background_img = process.env.VUE_APP_NIGHT_BACK;
      this.text_color = 'white';
    }
  },
  methods: {
    onScroll(e) {
      const scrolled = window.scrollY;
      this.$store.state.showDropdown = (scrolled > 270) ? true : false;
    },
    setPadding(c) {
      if (c) {
        return 'padding: 25px 15px';
      }
    },
    updateOption(e) {
      this.is_multi = e;
      if (this.is_multi === 'option3') {
        this.padding = '0 15px';
      } else {
        this.padding = '120px 15px 42px';
      }
    }
  },
};

export default Home;
