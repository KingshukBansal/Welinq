<template>
  <div class="TopBar">
    <!-- <div v-if="loading" class="loading">Loading...</div> -->
    <div class="heading">Therapists</div>
    <div class="utility">

    <div class="utility-search">
      <button class="settings"><img src="../assets/Group.svg" /></button>
      <div class="search-bar">
        <div class="searching">

        <div class="search-icon"><img src="../assets/fi-rr-search.svg" alt="" /></div>
        <input type="text" placeholder="Search for Session" />
        </div>
      </div>
    </div>
    <div class="utility-profile">
      <div class="notification"><img src="../assets/Group 165.svg" /></div>
      <div class="profile"><img src="../assets/Ellipse 5.png" /></div>
    </div>
    </div>
  </div>
</template>
  
<script>
// import TherapistCard from './TherapistCard.vue'
export default {
  components: {
    // TherapistCard
  },
  props: {},
  name: 'TopBar'
}
</script>

<style scoped>
.TopBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}

.heading {
  width: 362px;
  flex-shrink: 0;
  color: #292c30;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}


.utility{
    display: flex;
width: 1303px;
justify-content: space-between;
align-items: center;
}
.utility-search{
display: flex;
align-items: flex-start;
gap: 20px;
}

.utility-profile{
    display: flex;
align-items: flex-start;
gap: 34px;
}
  .search-bar {
display: flex;
padding: 17px 241px 17px 50px;
align-items: center;
border-radius: 50px;
background: #FFF;  }

  .search-icon {
    margin-right: 10px;
  }
.searching{
    display: flex;
align-items: center;
gap: 25px;
}
.searching>img{
    width: 24px;
    height: 24px;
}
.searching>input{
    display: flex;
width: 312px;
height: 26px;
flex-direction: column;
justify-content: center;
color: rgba(41, 44, 48, 0.50);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
border: none;
}

.settings {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  overflow: hidden;
  border: none; /* Remove border */
  cursor: pointer; /* Add cursor pointer for better UX */
  transition: background-color 0.3s ease;

}

.settings:hover {
  background-color: #868cd1;
}
.settings:hover img {
  filter: brightness(0) invert(1);
}

.settings img {
  display: flex;
  width: 24px;
  height: 24px;
  padding: 0px 0.001px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  transition: filter 0.3s ease;
}

.notification {
    width: 50px;
    height: 50px;
  background-color: #868cd1;
  border-radius: 50%;
}

.notification img {
    margin: 0px;
  width: 50px;
  height: 50px;
}

.profile {
    width: 50px;
height: 50px;
  border-radius: 50%;
  
}
</style>

  