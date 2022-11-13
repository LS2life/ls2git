<script>
    import RHeader from '$lib/blog/b_nav_resume/B_nav_resume_header.svelte'
    import RSkill from '$lib/blog/b_nav_resume/B_nav_resume_skill.svelte'
    import Certificate from '$lib/blog/b_nav_resume/B_nav_resume_certificate.svelte'
    import HistoryLine from '$lib/blog/b_nav_resume/B_nav_his.svelte'
</script>

<RHeader />
<div>
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
        border: 1px solid red;
        width: 100%;
    }

</style>