<template>
    <div>
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column class="w-24 !text-end">
                <template #body="{ data }">
                    <Button icon="pi pi-search" @click="selectRow(data)" severity="secondary" rounded></Button>
                </template>
            </Column>
        </DataTable>

    </div>
</template>

<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
const products = [
    {
        code : 1
    },
    {
        code : 2
    },
]
</script>

<style scoped>

</style>