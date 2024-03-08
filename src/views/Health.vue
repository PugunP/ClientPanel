<template>
	<main id="TableList_Page">
	  <h1 class="px-5 font-black text-3xl h-12 my-10">ตรวจสุขภาพ</h1>
	  <div 
	  	v-if="!hasHealthData"
	 	class="flex flex-col items-center">
      <h1 class="text-2xl text-center my-5">ไม่เคยมีประวัติการตรวจ</h1>
      <button 
	  	@click="showHealthData"
	 	class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        เพิ่มประวัติการตรวจ
      </button>
    </div>
	  <div 
	  	v-if="hasHealthData"
	 	class="flex flex-col px-10 my-10">
		<div class="pb-12 px-6 flex flex-col-2 items-center">
		  <div class="w-64 h-64 overflow-hidden flex items-center justify-center border border-black">
			<img src="../assets/bloodPressureMeter.jpg" class="w-full h-full object-cover" alt="Your Image">
		  </div>
			<div class="ml-12 text-lg font-bold mt-5">
				<p>1.ค่าความดันตัวบน (SYS) </p>
				<br>
				<p>2.ค่าความดันตัวล่าง (DIA) </p>
				<br>
				<p>3.ชีพจร (PULSE) </p>
			</div>
		</div>
		<div class="px-6 flex flex-col-2 items-center">
		  <div class="w-64 h-64 overflow-hidden flex items-center justify-center border border-black">
			<img src="../assets/oxiMeter.jpg" class="w-full h-full object-cover" alt="Your Image">
		  </div>
  
		  <div class="ml-12 text-lg font-bold">
			<p>4.ปริมาณออกซิเจนในเลือด (%SpO2)</p>
		  </div>
		</div>
		<button @click="showHealthData" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
        เพิ่มประวัติการตรวจ
      </button>
	  </div>
	</main>
  </template>
  
  <script>
    import { ref } from 'vue';

    export default {
      setup() {
        // ใช้ ref เพื่อสร้าง reactive data
        const hasHealthData = ref(false);

        // method ที่ให้เรียกเมื่อปุ่มถูกคลิก
        const showHealthData = () => {
          // เปลี่ยนค่าเพื่อแสดงประวัติการตรวจ
          hasHealthData.value = !hasHealthData.value;
        };

        return {
          hasHealthData,
          showHealthData,
        };
      },
    };
  </script>