<template>
    <div class="flex flex-col">
      <h1 class="px-2.5 mt-4 text-3xl">ตรวจสุขภาพ</h1>
      <!-- Image 01 -->
      <div class="p-6">
        <div class="flex items-center mb-4">
          <h1 class="text-2xl font-bold">อัพโหลดรูปภาพที่ 1</h1>
          <button @click="resetImage" class="cursor-pointer block bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-center ml-4">ลบรูปที่เพิ่ม</button>
        </div>
        <div class="relative overflow-hidden cursor-pointer rounded-md border" style="width: 400px; height: 300px;" @click="openFileInput">
          <div class="absolute inset-0 opacity-90 flex items-center justify-center">
            <button class="cursor-pointer block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center mr-4">เลือกรูปภาพ</button>
            <input id="file-upload" ref="fileInput" type="file" @change="handleFileUpload" class="hidden" accept="image/*" />
          </div>
          <div v-if="imagePreview" class="mt-4">
            <img :src="imagePreview" alt="Image Preview" class="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
      <!-- Image 02 -->
      <div class="p-6">
        <div class="flex items-center mb-4">
          <h1 class="text-2xl font-bold">อัพโหลดรูปภาพที่ 2</h1>
          <button @click="resetImage2" class="cursor-pointer block bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-center ml-4">ลบรูปที่เพิ่ม</button>
        </div>
        <div class="relative overflow-hidden cursor-pointer rounded-md border" style="width: 400px; height: 300px;" @click="openFileInput2">
          <div class="absolute inset-0 opacity-90 flex items-center justify-center">
            <button class="cursor-pointer block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center mr-4">เลือกรูปภาพ</button>
            <input id="file-upload2" ref="fileInput2" type="file" @change="handleFileUpload2" class="hidden" accept="image/*" />
          </div>
          <div v-if="imagePreview2" class="mt-4">
            <img :src="imagePreview2" alt="Image Preview" class="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      <!-- Send Images Button -->
      <div class="p-6">
        <button @click="sendImages" class="cursor-pointer block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-center">
          ส่งรูปภาพ
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { baseURL,UPLOADIMAGE_API } from '../APIGate';
  import axios from 'axios';
  import { ref } from 'vue';
  const imageFile = ref(null); // ตัวแปรสำหรับเก็บไฟล์รูปภาพ
  const imagePreview = ref(null); // ตัวแปรสำหรับเก็บตัวอย่างของรูปภาพ
  const imageFile2 = ref(null); // ตัวแปรสำหรับเก็บไฟล์รูปภาพที่ 2
  const imagePreview2 = ref(null); // ตัวแปรสำหรับเก็บตัวอย่างของรูปภาพที่ 2
  import Swal from "sweetalert2";

  
  const openFileInput = () => {
    const fileInput = document.getElementById('file-upload'); // ดึงอินพุตไฟล์รูปภาพ
    fileInput.click(); // คลิกที่อินพุตไฟล์
  };
  const openFileInput2 = () => {
    const fileInput = document.getElementById('file-upload2'); // ดึงอินพุตไฟล์รูปภาพที่ 2
    fileInput.click(); // คลิกที่อินพุตไฟล์ที่ 2
  };
  /*
  ในฟังก์ชันด้านล่าง:
    FileReader() ใช้สร้างอ็อบเจกต์ FileReader เพื่ออ่านไฟล์ที่เลือก
    reader.onload ถูกใช้เพื่อกำหนดฟังก์ชันที่จะถูกเรียกเมื่อการอ่านไฟล์เสร็จสมบูรณ์
    reader.readAsDataURL(file) ใช้เพื่ออ่านไฟล์และแปลงเป็น URL ข้อมูล base64 ที่สามารถใช้ในการแสดงรูปภาพได้ใน HTML
    ใช้ FileReader ในฟังก์ชันนี้ทำให้ ส่งไฟล์รูปภาพเป็น base64 ไปยังเซิร์ฟเวอร์และใช้ในการแสดงตัวอย่างรูปภาพใน HTML.
  */
  const handleFileUpload = (event) => {
    const file = event.target.files[0]; // ดึงไฟล์ที่เลือก
    if (file) {
      const reader = new FileReader(); // สร้าง Reader
      reader.onload = () => {
        imageFile.value = file; // กำหนดค่าไฟล์รูปภาพ
        imagePreview.value = reader.result; // กำหนดตัวอย่างของรูปภาพ
        console.log(`อัพโหลดรูปภาพสำเร็จ: ${file.name}`); // แสดงข้อความเมื่ออัพโหลดสำเร็จ
      };
      reader.readAsDataURL(file); // อ่านไฟล์เป็น URL ข้อมูล
    } else {
      console.error('ไม่พบไฟล์ที่อัปโหลด'); // แสดงข้อความเมื่อไม่พบไฟล์ที่อัปโหลด
    }
  };
  const handleFileUpload2 = (event) => {
    const file = event.target.files[0]; // ดึงไฟล์ที่เลือก
    if (file) {
      const reader = new FileReader(); // สร้าง Reader
      reader.onload = () => {
        imageFile2.value = file; // กำหนดค่าไฟล์รูปภาพที่ 2
        imagePreview2.value = reader.result; // กำหนดตัวอย่างของรูปภาพที่ 2
        console.log(`อัพโหลดรูปภาพสำเร็จ: ${file.name}`); // แสดงข้อความเมื่ออัพโหลดสำเร็จ
      };
      reader.readAsDataURL(file); // อ่านไฟล์เป็น URL ข้อมูล
    } else {
      console.error('ไม่พบไฟล์ที่อัปโหลด'); // แสดงข้อความเมื่อไม่พบไฟล์ที่อัปโหลด
    }
  };
  
  const resetImage = () => {
    if (imageFile.value) {
      console.log(`ล้างรูปภาพ: ${imageFile.value.name}`); // แสดงข้อความเมื่อล้างรูปภาพ
    } else {
      console.error('ไม่พบรูปภาพที่ต้องการล้าง'); // แสดงข้อความเมื่อไม่พบรูปภาพที่ต้องการล้าง
    }
    imageFile.value = null; // กำหนดค่าไฟล์รูปภาพเป็นค่าว่าง
    imagePreview.value = null; // กำหนดตัวอย่างของรูปภาพเป็นค่าว่าง
  };
  const resetImage2 = () => {
    if (imageFile2.value) {
      console.log(`ล้างรูปภาพ: ${imageFile2.value.name}`); // แสดงข้อความเมื่อล้างรูปภาพที่ 2
    } else {
      console.error('ไม่พบรูปภาพที่ต้องการล้าง'); // แสดงข้อความเมื่อไม่พบรูปภาพที่ต้องการล้าง
    }
    imageFile2.value = null; // กำหนดค่าไฟล์รูปภาพที่ 2 เป็นค่าว่าง
    imagePreview2.value = null; // กำหนดตัวอย่างของรูปภาพที่ 2 เป็นค่าว่าง
  };
  
  const sendImages = () => {
    // ตรวจสอบว่าทั้งภาพทั้งสองได้ถูกเลือกหรือไม่
    if (imageFile.value && imageFile2.value ) {
      // เตรียมข้อมูลแบบฟอร์ม
      const formData = new FormData();
      formData.append('oxiMeterImage', imageFile.value); // เพิ่มภาพ oxiMeter เข้าไปใน formData
      formData.append('bloodPressureMeterImage', imageFile2.value); // เพิ่มภาพ bloodPressureMeter เข้าไปใน formData

      // Send images to the server
      axios.post(`${baseURL}${UPLOADIMAGE_API}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}` // Include accessToken in the header
        }
      }).then(response => {
        Swal.fire({
          icon: "success",
          title: "สถานะการส่งรูปภาพ",
          text: "รูปภาพถูกจัดเก็บเป็นที่เรียบร้อย",
        });
        console.log('Images uploaded successfully'); // แสดงข้อความเมื่ออัปโหลดรูปภาพสำเร็จ
        console.log('Response:', response.data); // แสดงข้อมูล Response ที่ได้จากเซิร์ฟเวอร์
        // Reset form after successful upload
        resetImage(); // เรียกใช้ฟังก์ชันเพื่อล้างรูปภาพ
        resetImage2(); // เรียกใช้ฟังก์ชันเพื่อล้างรูปภาพที่ 2
      }).catch(error => {
        console.error('Error uploading images:', error); // แสดงข้อความเมื่อเกิดข้อผิดพลาดในการอัปโหลดรูปภาพ
        Swal.fire({
          icon: "error",
          title: "ขออภัย...",
          text: `พบปัญหาที่การส่งรูปภาพ : ${error}`,
        });
      });
    } 
  };
  
  </script>
  <style scoped>
  /* Add TailwindCSS styles here */
  </style>
  