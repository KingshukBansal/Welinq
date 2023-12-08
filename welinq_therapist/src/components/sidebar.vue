<template>
  <div class="sidebar">
    <div class="logo-container">
      <img src="../assets/Logo.png" alt="Logo">
    </div>
    <div class="all-links">
        <router-link class="link" to="/home">
          <img src="../assets/fi-rr-home.png" alt="Home Icon">
          <div class="nav-text">Home</div>
        </router-link>

      <!-- Add more links as needed -->
        <router-link class="link" to="/my-sessions">
          <img src="../assets/Variant3.png" alt="About Icon">
          <div class="nav-text">My Sessions</div>
        </router-link>

        <router-link class="link" to="/therapist">
          <img src="../assets/head-side-thinking.png" alt="Services Icon">
          <div class="nav-text">Therapist</div>
        </router-link>
        <router-link class="link" to="/quizzes">
          <img src="../assets/fi-rr-layout-fluid.png" alt="Services Icon">
          <div class="nav-text">Quizzes</div>
        </router-link>
        <router-link class="link" to="/webinars">
          <img src="../assets/fi-rr-forward.png" alt="Services Icon">
          <div class="nav-text">Webinars</div>
        </router-link>
        <router-link class="link" to="/profile">
          <img src="../assets/fi-rr-laugh.png" alt="Services Icon">
          <div class="nav-text">Profile</div>
        </router-link>
      <!-- Add more links as needed -->
    </div>

    <div class="image-container">
      <img src="../assets/Frame 4254.png" alt="Home Image">
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 1140px;
  flex-shrink: 0;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
  font-family: Poppins;
}

.logo-container {
  display: inline-flex;
  padding: 40px 80px;
  align-items: flex-start;
  border-radius: 20px;
  background: #F4F5FF;
  margin: 20px 20px 0px 20px;
}

.logo-container img {
  width: 125px;
  height: 125px;
}

.all-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  margin: 30px 23px 34px 30px;
}

.link {
  display: flex;
  padding: 5px 30px;
  width: 100%;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #FFF;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  color:#848484
  /* color: #848484;
  transition: background 0.3s ease; Add transition for smooth hover effect */
}

.link:hover {
  background: #868CD1; 
  color: #FFFFFF;/* Change background color on hover */
}
.link:hover img{
    filter: brightness(3);
}

.link img {
  width: 24px;
  height: 24px;
  filter: brightness(1);
  /* filter: brightness(0) saturate(100%); */
}
.nav-text {
  display: flex;
  padding: 10px;
  width: 100%;
  align-items: flex-start;
  gap: 10px;
}

.nav-image {
  display: flex;
  padding: 10px;
  align-items: flex-start;
  gap: 10px;
}

.image-container {
  display: flex;
  justify-content: center;
margin:0px 23px 49px 23px ;}

.image-container img {
  width: 304px;
  height: 318px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #E5E7FF;
}
</style>

