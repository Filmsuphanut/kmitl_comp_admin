<template>

<div class="container pt-3 pe-5 ps-5" style="width:50%; ">
  
  <div class="card">
    <div class="row">
      <div class="container col pt-1">
        <h4 class="text text-start">กระดานข่าวสาร</h4>
      </div>
      <div class="container-fluid col d-flex flex-row-reverse p-2 pt-3 pb-2">
        <div class="dropup">
          <button type="button" class="dropdown-toggle hide-toggle me-1 pe-3 " data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
            <span class="material-icons md-26">menu</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li>
              <a class="dropdown-item" href="#">เพิ่มข่าวสารใหม่</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="content" style="height: 2000px;">

    <div v-for="neww in News" v-bind:key="neww" class="card shadow-sm mt-4" style="height: 320px;">
      <div class="row mt-3 ms-2">
        <div class="col-5 d-flex flex-column">
          <img class="pic" :src="neww.imageURL" /> 
        </div>
        <div class="col-6 mt-1 d-flex flex-column">
          <h4 class="text text-start">{{neww.Header}}</h4>
          <p class="text text-start">{{neww.Body.length <= 250 ? neww.Body : neww.Body.substring(0,250) + "....."}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col d-flex flex-row-reverse me-4 mb-2">

         <button type="button" class="btn btn-success btn-labeled btn-default">อ่านต่อ >
         <!-- <span class="material-icons">arrow_right</span> -->
         </button>
        </div>
      </div>
    </div>

  </div>

</div>




</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'NewsView',
  components: {
    //HelloWorld
  },
  data() {
    return {
      News:[]
     
    }
  },
  methods:{
    callNewsData(){
      this.News.push({
        imageURL: "https://pbs.twimg.com/media/FdtkzjjaUAIoYZk?format=jpg&name=4096x4096",
        Header: "สุขสันต์วันเกิดนะเต่า <3 !!",
        Body: "ถึงจะเป็นสถานที่เดิม แต่ความรู้สึกทุกครั้งที่มากลับไม่เคยเหมือนเดิม....ช่วงเวลาแห่งความสุขนั้นช่างแสนสั้น บางทีนั่นอาจเป็นเหตุผลว่าทำไมฉันถึงหวงแหนมันเหลือเกิน เธอจะช่วยรับดอกไม้ช่อนี้ไว้ได้มั้ย?ฉันหวังว่า...กลิ่นหอมของดอกไม้นี้จะคอยอยู่เคียงข้างเธอเสมอ"
      })
      this.News.push({
        imageURL: "https://pbs.twimg.com/media/FXrQOorUEAQf4UG?format=jpg&name=4096x4096",
        Header: "สุขสันต์วันเกิดยัยตัวแสบอิอิ !!",
        Body: "แฮ่! ตกใจล่ะสิ? มาดูกันว่า ใครจะเป็นคนแรกที่มาหาหัวหน้าโถงฯ ในวันเกิดกันน้า~ พูดกันตามตรง พวกวัตถุโบราณในโถงพวกนั้น ปากถึงจะพูดอวยพร แต่แป๊บเดียวก็เริ่มพูดจาวกกลับไปที่ความคิดโบราณคร่ำครึพวกนั้นอีก ถึงฉันจะมีวิธีโน้มน้าวพวกเขา แต่ก็ไม่อยากเสียเวลาไปกับเรื่องแบบนี้ทั้งวันนะ ในที่สุดเธอก็มา อย่างที่ฉันหวังไว้เลย! รีบไปกัน ๆ ฉันจองที่นั่งในโรงน้ำชาไว้แล้ว พวกเราไปจิบชาไปพลางแต่งบทกวีไปพลาง พร้อมคุยเรื่องต่าง ๆ ด้วยกันเถอะ!"
      })
    }
  },

  created() {
    this.callNewsData();
  },
}
</script>


<style>
 /* Rules for sizing the icon. */
.material-icons.md-18 { font-size: 18px; }
.material-icons.md-26 { font-size: 26px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }

.dropup .hide-toggle.dropdown-toggle::after {
  display: none !important;
}

.container {
   max-width: 70% !important;
}

.pic{
  /* display: block; */
  height:260px;
  width:260px;/*maintain aspect ratio*/
  object-fit: cover;
}

.text {
  padding-top:2% ;
  padding-bottom:2% ;
  padding-left: 3%;
}

.content{
  margin-top: 5%;
}


.btn-label {
	position: relative;
	left: -12px;
	display: inline-block;
	padding: 6px 12px;
	background: rgba(0, 0, 0, 0.15);
	border-radius: 3px 0 0 3px;
}

.btn-labeled {
	padding-top: 0;
	padding-bottom: 0;
}

.btn {
	margin-bottom: 10px;
}
</style>