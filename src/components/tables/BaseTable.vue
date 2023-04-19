<script setup>
defineProps({
    tableTitle: ""
})
</script>

<template>
    <h4 class="uppercase font-semibold">{{ tableTitle }}</h4>
    <table class="w-full capitalize mt-4">
        <thead class="border-t border-b-2 border-light-grayish-blue text-left">
            <tr>
                <slot name="tableHeaders"></slot>
            </tr>
        </thead>
        <tbody class="font-bold">
            <slot name="tableRows"></slot>
        </tbody>
    </table>
</template>