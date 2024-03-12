<template>
	<main>
		<div>
			<ShowImage/>
			<!-- <UploadImage /> -->
		</div>
	</main>
</template>

<script>
import UploadImage from '../components/UploadImage.vue';
import ShowImage from '../components/ShowImage.vue';

export default {
	components: {
		UploadImage,ShowImage
	},
};
</script>

<style>
/* Add global TailwindCSS styles here */
</style>