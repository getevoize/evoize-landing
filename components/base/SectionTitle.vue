<template>
	<h2
		class="text-center text-5xl font-bold text-blue-500 lg:max-w-4xl"
		:class="[
			colorClass,
			{
				'lg:text-left': align === 'left',
				'lg:text-center': align === 'center',
				'lg:text-right': align === 'right',
			},
		]"
	>
		{{ title }}
	</h2>
</template>

<script setup lang="ts">
interface Props {
	title: string
	color: string
	align: 'left' | 'center' | 'right'
	colorClass: string
}

withDefaults(defineProps<Props>(), {
	align: 'left',
	colorClass: 'text-blue-500',
})
</script>
