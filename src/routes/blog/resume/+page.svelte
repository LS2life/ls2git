<script>
	import { fly } from 'svelte/transition';
</script>

<h1 in:fly="{{delay:300}}">RESUME</h1>
<ul>
    <li>
		<h4>2018. 2 도시재생기업(CRC) 주체 육성 연계사업 추진 </h4>
		<p>8개 단체/ '사회적기업가 육성사업' 도시재생분야 선정·육성</p>
	</li>
	<li>
		<h4>2018. 5 전국도시재생지원센터협의회 창립  </h4>
		<p>전국 광역·기초·현장 도시재생지원 센터가 결의한 협의회 출범 </p>
		<span></span>
	</li>
	<li>
		<h4>2018. 7 '2025 서울시 도시재생 전략계획' 변경 공고 </h4>
		<p>도시재생 기본계획 정비 </p>
	</li>
	<li>
		<h4>2018. 8 국토교통부 도시재생 뉴딜사업 선정 </h4>
		<p>7개소(2017 서울형 도시재생활성화지역 중 5개소, 신규지역  2개소) </p>
	</li>
	<li>
		<h4>2018. 9 '2018 서울형 도시재생활성화지역'  지정 </h4>
		<p>5개소 </p>
    </li>
</ul>

<style>
	/* Title */
	h1 {
		font-size: 3em;
		font-weight: 900;
		font-family: 'Stylish', sans-serif;
	}

	/* History */
	ul {
		border: 1px solid red;
		position: flex; 
		list-style: none;
	}
 	ul:before {
		border: 1px solid orange;
		content: " "; 
		display: block; 
		position: absolute; 
		left: 50%;
		margin-left: -2px; 
		padding: 20px 0; 
		width: 3px; 
		height: 100%; 
		background-color: #eee;
	}
	ul li { 
		position: relative; 
		margin-bottom:20px; 
		width: 50%;
	}
	ul li:before { 
		border: 1px solid pink;
		content: " ";
		display: block; 
		position: absolute; 
		top: 0px; 
		left: 80%;
		width: 75px; 
		height: 38px;
		background-image: url(https://surc.or.kr/assets/icon-history-72e35a81b533771b1d598ddb83c79a8a761f88f76248478975f944c06bffefb8.png); 
		background-size: 78px 38px;}
	ul li:nth-child(odd) { 
		padding-left: 59.5%;
	}
	ul li:nth-child(odd):before { 
		transform: rotate(180deg); 
		left: 43%;    
		right: auto;}
	ul li h4 {
		border: 1px solid red;
		padding-top:6px; 
		margin-bottom: 10px; 
		font-size:18px;color: #3f454b; 
		font-weight: bold;
	}
	ul li p { 
		border: 1px solid green;
		font-size: 15px;    
		line-height: 1.7;    
		letter-spacing: 0.01rem;    
		color: #707984;    
		word-break: keep-all;
	}

	ul li span{
		border: 1px solid green;
		position:relative; 
		display: block; 
		margin-top:20px; 
		width: 320px; 
		height: 180px; 
		background:#dfdfdf
	}
	ul li span:before { 
		border: 1px solid blue;
		content:'images box'; 
		position:absolute; 
		top:50%; left:50%; 
		margin-top:-15px; 
		margin-left: -35px; 
		font-size:14px;
		}
</style>
