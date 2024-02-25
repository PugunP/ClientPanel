<template>
    <main id="TableList_Page">
        <h1 class="text-black-500 pl-8 pt-8 text-xl font-bold">ประวัติการตรวจ</h1>

        <div class="overflow-x-auto p-8">
            <table class="w-full text-sm text-left text-gray-500 border border-black">
                <thead class="text-xs text-black uppercase">
                    <tr class="text-center">
                        <th scope="col" class="px-2 py-3 border border-black text-lg">
                            วันที่/เดือน/ปี
                        </th>
                        <th scope="col" class="px-4 py-3 border border-black text-lg">
                            รูปภาพที่ถูกอัพโหลด
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in paginatedData" :key="index" class="text-center">
                        <td class="px-2 py-3 border border-black">{{ row.date }}</td>
                        <td class="border border-black">
                            <button @click="showInfoModal(row)" class="border border-black" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </button>
                        </td>
						
                    </tr>
                </tbody>
            </table>
        </div>
		<div v-show="isInfoModalOpen" class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
    <div class="bg-white rounded-lg p-6 max-w-md">
        <div class="flex justify-between items-center">
            <h2 class="text-lg font-bold text-gray-800">รูปภาพที่ถูกอัพโหลด</h2>
            <button @click="hideInfoModal" class="text-gray-600 hover:text-gray-800 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
        <div class="mt-4 grid grid-cols-2 gap-4">
            <img src="../assets/test.jpeg" alt="Image 1" class="w-full h-auto rounded-lg">
            <img src="../assets/test.jpeg" alt="Image 2" class="w-full h-auto rounded-lg">
            <img src="../assets/test.jpeg" alt="Image 3" class="w-full h-auto rounded-lg">
            <img src="../assets/test.jpeg" alt="Image 4" class="w-full h-auto rounded-lg">
        </div>
    </div>
</div>

        <!-- Pagination Buttons -->
        <div class="flex justify-between p-8">
            <button @click="previousPage" :disabled="currentPage === 1"> Previous Page</button>
            <button @click="nextPage" :disabled="currentPage >= pageCount">Next Page</button>
        </div>
    </main>
</template>

<script>
export default {
    name: "HistoryHealth",
    data() {
        return {
			isInfoModalOpen: false,
            tableData: [
                { date: '25/06/2567'},
                { date: '26/06/2567'},
                { date: '27/06/2567' },
                { date: '28/06/2567' },
                { date: '29/06/2567' },
                { date: '30/06/2567' },
                { date: '31/06/2567' },
                { date: '32/06/2567' },
                { date: '33/06/2567' },
                { date: '34/06/2567' },
            ],
            currentPage: 1,
            itemsPerPage: 5
        };
    },
    computed: {
        paginatedData() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            return this.tableData.slice(startIndex, startIndex + this.itemsPerPage);
        },
        pageCount() {
            return Math.ceil(this.tableData.length / this.itemsPerPage);
        }
    },
    methods: {
        showInfoModal(item) {
			this.isInfoModalOpen = true;
            console.log(item); 
        },
		hideInfoModal() {
			this.isInfoModalOpen = false;
			
		},
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.pageCount) {
                this.currentPage++;
            }
        }
    },
};
</script>
