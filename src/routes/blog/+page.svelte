<script>
	import RadioT from '$lib/images/radio.png';
	import {fly} from 'svelte/transition'
</script>

<span in:fly="{{ delay:300}}">
	<div>
		<span>
			<img src={RadioT} alt="radio" title="radio" />
		</span>
	</div>
	<span class="dext">
		<h2>
			<p>
				옛날 어렸을적부터 '프로그래머', '개발자' 하면 괴랄하고 이지적인 이미지를 많이 떠올렸었는데,
				자란 곳이 거의 산골인걸 생각해보면 용, 해태, 기린, 여친과 비슷한 맥락의 상상의 직업 정도
				였던것 같습니다.
			</p>
			<p>
				그땐 마왕이 살던 시대, 숨가쁘게 살아가면서도 이 세상 어느 곳에서도 그대 숨결을 느낄 수
				있다고 감성감성한 편지를 쓰던 그런 때였었더랬죠.
			</p>
			<p>
				지금은 뭐.. 감성적인 코드편집자는 숨은 쉴 수있는가하는 의문이 뒷통수 언저리로 떠오를 때 쯤.
				'커피'와 '효율'이 다가와 '커피는 피인가?'하는 의문으로 바꿔주고 가는 대수롭지 않은 일상을
				다반사로 지내고 있는 것 같습니다.
			</p>
			<p>
				'아니, 이게 왜 되지?' 와 '아니, 이게 왜 안되지?'를 방황하며, 나빌레라하는 프로가
				되지않기위해 샤브작샤브작 걸어가 봅니다.
			</p>
		</h2>
	</span>
</span>

<style>
	span {
		display: flex;
	}
	img {
		padding: 10px;
		border: gray;
		filter: grayscale(0.9);
		width: 25em;
	}
	h2 {
		padding: 1em;
	}
	p {
		color: gray;
		text-align: left;
	}
</style>
