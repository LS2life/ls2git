<script>
	import { fly } from 'svelte/transition';
    import RHeader from '$lib/blog/b_nav_resume/B_nav_resume_header.svelte'
    import RSkill from '$lib/blog/b_nav_resume/B_nav_resume_skill.svelte'
    import Certificate from '$lib/blog/b_nav_resume/B_nav_resume_certificate.svelte'
    import HistoryLine from '$lib/blog/b_nav_resume/B_nav_his.svelte'
</script>

    <div in:fly="{{delay:300}}">
        <RHeader />
    </div>
    <div in:fly="{{delay:300}}">
        <span class="skills">
            <div>
                <RSkill />
            </div>
            <div>
                <Certificate />
            </div>
        </span>
        <span class="hist">
            <HistoryLine />
        </span>
    </div>

<style>
    div{
        display: inline-flex;
        width: 100%
    }
    .skills {
        width: 29%;
    }
    .hist{
        /* border: 1px solid red; */
        width: 100%;
        /* padding: 0 20px; */
        margin: -6px 10px;
    }

</style>