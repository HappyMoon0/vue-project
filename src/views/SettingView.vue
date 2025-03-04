<template>
     
    <div>
        <Listbox v-model="selectedCity" :options="cities" optionLabel="name" class="w-full md:w-56" />
        <DatePicker v-model="date" />
       <br>
       <AutoComplete v-model="value" :suggestions="items" @complete="search" />
       <br>
       <InputText placeholder="Overriden" class="p-8!" />
       <br>
        <Button label="Warn" severity="warn" raised >ㅁㄴㅇㄹ</Button>
        <br><ToggleButton v-model="checked" onLabel="On" offLabel="Off" />
     
        <br>
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
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import AutoComplete from 'primevue/autocomplete';
import ToggleButton from 'primevue/togglebutton';
import Listbox from 'primevue/listbox';

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