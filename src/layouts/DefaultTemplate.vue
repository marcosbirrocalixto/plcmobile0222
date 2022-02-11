<template>
    <div>        
        <header-component></header-component>

        <section>
            <router-view></router-view>
        </section>

        <footer-component></footer-component>
    </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
    name: 'DefaultTemplate',
    components: {
        HeaderComponent,
        FooterComponent 
    },

}
</script>


<style scoped>
@import url('../assets/css/plcmobile.css');
@import url('../assets/css/reset.css');

</style>