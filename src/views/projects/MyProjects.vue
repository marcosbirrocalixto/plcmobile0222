<template>
    
    <div class="pageTitle">
        <span class="title">MEUS PROJETOS</span>
    </div><p></p>

    <div>
        <card-project
            :title="'Projeto 1'"
            :text="'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'"
            :lastText="'Last updated 3 mins ago'"
            :image="'@/assets/images/gensler01.jpg'"
            :bgname="'bg-vue'">
        </card-project>
    </div>

</template>

<script>
import CardProject from '@/components/CardProject.vue'

export default {
    name: 'MyProjects',
    components:{
        CardProject        
    }
}
</script>