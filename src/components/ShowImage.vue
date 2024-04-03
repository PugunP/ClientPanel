<template>
    <div class="flex flex-col">
        <h1 class="px-2.5 mt-4 text-3xl">ตรวจสุภาพ</h1>
        <!-- Image 01 -->
        <div class="p-6">
            <div class="flex items-center mb-4">
                <h1 class="text-2xl font-bold">แสดงรูปภาพที่ 1</h1>
            </div>
            <div class="relative overflow-hidden  rounded-md border" style="width: 400px; height: 300px;">
                <div class="absolute inset-0 opacity-90 flex items-center justify-center">
                    <!-- แสดงรูปภาพที่ได้จาก API -->
                    <img v-if="image1" :src="image1" alt="Image Preview" class="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg" />
                    <!-- หากไม่ได้รับข้อมูลรูปภาพ -->
                    <span v-else>ไม่มีข้อมูลรูปภาพ</span>
                </div>
            </div>
        </div>
        <!-- Image 02 -->
        <div class="p-6">
            <div class="flex items-center mb-4">
                <h1 class="text-2xl font-bold">แสดงรูปภาพที่ 2</h1>
            </div>
            <div class="relative overflow-hidden  rounded-md border" style="width: 400px; height: 300px;">
                <div class="absolute inset-0 opacity-90 flex items-center justify-center">
                    <!-- แสดงรูปภาพที่ได้จาก API -->
                    <img v-if="image2" :src="image2" alt="Image Preview" class="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg" />
                    <!-- หากไม่ได้รับข้อมูลรูปภาพ -->
                    <span v-else>ไม่มีข้อมูลรูปภาพ</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            image1: null,
            image2: null
        };
    },
    mounted() {
        // ทำการยิง API เพื่อดึงข้อมูล
        axios.get('http://localhost:8080/api/get-me-dataHealth', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
            }
        })
        .then(response => {
            console.log('Data from API:', response.data); // เพิ่ม console.log เพื่อตรวจสอบข้อมูลที่ได้จาก API
            // แปลงข้อมูลรูปภาพให้เป็น URL
            this.image1 = 'data:image/jpeg;base64,' + response.data.oxiMeterImage;
            this.image2 = 'data:image/jpeg;base64,' + response.data.bloodPressureMeterImage;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }
};

</script>
