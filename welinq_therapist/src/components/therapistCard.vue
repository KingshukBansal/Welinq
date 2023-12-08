<template>
  <div id="card">
    <img :src="therapist.photoUrl" alt="">
    <div class="hourly-rate">${{ therapist.hourlyRate }}</div>
    <div class="name-field">
      <div class="therapist-name">{{ therapist.firstName || therapist.nickname }}</div>
      <div class="verified"><img src="../assets/image40.png" alt=""></div>
    </div>
    
    <div class="active-time">Last active {{ calculateLastActive(therapist.status) }}</div>

    <div class="info">
      <div class="experience">
        <img src="../assets/image41.png" alt="">
        <span class="experience-text">{{ formatText(therapist.expertExperience, 'yrs of experience') }}</span>
      </div>
      <div class="problems">
        <img src="../assets/image43.png" alt="">
        <span class="problems-text">{{ formatText(therapist.expertFocusArea) }}</span>
      </div>
      <div class="specialist">
        <img src="../assets/image42.png" alt="">
        <span class="specialist-text">{{ formatText(therapist.accreditation) }}</span>
      </div>
    </div>
    <div class="actions">
      <button class="book-session" @click="handleButtonClick">Book session</button>
      <div class="chat"><img src="../assets/image39.png" alt=""></div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const props = defineProps(['therapist']);
  const therapistData = ref(props);
  const emit = defineEmits();

  function handleButtonClick() {
    emit('profilebar-click', props.therapist);
  }

  function calculateLastActive(status) {
    return '10 minutes';
  }

  function formatText(data, suffix = '') {
    const text = Array.isArray(data) ? data.join(', ') : data;
    const maxLength = 25;
    return text.length > maxLength
      ? `${text.substring(0, maxLength)} ...${suffix}`
      : `${text}${suffix}`;
  }
</script>


<style scoped>
#card{
  margin: 0px;
  padding: 0px;
  padding-bottom: 13px;
}
.verified {
  margin-left: 7px;
}
.active-time {
  color: #396CE8;
}
.hourly-rate {
  color: #EB7856;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
}
.therapist-name {
  font-weight: 600;
  size: 18px;
  line-height: 24px;
}
.info img {
  margin-right: 10px;
}

.info {
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  color: #292220;
  margin-left: 16px; /* Add left margin */
}
#card {
  font-family: poppins;
  color: #292C30;
  background-color: #FFFFFF;
  height: 316px;
  width: 267px;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0;
  padding: 0;
}
.book-session {
  background-color: #E5E7FF;
  
  width: 162px;
  height: 48px;
  border-radius: 10px;
  padding: 12px 30px;
  border: none;
  transition: background-color 0.3s ease;
  cursor: pointer;
}
.book-session:hover {
  background-color: #868CD1;
}
#card > img {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin: 14px auto;
}
.actions {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 13px;
  justify-content: space-around;
}
.chat {
  background-color: #CCF4DA;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 14px;
}
.chat:hover{
  background-color: #84f7ac;
}
.name-field {
  display: flex;
}
</style>
