import Vue from 'vue'
import { play } from 'vue-play'

// I just want to demonstrate a button built with Bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

// Some CSS for overriding default Boostrap style
import './override.css'

// Our component which is built with Bootstrap
import Button from '../components/Button.vue'

// Add various scenarios
play(Button)
  .add('with text', {
    template: `<my-button text="With Text" />`
  })
  .add('with emoji', {
    template: `<my-button text="Cool Emoji 😎" />`
  })