<script>
    import eMail from '$lib/images/email_icon.png'
    import User from '$lib/images/user_icon.png'
    import {elasticOut} from 'svelte/easing'

    function spin(node, { duration }) {
		return {
			duration,
			css: t => {
				const eased = elasticOut(t);

				return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${~~(t * 360)},
						${Math.min(100, 1000 - 1000 * t)}%,
						${Math.min(50, 500 - 500 * t)}%
					);`
			}
		};
	}
</script>

<h1>CONTACT</h1>
<hr />
<br>
<div>
    <div class="centered">
        <img src={eMail} alt="email icon">
        <span>
            <p in:spin="{{duration:4000}}">lovemylife00@naver.com</p>
        </span>
    </div>
</div>

<style>
    hr { width: 12em; }
    img { height: 3em; }
    div {
        align-items: center;
        margin:auto;
        display: flex;
        justify-content: center;
    }
    span {
        margin: auto;
        padding-left: 2em; 
        font-size: 1.2em;
    }

    /* img, span,div,a{border: 1px solid red;} */

</style>