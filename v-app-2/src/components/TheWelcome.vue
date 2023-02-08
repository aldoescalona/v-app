<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import Paginate from '@/components/bypass/Paginate.vue'
import Loading from 'vue-loading-overlay';
// import { useLoading } from 'vue-loading-overlay'
import Vue, { inject, onMounted, ref, reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required, minLength } from '@vuelidate/validators'

import DatePicker from 'vue2-datepicker';


const swal = inject("$swal");
console.log(swal)

const isLoading = ref(false)
const fullPage = ref(true)

onMounted(async () => {
  // console.log(useLoading)

  // console.log(useVuelidate)
})

const alertDisplayInject = () => {

  swal.fire({
    icon: "success",
    title: "",
    confirmButtonColor: '#d33',
    text: "Se cambio el estatus correctamente Inject",
  });

}

const alertDisplayVue = () => {

  Vue.swal({
    icon: "success",
    title: "",
    confirmButtonColor: '#d33',
    text: "Se cambio el estatus correctamente Vue",
  })

}

const clickCallback = () => {

}

const doAjaxTag = () => {

  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}

const doAjaxVue = () => {

  let loader = Vue.$loading.show()

  setTimeout(() => {
    loader.hide()
  }, 2000)

}

const onCancel = () => {
  console.log('User cancelled the loader.')
}

const name = ref('')
const fieldLength = ref(5)

const rules = {
  name: { minLength: minLength(fieldLength) }
}
  
const v$ = useVuelidate(rules, { name })


const date = ref()


const disabledBeforeTodayAndAfterAWeek = (date) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      // return date < today || date > new Date(today.getTime() + 7 * 24 * 3600 * 1000);
      return date > today;
    }

</script>

<template>
  <div>


    <h3>Test</h3>
    <button class="btn btn-primary" v-on:click="alertDisplayInject">SWAL inject</button>
    <button class="btn btn-secondary" v-on:click="alertDisplayVue">SWAL Vue</button>
    <br />
    <br />
    <paginate :page-count="20" :page-range="3" :margin-pages="2" :click-handler="clickCallback" :prev-text="'Prev'"
      :next-text="'Next'" :container-class="'pagination'" :page-class="'page-item'">
    </paginate>


    <div class="vld-parent">
      <loading :active.sync="isLoading" :can-cancel="true" :on-cancel="onCancel" :is-full-page="fullPage" loader="dots">
      </loading>

      <label style="display: none;"><input type="checkbox" v-model="fullPage">Full page?</label>

      <button class="btn btn-primary" @click.prevent="doAjaxTag">Loading Tag</button>
      <button class="btn btn-secondary" @click.prevent="doAjaxVue">Loading Vue</button>
    </div>

    <br/>
    <br/>
    <pre>
      {{ v$.name.minLength }}
    </pre>
    <div>
      <label>Name Length: <input type="text" v-model="fieldLength"></label>
      <label>Name: <input type="text" v-model="v$.name.$model"></label>
    </div>    

    <br/>
    <div>
      <pre>{{ date }}</pre>
      <date-picker v-model="date" 
      :disabled-date="disabledBeforeTodayAndAfterAWeek" 
      format="DD/MM/YYYY"></date-picker>
    </div>

    <font-awesome-icon icon="far fa-user"/>
    <font-awesome-icon icon="fa-plus"/>
    
    <i class="far fa-search"></i>

    <i class="far fa-plus"></i>

  <!-- regular style -->
  <i class="far fa-user"></i>

  <!-- light style -->
  <i class="fal fa-user"></i>

  <!-- duotone style -->
  <i class="fad fa-user"></i>

  <!--brand icon-->
  <i class="fab fa-github-square"></i>


    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Documentation</template>

      Vue’s
      <a target="_blank" href="https://v2.vuejs.org/">official documentation</a>
      provides you with all information you need to get started.
    </WelcomeItem>

    
  </div>
</template>
