import { ref } from 'vue';
import Requester from '@/Requester';  

export function useRequest() {
  // 상태 변수들
  const isLoading = ref(false);
  const error = ref(null);
  const responseData = ref(null);

  // Requester.request 호출을 위한 함수
  const request = (url, params = {}) => {
    isLoading.value = true;
    error.value = null;
    responseData.value = null;

    // Requester.request 호출
    Requester.request(url, params, (status, request, response) => {
      isLoading.value = false;

      if (status === 200) {
        responseData.value = response; // 성공 시 응답 데이터 저장
      } else {
        error.value = response; // 실패 시 오류 메시지 저장
      }
    });
  };

  return {
    isLoading,
    error,
    responseData,
    request
  };
}
