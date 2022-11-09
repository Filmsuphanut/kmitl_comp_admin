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

  <div class="content">

    <div v-for="neww in News" v-bind:key="neww" class="card shadow-sm mt-4 mb-4" style="height: 320px;">
      <div class="row mt-3 ms-2">
        <div class="col-5 d-flex flex-column">
          <img class="pic" :src="neww.imageURL" /> 
        </div>
        <div class="col-6 d-flex flex-column">
          <h4 class="text text-start">{{neww.Header.length <= 32 ? neww.Header : neww.Header.substring(0,32) + "..."}}</h4>
          <p class="text text-start">{{neww.Body.length <= 230 ? neww.Body : neww.Body.substring(0,230) + "....."}}</p>
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

      for (let i =0 ; i < 10 ; i++){
        this.News.push({
        imageURL: "https://bk-review.com/wp-content/uploads/2018/08/%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%81%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88-%E0%B9%80%E0%B8%8B%E0%B9%87%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%B1%E0%B8%A5%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B8%8B%E0%B8%B2-%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A3%E0%B8%B2%E0%B8%A1-2-6-of-27.jpg",
        Header: "พฤกษาช้อยวิสุทธิท่านหญิงน้อยKusanali",
        Body: "ไม่ว่าจะใส่ใจเกินไปก็ดี หรือจะมอบความรักให้มากเกินไปก็ช่าง และถึงจะมีพฤติกรรมที่บกพร่อง แต่ฉันรับรู้ถึงความรับผิดชอบของเธอในฐานะเทพแห่ง Sumeru เป็นเรื่องที่น่ายกย่อง ขนาดเทพที่อายุน้อยที่สุดยังทำได้ ตรงข้ามกับคนประสาทบางคน — Neuvillette ผู้พิพากษาสูงสุดแห่ง Fontaine — Neuvillette ผู้พิพากษาสูงสุดแห่ง Fontaine"
        })
      }

      this.News.push({
        imageURL: "https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/243067731_1753991538324298_8549916390031069303_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFbOjmfKP4MS9AanpLG0Mecz3COCiw7G_3PcI4KLDsb_b3lNo4UckEk-xq4oWt0OCoyzWVMYa03GRCiTwnVSNUV&_nc_ohc=i0nfMX_AkFMAX-9r_xl&_nc_ht=scontent.fbkk5-4.fna&oh=00_AfBu9Zzy_0omMc_41RcTytJP7PtuIpDpm9sMZtoVrUgJ0g&oe=63708403",
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


<style lang="scss" scoped>


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
  width:260px;
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