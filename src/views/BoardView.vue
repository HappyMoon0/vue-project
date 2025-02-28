<template>
	<div class="boardview"> 
		<table>
			<colgroup>
				<col style="width:18.5%">
				<col style="width:">
			</colgroup>
			<tbody>
				<tr>
					<th scope="row">제목</th>
					<td class="title">{{boardItem.subject}}</td>
				</tr>
				<tr>
					<th scope="row">내용</th>
					<td>{{boardItem.content}}</td>
				</tr>
				<tr>
					<th scope="row">작성자</th>
					<td>{{boardItem.writer}}</td>
				</tr>
				<tr>
					<th scope="row">작성일자</th>
					<td>{{boardItem.writedate}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup> 
const boardItem = {
    "no": 1,
            "subject": "테스트 제목1",
            "content": "테스트 내용1",
            "writer": "testid1",
            "writedate": "2021-08-09 13:00:00"
}
</script>

<style scoped>
.boardview { width:100%; margin: 20px auto; }
.boardview table { width:100%; border-top:2px solid #1d4281; border-spacing:0; }
.boardview table th { padding:8px 10px 10px 10px; vertical-align:middle; color:#1d4281; font-size:14px; border-bottom:1px solid #ccc; background:#f8f8f8; }
.boardview table td { padding:7px 20px 9px 20px; text-align:left; vertical-align:middle; border-bottom:1px solid #ccc; font-size:14px; line-heighT:150%; }
.boardview table td.title { font-weight: bold; }
</style>