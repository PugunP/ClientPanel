<template>
    <div class=" mx-auto p-4">
        <!-- แสดง component ShowImage เมื่อ showImage มีค่าเป็น true -->
        <div v-if="showImage" class="text-center">
            <ShowImage/>
            <!-- ปุ่มสำหรับสลับไปยัง component UploadImage -->
            <button @click="toggleComponent" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">ไปยัง UploadImage</button>
        </div>
        <!-- แสดง component UploadImage เมื่อ showImage มีค่าเป็น false -->
        <div v-else class="text-center">
            <UploadImage/>
            <!-- ปุ่มสำหรับสลับไปยัง component ShowImage -->
            <button @click="toggleComponent" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">กลับไปยัง ShowImage</button>
        </div>
    </div>
</template>

<script>
import ShowImage from '../components/ShowImage.vue';
import UploadImage from '../components/UploadImage.vue';

export default {
    components: {
        ShowImage,
        UploadImage
    },
    data() {
        return {
            showImage: true // กำหนดค่าเริ่มต้นให้แสดง component ShowImage เมื่อโหลดหน้าเว็บครั้งแรก
        };
    },
    methods: {
        // เมื่อปุ่มถูกคลิก จะสลับค่าของ showImage เพื่อสลับการแสดงผล component
        toggleComponent() {
            this.showImage = !this.showImage;
        }
    }
};
</script>
