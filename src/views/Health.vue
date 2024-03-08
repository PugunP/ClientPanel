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
		  <div class="w-64 h-64 overflow-hidden flex items-center justify-center">
			<label for="uploadFile1"
  class="bg-white text-black text-base rounded w-80 h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]">
  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 mb-2 fill-black" viewBox="0 0 32 32">
    <path
      d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
      data-original="#000000" />
    <path
      d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
      data-original="#000000" />
  </svg>
  Upload file
  <input type="file" id='uploadFile1' class="hidden" />
  <p class="text-xs text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
</label>
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
			<div class="w-64 h-64 overflow-hidden flex items-center justify-center">
			<label for="uploadFile1"
  class="bg-white text-black text-base rounded w-80 h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]">
  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 mb-2 fill-black" viewBox="0 0 32 32">
    <path
      d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
      data-original="#000000" />
    <path
      d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
      data-original="#000000" />
  </svg>
  Upload file
  <input type="file" id='uploadFile1' class="hidden" />
  <p class="text-xs text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
</label>
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
	  const hasHealthData = ref(false);
	  const healthImage = ref(""); // Reactive variable to store the image URL
  
	  const showHealthData = () => {
		// Assume this data structure contains the existing health data
		const existingHealthData = {
		  image: "../assets/Health.png", // Replace with your actual image path
		  // ... other health data ...
		};
  
		// Display existing health data
		healthImage.value = existingHealthData.image;
		hasHealthData.value = true;
	  };
  
	  const handleImageUpload = (event) => {
		// Handle image upload logic here
		// You can access the uploaded file using event.target.files[0]
		// Update healthImage.value with the new image URL after successful upload
	  };
  
	  return {
		hasHealthData,
		healthImage,
		showHealthData,
		handleImageUpload,
	  };
	},
  };
  </script>