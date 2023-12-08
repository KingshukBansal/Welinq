<template>
  <div>
    <div class="footer-container">
      <div id="footer">
        <div class="footer-section">
          <div class="logo-icon"><img src="../assets/image25.svg" alt="Logo"></div>
        </div>

        <div class="footer-section">
          <div class="product">
            <h3>Product</h3>
            <ul>
              <li>Affiliate program</li>
            </ul>
          </div>
        </div>

        <div class="footer-section">
          <div class="resources">
            <h3>Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Become Therapist</li>
              <li>Apply for Therapist</li>
            </ul>
          </div>
        </div>
        <div class="footer-section">
          <div class="useful-links">
            <h3>Useful Links</h3>
            <ul>
              <li>Terms</li>
              <li>Privacy policy</li>
            </ul>
          </div>
        </div>

        <div class="footer-section">
          <div class="follow-us">
            <h3>Follow Us On</h3>
            <div class="social-icons">
              <div class="facebook"><img src="../assets/image 20.png" alt="Facebook"> Facebook</div>
              <div class="linkedin"><img src="../assets/image 21.png" alt="Linkedin"> Linkedin</div>
              <div class="twitter"><img src="../assets/image 22.png" alt="Twitter"> Twitter</div>
              <div class="instagram"><img src="../assets/image 24.png" alt="Instagram"> Instagram</div>
            </div>
          </div>
        </div>

      </div>
      <div class="copyright">
        &copy; 2023 Einstein Limited. All rights reserved.
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  background-color: #EEEFFF;
  height: 500px;
  padding: 90px 27px 35px 27px;
  display: flex;
  flex-direction: column;
  gap: 90px;
  align-items: center;
}

.social-icons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
}

#footer {
  margin-top: 0px;
  display: flex;
  justify-content: space-around;
  background-color: #EEEFFF;
  color: #292C30;
  gap: 100px;
}

.facebook, .linkedin, .instagram, .twitter {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon img {
  width: 120px;
  height: 120px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 8px;
}

.copyright {
  margin-bottom: 0px;
  width: 1674px;
  border-top: 1px solid rgba(41, 44, 48, 0.20);
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  color: #000000;
  padding-bottom: 0px;
}
</style>
