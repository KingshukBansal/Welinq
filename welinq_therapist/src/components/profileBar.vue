<template>
  <div class="view-profile-container">
    <div class="profile">
      <img :src="selectedTherapist ? selectedTherapist.photoUrl : ''" />
      <div class="info">
        <div class="details">
          <div class="name">{{ selectedTherapist ? selectedTherapist.firstName || selectedTherapist.nickname : '' }}</div>
          <div class="designation">{{ selectedTherapist ? formatText(selectedTherapist.expertFocusArea) : '' }}</div>
        </div>
        <button class="view-profile">View Profile</button>
      </div>
    </div>

    <form action="post">
      <div class="calender">
        <img src="../assets/Calendar.png" alt="">
      </div>
      <div class="session">
        <div class="period">Session Period</div>
        <div class="time">60 min</div>
        <div class="note"><span>Note:</span>*Session period will be of 60min</div>
      </div>
      <div class="time-select">
        <div class="time">
          <div class="period">Select Time</div>
          <div class="time-format">
            <button @click.prevent="selectTimePeriod('am')" :class="{ 'selected': selectedTimePeriod === 'am' }">AM</button>
            <button @click.prevent="selectTimePeriod('pm')" :class="{ 'selected': selectedTimePeriod === 'pm' }">PM</button>
          </div>
          <div class="time-options">
            <button v-for="option in timeOptions" :key="option" @click.prevent="selectTime(option)" :class="{ 'selected': selectedTime === option }">
              {{ option }}
            </button>
          </div>
        </div>
      </div>
      <button class="book-session">Book Session</button>
    </form>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'ViewProfile',
  props: {
    selectedTherapist: Object,
  },
  setup(props) {
    const timeOptions = ref([
      '10:00',
      '10:30',
      '11:00',
      '11:30',
      '12:00',
      '12:30',
    ]);
    const selectedTimePeriod = ref('am'); // Initialize with 'am'
    const selectedTime=ref('10:00');
    const selectTimePeriod = (time) => {
      console.log(time);
      selectedTimePeriod.value = time;
    };
    const selectTime=(option)=>{
      selectedTime.value=option;
    }

    const formatText = (data, suffix = '') => {
      const text = Array.isArray(data) ? data.join(', ') : data;
      return text;
    };

    // Use a ref to store the selected therapist
    const selectedTherapist = ref(props.selectedTherapist);

    // Watch for changes in selectedTherapist prop
    watch(() => props.selectedTherapist, (newVal) => {
      selectedTherapist.value = newVal;
    });

    return { selectTimePeriod,selectedTime, timeOptions, selectTime, selectedTherapist, formatText };
  },
};
</script>

<style scoped>
.view-profile-container {
  background-color: white;
  border-radius: 10px;
  width: 427px;
  height: 95%;
  flex-shrink: 0;
  font-family: 'Poppins';
  padding-bottom: 80px;
}

.profile {
  display: flex;
  padding: 10px;
  margin: 20px 20px 0px 10px;
  align-items: flex-start;
  gap: 20px;
}

.profile img {
  height: 100px;
  width: 100px;
  border-radius: 100%;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 257px;
}

.name {
  color: #292C30;
  font-family: 'Poppins';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.designation {
  color: #292C30;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.info > button {
  display: flex;
  padding: 10px 20px;
  align-items: flex-start;
  color: #FFF;
  background-color: #868CD1;
  text-align: center;
  font-family: 'Poppins';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.25px;
  background-color: #868CD1;
  border-radius: 20px;
  border: none;
  cursor: pointer;
}

.view-profile {
  background-color: #868CD1;
}

.calender {
  display: flex;
  margin: 26px 19px 0px 20px;
  border-radius: 10px;
  border: 1px solid #C0C5FC;
}

.session {
  width: 91%;
  margin: 20px 20px 0px 19px;
  border: 1px solid #C0C5FC;
  padding: 20px 63px 20px 62px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.session .period {
  color: #292C30;
  text-align: center;
  font-family: 'Poppins';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 131%;
}

.session .time {
  display: flex;
  padding: 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 5px;
  background: #ECEDFF;
  color: #292C30;
  text-align: center;
    font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 131%;
}

.session .note {
  color: var(--ink-2, #848484);
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 131%;
}

.time-select {
  display: flex;
  padding: 20px 49px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #C0C5FC;
  margin: 20px 21px 0px 18px;
}

.time {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.time .period {
  color: #292C30;
  font-family: 'Poppins';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 131%;
  margin-bottom: 10px;
}
.time-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three columns in each row */
  gap: 12px; /* Row gap */
  color: #292C30;
text-align: center;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 131%; /* 18.34px */
}

.time-options button {
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

.time-options button:hover {
  background-color: #ECEDFF;
  color:#292C30; /* Change this to the desired hover color */
}

.time-options button.selected {
  background: #ECEDFF; /* Change this to the desired selected color */
  color:#292C30;
}
  .time-format {
    display: flex;
    gap: 10px;
    position: relative;
  }
  .time-format button {
    padding: 10px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: transparent;
    transition: background-color 0.3s ease;
  }
  .time-format button:hover {
    background-color: #ECEDFF; /* Change this to the desired hover color */
    color:#292C30;
  }


.time-format label {
  z-index: 2; /* Adjust the z-index to bring the label to the front */
}
  .time-format button.selected {
    background: #ECEDFF; /* Change this to the desired selected color */
   color:#292C30;
  }



.book-session {
  margin-top:16px ;
  margin-left: 21px;
  display: inline-flex;
padding: 12px 120px;
align-items: flex-start;
gap: 10px;
border-radius: 10px;
background: #868CD1;
border: none;
color: white;
transition: background 0.3s ease;
}
.book-session:hover{
  background:#C0C5FC;
}
</style>
