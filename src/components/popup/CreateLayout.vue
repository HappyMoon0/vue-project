<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true"  @click="$emit('close-modal')"> 
  <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"> 
      <div @click.stop class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <form class="create_item_form" @submit.prevent="submitForm"> 
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div >
                    <InputText type="text" v-model="title"/>
                </div>
                <div >
                    <Textarea   v-model="description" rows="5" cols="30"  variant="filled" style="resize: none"/>
                </div> 
                <div >
                    <InputNumber v-model="maxCount" inputId="minmax" :min="2" :max="100" fluid />
                </div>
                <div >
                    <Checkbox v-model="isPrivate" inputId="ingredient1" name="isPrivate" binary  />
                    <label for="ingredient1"> 비공개 </label>
                </div> 
            
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button type="submit" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>
            <button type="button" @click="$emit('close-modal')"class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
            </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>
  
  <script setup>
import { InputText, Checkbox, InputNumber, Textarea } from 'primevue';
import { ref, defineProps, defineEmits } from 'vue';
  
const emit = defineEmits(); 

  const open = ref(true);
  const title = ref(''); 
  const description = ref(''); 
  const maxCount = ref(2);
  const isPrivate = ref(false);

  const submitForm = () => { 
    const param = {
        title : title.value,
        description : description.value,
        maxCount : maxCount.value,
        isPrivate : isPrivate.value
    }

    if( param.title === ''){
        alert("제목을 입력해주세요.");
        return;
    }
    else if( param.description === ''){
        alert("설명을 입력해주세요.");
        return;
    }
    else if( param.maxCount === ''){
        alert("인원을 입력해주세요.");
        return;
    }
    emit('layoutCreate', param); 
    title.value = '';
    description.value = '';
    maxCount.value = 2;
    isPrivate.value = false
};

  
  </script>
  <style scoped>
  .create_item_form {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .create_item_form div input,
  .create_item_form div textarea {
    width: 100%;
  }
</style>