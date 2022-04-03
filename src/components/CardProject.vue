<template>

<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="[image != '' ? image : require('@/assets/icons/default.png')]" class="img-fluid rounded-start" alt="" >
      <img src="@/assets/images/gensler01.jpg" class="img-fluid rounded-end" alt="..."><br>
      <span class="action"> 
        <a href="trainings.html" :class="['btn' + bgName]">Accesar</a>
      </span>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ text }}</p>
        <p class="card-text"><small class="text-muted">{{ lastText }}</small></p>
      </div>
    </div>
  </div>
</div>

<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="[image != '' ? image : require('@/assets/icons/default.png')]" alt="">
      <img src="@/assets/images/gensler01.jpg" class="img-fluid rounded-end" alt="..."><br>
      <span class="action"> 
        <a href="trainings.html" :class="['btn' + bgName]">Accesar</a>
      </span>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ text }}</p>
        <p class="card-text"><small class="text-muted">{{ lastText }}</small></p>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
    name: 'CardProject',
    props: ['title', 'text', 'lastText', 'image', 'bgName']
        
}
</script>