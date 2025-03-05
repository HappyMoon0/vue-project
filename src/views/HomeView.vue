<template> 
<div>
	<div id="item_btn_container">
		<div class="flex flex-row-reverse">
			<Button label="Create" severity="Info"  @click="showTweetModal = true"/>
		</div>
		<CreateLayout v-if="showTweetModal" @close-modal="showTweetModal = false" @layout-create="itemCreate"></CreateLayout>
	</div>
	<div id="item_container">
		<div class="item">  

			<div class="room_title"> 
			</div>

			<div class="room_item">
 
			</div> 
			<div class="room_input flex flex-row "> 
				 
				<div class="rounded-bl-lg bg-white-500 w-16 content-center text-center bg-white border-t-1 border-r-1 border-b-1"
					style="border-color: #cbd5e1;">
					<i class="pi pi-user"></i>
				</div>
				
				<Select 
				v-model="selectedCity" 
				:options="cities" 
				optionLabel="name" 
				placeholder="User"  
				class="w-1/5 rounded-none"/>
				
				<InputText class="w-full rounded-none divide-none border-red-50"></InputText>
				 
			</div>
		</div>
		<div class="item_list">
			<ScrollPanel style="width: 100%; height: 100%">
				
			</ScrollPanel>
		</div>
		<div class="room_list">
			<ScrollPanel style="width: 100%; height: 100%">
				<Panel class="m-8" v-for="(item, index) in itemList" :key="index">
					<template #header>
						<div class="flex items-center gap-2">
							<Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
							<span class="font-bold">{{ item.title }}</span>
						</div>
					</template> 
					<template #icons>
						<Button icon="pi pi-bookmark" severity="secondary" rounded text></Button> 
						<Button icon="pi pi-cog" severity="secondary" rounded text  />
						<Menu ref="menu" id="config_menu" :model="items" popup />
					</template>
					<p class="m-0">
						{{ item.description}}
					</p>
				</Panel> 
			</ScrollPanel>
		</div>
	</div> 
</div>
</template>

<script setup>  
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import ScrollPanel from 'primevue/scrollpanel';
import Panel from 'primevue/panel'; 
import { reactive, ref } from 'vue';
import CreateLayout from '@/components/popup/CreateLayout.vue';

const showTweetModal = ref(false);
const itemList = reactive([]);
const itemCreate = (params) =>{
	console.log('itemCreate:', params) 

	itemList.push(params);
	showTweetModal.value = false;
 
}

</script>

<style scoped> 
#item_btn_container{
	margin: 10px;
}
#item_container{
	display: flex;
    flex-direction: row;
    background-color: aliceblue;
    margin: 0 10px 10px 10px;
    border: 1px solid #cbd5e1;
	border-bottom: 0px;
    border-radius: 8px 0 0 8px;
    overflow: hidden;
}
#item_container .item{
	display: flex;
    flex-direction: column;
	box-sizing: border-box;
	border-right: 1px solid #cbd5e1;
    background-color: #fff;
    width: calc(100%);
    height: 600px;
    justify-content: space-between;
} 
.room_title{
	padding: 10px 15px;
	box-sizing: border-box;
	border-bottom: 1px solid #cbd5e1;
	
}
.item_list{
	width: 300px;
	height: 600px;
	background-color: blanchedalmond;
} 
.room_list{ 
	width: 500px;
	height: 600px; 
} 
.p-select{
	border-radius: 0px;
	border-left: 0px;
	border-right: 0px; 
}
.p-inputtext{
	border-radius: 0px;
	border-right: 0px; 
} 
.p-panel{
	margin-top: 10px;
	margin-left: 10px;
	margin-right: 10px
}
.p-panel:last-child{
	margin-bottom: 10px;
}

</style>