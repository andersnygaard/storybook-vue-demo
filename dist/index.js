import MyButton from '../components/button/MyButton';
import PageCard from '../components/pagecard/PageCard';
export default {
    install(Vue, options) {
     // Let's register our component globally
     // https://vuejs.org/v2/guide/components-registration.html
     Vue.component("my-button", MyButton);
     Vue.component("page-card", PageCard);
    }
   };
   