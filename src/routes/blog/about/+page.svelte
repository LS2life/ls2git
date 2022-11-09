<script>
	import {fly} from 'svelte/transition';
	import imp from '$lib/images/background_img1.jpg';
</script>

<span in:fly="{{delay:300}}">
	<div>
		<span>
			<img src={imp} alt="Improvements" title="Improvements" />
		</span>
	</div>
	<span class="dext">
		<h1>개선고려사항 메모 Improvements </h1>
		<hr>
		<h2>
			<li>
				여기도 fabicon 적용이 안된다. 
			</li>
			<li>
				메뉴 선택시 header가 닫혀서 가능한 스크롤 범위를 줄이는게 좋을 것같다. 
			</li>
			<li>
				다크모드 적용이 필요한가?
			</li>
			<li>
				페이지가 단조로울때는 색을 추하는게 좋은게 패턴을 추가하는게 좋은가?
			</li>
			<li>
				oracle cloud 연결
			</li>
			<li>
				포트폴리오 추가
			</li>

		</h2>
	</span>
</span>
<div />

<style>
	/* span, h2,h1,p,div,img {border: 1px solid red;} */
	span {
		display: flex;
		align-items: center;
	}
	.dext {
		display: block;
	}
	hr { 
		width: 17em;
		margin-left: 1.2em;
	}
	img {
		padding: 10px;
		border: gray;
		filter: grayscale(0.9);
		width: 25em;
	}
	h1 {
		text-align: left;
		padding-left: 0.5em;
	}
	h2 {
		padding: 1em;
		line-height: 2em;
	}
	li {
		color: gray;
		text-align: left;
	}
</style>
