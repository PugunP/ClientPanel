<template>
    <div class="flex flex-col">
        <h1 class="px-2.5 mt-4 text-3xl">ตรวจสุภาพ</h1>
        <!--Image 01 -->
        <div class=" p-6 ">
            <div class="flex items-center mb-4">
                <h1 class="text-2xl font-bold">อัพโหลดรูปภาพที่ 1</h1>
                <button @click="resetImage"
                    class="cursor-pointer block bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-center ml-4">
                    ลบรูปที่เพิ่ม
                </button>
            </div>
            <div class="relative overflow-hidden cursor-pointer rounded-md border" style="width: 400px; height: 300px;"
                @click="openFileInput">
                <div class="absolute inset-0 opacity-90 flex items-center justify-center">
                    <button
                        class="cursor-pointer block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center mr-4">
                        เลือกรูปภาพ
                    </button>
                    <input id="file-upload" ref="fileInput" type="file" @change="handleFileUpload" class="hidden"
                        accept="image/*" />
                </div>
                <div v-if="imagePreview" class="mt-4">
                    <img :src="imagePreview" alt="Image Preview"
                        class="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
        <!--Image 02-->
        <div class="p-6">
            <div class="flex items-center mb-4">
                <h1 class="text-2xl font-bold">อัพโหลดรูปภาพที่ 2</h1>
                <button @click="resetImage2"
                    class="cursor-pointer block bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-center ml-4">
                    ลบรูปที่เพิ่ม
                </button>
            </div>
            <div class="relative overflow-hidden cursor-pointer rounded-md border" style="width: 400px; height: 300px;"
                @click="openFileInput2">
                <div class="absolute inset-0 opacity-90 flex items-center justify-center">
                    <button
                        class="cursor-pointer block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center mr-4">
                        เลือกรูปภาพ
                    </button>
                    <input id="file-upload2" ref="fileInput2" type="file" @change="handleFileUpload2" class="hidden"
                        accept="image/*" />
                </div>
                <div v-if="imagePreview2" class="mt-4">
                    <img :src="imagePreview2" alt="Image Preview"
                        class="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const imageFile = ref(null);
const imagePreview = ref(null);
const imageFile2 = ref(null);
const imagePreview2 = ref(null);

const openFileInput = () => {
    const fileInput = document.getElementById('file-upload');
    fileInput.click();
};
const openFileInput2 = () => {
    const fileInput = document.getElementById('file-upload2');
    fileInput.click();
};

const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            imageFile.value = file;
            imagePreview.value = reader.result;
            console.log(`อัพโหลดรูปภาพสำเร็จ: ${file.name}`);
        };
        reader.readAsDataURL(file);
    } else {
        console.error('ไม่พบไฟล์ที่อัปโหลด');
    }
};
const handleFileUpload2 = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            imageFile2.value = file;
            imagePreview2.value = reader.result;
            console.log(`อัพโหลดรูปภาพสำเร็จ: ${file.name}`);
        };
        reader.readAsDataURL(file);
    } else {
        console.error('ไม่พบไฟล์ที่อัปโหลด');
    }
};

const resetImage = () => {
    if (imageFile.value) {
        console.log(`ล้างรูปภาพ: ${imageFile.value.name}`);
    } else {
        console.error('ไม่พบรูปภาพที่ต้องการล้าง');
    }
    imageFile.value = null;
    imagePreview.value = null;
};
const resetImage2 = () => {
    if (imageFile2.value) {
        console.log(`ล้างรูปภาพ: ${imageFile2.value.name}`);
    } else {
        console.error('ไม่พบรูปภาพที่ต้องการล้าง');
    }
    imageFile2.value = null;
    imagePreview2.value = null;
};

</script>

<style scoped>
/* Add TailwindCSS styles here */
</style>
