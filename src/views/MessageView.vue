<template>
    <div>
      <!-- 로딩 상태 표시 -->
      <div v-if="isLoading">로딩 중...</div>
  
      <!-- 오류 메시지 표시 -->
      <div v-if="error" class="error-message">
        오류가 발생했습니다: {{ error }}
      </div>
  
      <!-- 응답 데이터 표시 -->
      <div v-if="responseData">
        <pre>{{ responseData }}</pre>
      </div>
  
      <!-- API 요청 버튼 -->
      <button @click="fetchData" :disabled="isLoading">API 요청</button>
    </div>
  </template>
  
  <script setup>
  import Requester from '@/Requester';
import { getCurrentInstance, ref } from 'vue'; // ref 임포트 
  
  // 상태 변수들
  const isLoading = ref(false);
  const error = ref(null);
  const responseData = ref(null);
  
  const instance = getCurrentInstance();
  
  // 데이터를 가져오는 함수
  const fetchData = () => {
    const url = '/api/data'; // 요청할 URL
    const params = { key: 'value' }; // 필요 시 추가 파라미터
   
   
    Requester.request('https://codingapple1.github.io/vue/more0.json', params, (status, request, response) => {
      isLoading.value = false;
  
      if (status === 200) {
        responseData.value = response; // 성공 시 응답 데이터 저장
      } else {
        error.value = response; // 실패 시 오류 메시지 저장
      }
    });
  };
  </script>
  
  <style scoped>
  .error-message {
    color: red;
    font-weight: bold;
  }
  </style>
  