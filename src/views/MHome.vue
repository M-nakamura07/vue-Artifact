<template>
  <div>
    <div class="container">
      <carousel :per-page="1" autoplay="true" autoplayTimeout="5000" loop="true" speed="3000">
        <slide><img src="../assets/trees-g2b153cefc_1280.jpg"></slide>
        <slide><img src="../assets/christmas-g742451bd4_1280.jpg"></slide>
        <slide><img src="../assets/pine-gde6407cb8_1280.jpg"></slide>
        <slide><img src="../assets/traffic-gfc8849a06_1280.jpg"></slide>
      </carousel>
      
      <form action="">
        <h2>CONTACT</h2>
        <p>名前</p>
        <input type="text" id="name">
        <p>メールアドレス</p>
        <input type="email" id="email">
        <p>メッセージ</p>
        <textarea id="message"></textarea>

        <button class="btn" @click="sendInfo">送信</button>
        
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    sendInfo() {
      axios.post(
        'https://firestore.googleapis.com/v1/projects/mncontact-70218/databases/(default)/documents/contact',
        {
          fields: {
            name: {
              stringValue: this.name
            },
            email: {
              stringValue: this.email
            },
            message: {
              stringValue: this.message
            }
          }
        }
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
};
</script>

<style scoped>
.VueCarousel-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

form h2,
form p {
  font-family: serif;
  font-weight: bold;
  color: rgb(100, 89, 67);
}

form {
  text-align: center;
  background-color: rgba(222, 199, 164, 0.214);
}

form h2 {
  font-size: 48px;
  padding-top: 42px;
}

form p {
  font-size: 18px;
}

#name,
#email,
#message{
  width: 270px;
  display: block;
  margin: 24px auto;
  border: 2px solid rgba(222, 199, 164, .5);
  border-radius: 6px;
}

#name,
#email {
  height: 36px;
}

#message {
  height: 98px;
}

.btn {
  font-family: serif;
  font-weight: bold;
  color: rgb(100, 89, 67);

  border: 2px solid rgba(222, 199, 164, .5);
  border-radius: 6px;
  background: rgba(222, 199, 164, 0.214);
  padding: 10px 48px;
  margin-bottom: 42px;
  cursor: pointer;
}

.btn:hover {
  opacity: .5;
}

</style>
