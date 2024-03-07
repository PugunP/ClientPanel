<template>
	<main id="TableList_Page">
	  <h1 class="px-5 font-black text-3xl h-12 my-10">ตรวจสุขภาพ</h1>
	  <div class="flex flex-col px-10 my-10">
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
	  </div>
	</main>
  </template>
  