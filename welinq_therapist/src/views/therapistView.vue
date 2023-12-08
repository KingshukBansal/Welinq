<script setup>
import TherapistCard from '../components/therapistCard.vue';
import Footer from '../components/footer.vue';
import Sidebar from '../components/sidebar.vue';
import Profilebar from '../components/profileBar.vue';
import Topview from '../components/topbar.vue';
import Tags from '../components/tags.vue';
import { ref } from 'vue';

// Use ref to store therapists data
const therapists = ref([]);

// Fetch therapist data from the API
fetchTherapistsData();
const selectedTherapist = ref(null);

  const handleProfileBarClick = (therapist) => {
    // Update the selected therapist
    selectedTherapist.value = therapist;
  };

async function fetchTherapistsData() {
  try {
    const response = await fetch('https://api-container-ph3rhhnyiq-uc.a.run.app/therapists');
    const data = await response.json();
    
    // Update the ref value
    therapists.value = data;
   //  selectedTherapist.value=data[0];
       if (!selectedTherapist.value) {
      selectedTherapist.value = data[0];
    }
  } catch (error) {
    console.error(error);
  }
}
</script>


<template>
 <div class="therapist">
   <div class="upper">
<div class="side">
   <Sidebar/>
   <div class="nav">
      <Topview/>
      <div class="therapist-container">
         <div class="therapist-card-container">
            <div class="tags">
               <button class="tags-options"> <img src="../assets/fi-sr-filter.png" alt="">Tags</button>
               <Tags  :tag="depression" />
            </div>
            <div class="cards">
 <TherapistCard v-for="therapist in therapists" :key="therapist.id" :therapist="therapist" @profilebar-click="handleProfileBarClick" />
        </div>
         </div>
         
         <Profilebar :selectedTherapist="selectedTherapist"/>
      </div>

   </div>
</div>
   </div>
   <div class="lower">
      <Footer/>
   </div>
 </div>
</template>

<style>
.therapist{
   margin: 0px;
 
   width: 100%;
   height: 100%;
/* border: 5px solid #868CD1; */
display: flex;
flex-direction: column;
background: #F4F5FF;}
.upper{
   width: 100%;
   padding: 0px;
}
.side {
   display: flex;
   width: 100%;
   margin: 0px;
   padding: 0px;
   
}
.therapist-container{
   /* width: 80%; */
   display: flex;
   justify-content: space-between;
   margin-top: 30px;


}
.nav {
   margin: 30px 40px 0px 35px ;
width: 75vw;
display: flex;
   flex-direction: column;
   justify-content: flex-start;
   /* flex: 1; */
   

}
.lower{
   margin-bottom: 0px;
}
.therapist-card-container{
   display: flex;
   flex-direction: column;
   gap:20px
}
.tags {
   display: flex;
   gap: 10px;
   margin-left: 20px;
}
.tags-options{
   display: flex;
padding: 10px;
justify-content: center;
align-items: center;
gap: 5px;
border: 0px;
border-radius: 5px;
background: #292C30;
color: #FFF;
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 131%; /* 15.72px */
}
.cards {
  width: 50vw;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

</style>
