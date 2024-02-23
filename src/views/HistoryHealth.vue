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
          <tr v-for="row in 5" :key="row" class="text-center">
            <td class="px-2 py-3 border border-black">25/06/2567</td>
			<td class="border border-black">
            <button
              @click="showinfoModal(item)"
              class="border border-black"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </button>
		</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
export default {
  name: " HistoryHealth",
  // data(){

  // },
  // computed:{

  // },
  method: {
    showinfoModal() {},
  },
};
</script>
