<template> 
<div>
	<div id="chat_container">
		<div class="chat">  

			<div class="room_title">
				asdfasdf
			</div>

			<div class="room_chat">

				asdfzxcv
			</div> 
			<div class="room_input flex flex-row "> 
				
				
					<div class="rounded-bl-lg bg-white-500 w-16 content-center text-center bg-white border-t-1 border-r-1"
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
		<div class="chat_list">

		</div>
		<div class="room_list">

		</div>
	</div>
</div>
</template>

<script setup> 
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';

</script>

<style scoped> 
#chat_container{
	display: flex;
    flex-direction: row;
    background-color: aliceblue;
    margin: 20px;
    border: 1px solid #cbd5e1;
    border-radius: 8px 0 0 8px;
    overflow: hidden;
}
#chat_container .chat{
	display: flex;
    flex-direction: column;
	box-sizing: border-box;
	border-right: 1px solid #cbd5e1;
    background-color: aliceblue;
    width: calc(100%);
    height: 600px;
    justify-content: space-between;
} 
.room_title{
	padding: 10px 15px;
	box-sizing: border-box;
	border-bottom: 1px solid #cbd5e1;
	
}
.chat_list{
	width: 300px;
	height: 600px;
	background-color: blanchedalmond;
} 
.room_list{
	margin-left: 5px;
	width: 500px;
	height: 600px;
	background-color: beige;
} 
.p-select{
	border-radius: 0px;
	border-left: 0px;
	border-right: 0px;
	border-bottom: 0px;
}
.p-inputtext{
	border-radius: 0px;
	border-right: 0px;
	border-bottom: 0px;
}

</style>