<template>
    <table class="capitalize mt-4 whitespace-nowrap">
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