<template>
    <div>
        <h1>컨텐츠 코드 관리</h1><br/>
        <div>
            <h3>컨텐츠 코드 추가</h3>
            <input v-model="inAreaCd" placeholder="공간코드(A00)">
            <input v-model="inContentsCd" placeholder="컨텐츠코드(C00)">
            <input v-model="inContentsNm" placeholder="컨텐츠이름">
        </div>
    </div>
    
    <DataTable >
        <Column header="코드" field="areaCd" sortable/>
        <Column header="컨텐츠 코드" field="inContentsCd" sortable/>
        <Column header="컨텐츠 이름" field="inContentsNm" sortable/>
    </DataTable>
</template>

<script>
import { ref } from 'vue';
export default {
    setup () {
        
        const ContentsList = ref([]);

        const inAreaCd  = ref('');
        const inContentsCd  = ref('');
        const inContentsNm  = ref('');
        return {
            inAreaCd,
            inContentsCd,
            inContentsNm,
            ContentsList
        }
    }
}
</script>

<style  scoped>

</style>