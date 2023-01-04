<template>
  <div>
    <div class="achievement">
      <h2>これまでの業績</h2>
      <div class="achievement-list">
        <ol>
          <li>
            <h3>業績</h3>
            <img src="../assets/web-design-ga61694936_1280.jpg" alt="">
            <p>テキストテキストテキストテキストテキストテキストテキスト<br>テキストテキストテキストテキストテキストテキストテキスト</p>
          </li>
          <li>
            <h3>業績</h3>
            <img src="../assets/pankaj-patel-Ylk5n_nd9dA-unsplash.jpg" alt="">
            <p>テキストテキストテキストテキストテキストテキストテキスト<br>テキストテキストテキストテキストテキストテキストテキスト</p>
          </li>
          <li>
            <h3>業績</h3>
            <img src="../assets/frederik-lipfert-y67dwfB2AiM-unsplash.jpg" alt="">
            <p>テキストテキストテキストテキストテキストテキストテキスト<br>テキストテキストテキストテキストテキストテキストテキスト</p>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

.achievement {
  background-color: rgba(222, 199, 164, 0.214);
}

.achievement h2,
.achievement-list li {
  font-family: serif;
  font-weight: bold;
  color: rgb(100, 89, 67);
}

.achievement h2 {
  margin-top: 0;
  padding-top: 32px;
  font-size: 44px;
  text-align: center;
}

.achievement-list ol{
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 0;
}

.achievement-list li {
  font-size: 32px;
  padding: 24px 0;
}

.achievement h3 {
  margin-top: 0;
}

.achievement p {
  font-size: 22px;
  text-align: center;
}

.achievement img {
  display: block;
  margin: 0 auto;
  width: 1000px;
}

@media (max-width: 1050px) {
  .achievement h2 {
    font-size: 35px;
  }

  .achievement-list li {
    font-size: 24px;
  }

  .achievement p {
    font-size: 18px;
  }

  .achievement img {
    width: 600px;
  }
}

@media (max-width: 650px) {
  .achievement h2 {
    font-size: 30px;
  }

  .achievement-list li {
    font-size: 20px;
  }

  .achievement p {
    font-size: 12px;
  }

  .achievement img {
    width: 400px;
  }
}

</style>
