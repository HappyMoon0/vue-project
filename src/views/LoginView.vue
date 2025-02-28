<template>
	<div class="login"> 
		<form class="loginform">
			<p>
				<label for="memberIdInput">아이디</label>
				<input type="text" id="memberIdInput" class="input_text" ref="memberIdInput"   placeholder="아이디를 입력하세요." />
        <InputText type="text"  />

			</p>
			<p>
				<label for="memberPasswordInput">패스워드</label>
				<input type="password" id="memberPasswordInput" class="input_text" ref="memberPasswordInput"  placeholder="패스워드를 입력하세요." />
			</p>
			<p class="buttons">
				<button @click.prevent="doLogin" class="button blue">로그인</button>
				<button @click.prevent="doCancel" class="button">취소</button>
			</p>
		</form>
		<p>{{ errorMessage }}</p>
	</div>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const memberIdInput = ref('');
const memberPasswordInput = ref('');
const errorMessage = ref('');
	
	
const doLogin = () => {
  if (memberIdInput.value.value == "") {
    alert("아이디를 입력하세요.");
      memberIdInput.value.focus();
    return;
  } else if (memberPasswordInput.value.value == "") {
    alert("패스워드를 입력하세요.");
      memberPasswordInput.value.focus();
    return;
  }

  localStorage
}
const doCancel = () => {
  router.push('../');
}
onMounted(()=> {
  memberIdInput.value.focus();
})

</script>

<style scoped>
.login { width:800px; margin:20px auto; }
.loginform { width:400px; margin:auto; }
.loginform p > label { display:inline-block; width:100px; font-size:14px; padding-right:10px; }
.loginform p > .input_text { width:200px; font-size:14px; height:32px; }
.buttons { position:relative; height:32px; margin-top:20px; }
.buttons > .button { overflow:visible; cursor:pointer; min-width:125px; height:32px; margin:0 2px; padding:0 15px; line-height:32px; font-size:14px; border:1px solid #dfdfdf; background:#fff; border-radius:10px; }
.buttons > .button.blue { color:#fff; border-color:#0099d2 !important; background:#0099d2 !important; }
</style>