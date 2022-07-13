<!--W3c HTML5 명세 근거 반드시 독스트링 표기-->
<!DOCTYPE html>

<!--태그	속성 "속성값"	-->
<html 		lang = "ko">

<!--헤드 태그-->
	<head>

<!--메타 태그:	웹페이지 추가정보를 전달.	-->
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!--
	링크 태그:	웹페이지에 다른 파일 추가.
	rel 태그:    relaionship의 약자, 현재 문서와 링크된 문서의 연관관계 명시
-->
		<link rel="icon" href ="\favicon.ico" />

<!--타이틀 태그:	웹페이지 탭에 들어가는 제목	-->
		<title>Svelte + Vite App</title>

<!--
	스크립트 태그:	스크립트를 번역하면 '영화나 방송의 대본'
	src 속성: source의 약자
-->
		<script src = "#" ></script >

<!--스타일 태그:	웹페이지에 스타일시트 추가	-->
		<style ></style >

<!--베이스 태그:	웹페이지의 기본경로를 지정	-->
		<base href = "#" >


	</head>
	<body>
<!--H1~6 제목글자 태그: 숫자가 커질 수록 글자가 작아진다.	-->
		<h1>h1~6 제목글자 태그</h1>

	<!--글자 형태 태그: -->
		<h2><b>굵은글자 태그</b></h2>
		<h2><i>이텔릭 태그</i></h2>
		<h2><small>작은글자 태그</small></h2>
		<h2><sup>윗첨자 태그</sup></h2>
		<h2><sub>아래첨자 태그</sub></h2>
		<h2><ins>밑줄 글자 태그</ins></h2>
		<h2><del>취소선</del></h2>

<!--줄바꿈 태그	-->
		<br />

<!--수평 줄 태그-->
		<hr />

<!--p 태그:	본문글자 태그, 하나의 단락을 만들 수 있다, Paragraph의 줄임말-->
		<p>본문 단락 생성</p>

<!--
	a 태그: 앵커 태그, 웹페이지 내부에서 특정한 위치로 이동할 때 사용.
	href 속성: 하이퍼텍스트 참조(hypertext reference)라는 뜻,
 			   빈링크는 #을 입력.
-->
		<a href = "https://www.naver.com" ></a >
		<a href = "#" ></a >

<!--
	id 속성: id 이름을 href에 넣으면 href 클릭시 id쪽으로 이동.
			속성이 중복되면 먼저 나오는 쪽으로 이동.
			고유식별자 용도로 사용. 중복금지
-->
		<a href = "#GoGoGo" ></a >
				|
				| 이동
				v
		<h1 id="GoGoGo"></h1>
<!--목록 태그:-->
		<ul>순서가 없는 목록 태그
			<li>
				Unordered List
				목록 요소
			</li>
		</ul>

		<ol>순서가 있는 목록 태그
			<il>
				Ordered List
				목록 요소
			</il>
		</ol>

<!--정의 태그:  사전처럼 정의 목록을 사용함.    -->
		<dl>
			<dt>dl 태그</dt>
			<dd>defintion list의 약자, 용어를 설명하는 목록으로 만든다.</dd>
			<dt>dt</dt>
			<dd>defintion term의 약자, 용어의 제목을 넣을 때 사용.</dd>
			<dt>dd</dt>
			<dd>defintion description의 약자, 용어를 설명할 때 사용.</dd>
		</dl>

<!--
	테이블 태그:
	border 속성: 표 테두리의 두께
-->
		<table  border="1">

<!--
	tr 태그: table row의 약자, 데이블 열
	th 태그: table header의 약자, 행 내부의 제목 셀
	td 태그: thabe data의 약자, 행 내부의 일반셀
	rowspan 속성: 셀의 높이 지정
	colspan 속성: 셀의 너비 지정
-->

<!--caption, colgroup, thead, tbody, tfoot 태그 등도 있다.-->
			<tr>표 내부의 행, 가로줄
				<th>행 내부의 제목 셀</th>
				<th>행 내부의 제목 셀</th>
			</tr>
			<tr>
				<td>행 내부의 일반 셀</th>
				<td>행 내부의 일반 셀</th>
			</tr>
		</table>

<!--
	img 태그: 이미지 위치를 넣으면 이미지를 웹에 출력
	src 속성(property): 이미지 경로 지정
	alt 속성(property): 이미지가 없을 때 나오는 글자 지정
	placehold.it 페이지: 이미지 가로세로 크기는 알고 있지만 이미지가 없을때
-->
		<img src = "http://placehold.it/300x200" alt = "" width="" height="" />

<!--
	audio 태그: src속성으로 불러옴. mp3, ogg, wav 만 사용가능,
				mp4를 넣으면 소리만 나옴 -->
		<audio src = "#" ></audio >

<!--vidio 태그: src속성으로 경로지정. mp4, WebM, OGV  -->
		<video src = "#" ></video >

<!--
	metgod 속성:  입력데이터의 전달방식을 선택.
	get 요청: 주소에 데이터를 입력해서 보내는 방식.
-->
		<form method="get">

<!--
	label 태그: 해당 id 속성에 대해 인풋태그를 설명하는데 사용.
                for로 설명하고있는 id의 속성을 써주어야 한다.
-->
			<label for="search">인풋태그를 설명하는데 사용</label>

<!--input(입력양식) 태그: 주로 form 태그내부에 사용
	type 속성: 입력양식의 형태를 지정,
				button, checkbox, file, hidden, image, password, radio, reset,
				submit, text, value,
				color, date, datetime, datetime-local, emael, month, number,
				range, search, tel, time, url, week 등
-->
			<input id="search" type = "text" name = "search">
			<input type = "submit" >
		</form >

<!--
	action 속성:  입력데이터의 전달 위치를 지정.
		post 요청: get와 달리 비공개로 데이터를 전달하는 방식.
-->
		<form action="post">
			<input type = "text" name = "search">
			<input type = "submit" >
		</form >

<!--
	textarea 태그:    여러줄 글자를 입력할 때 사용.
		cols 속성:    너비지정
		rows 속성:    높이지정
		id   속성:    identifier(식별자)의 약자.
		name 속성:    form컨트롤 요소의 값(value)를 서버로 전송하기위한 속성.
 -->
		<textarea name = "reple" id = "reple" cols = "30" rows = "10" >Type here.
</textarea >

<!--select 태그: 선택양식을 생성 -->
		<select multiple="multiple" name="#" id="#" >
			<optgroup label="IronMan">
				<option>MK.1</option>
				<option>MK.2</option>
				<option>MK.3</option>
				<option>MK.4</option>
				<option>MK.5</option>
			</optgroup>
			<optgroup label="AI">
				<option>Dum-E</option>
				<option>U</option>
				<option>자비스</option>
				<option>프라이데이</option>
				<option>베로니카</option>
				<option>이디스</option>
			</optgroup>
		</select >








<div id="app"></div>
		<script type="module" src="\src\main.js"></script>
	</body>
</html>
