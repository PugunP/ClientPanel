<template>
    <div v-if="showPopup" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-8 rounded-lg shadow-lg">
        <!-- ปุ่มปิด -->
        <button @click="closePopup" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
  
        <!-- เนื้อหา Popup นี้ -->
        <div>
          <!-- รูปภาพหรือเนื้อหาอื่น ๆ ที่คุณต้องการแสดงใน Popup -->
          <img src="image1.jpg" alt="Image 1" class="w-64 h-64 object-cover mb-4">
<img src="image2.jpg" alt="Image 2" class="w-64 h-64 object-cover">


        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showPopup: false,
      };
    },
    methods: {
      openPopup() {
        this.showPopup = true;
      },
      closePopup() {
        this.showPopup = false;
      },
    },
  };
  </script>
  
  <style scoped>
  /* สไตล์เฉพาะของ Component Popup นี้ */
  </style>
  