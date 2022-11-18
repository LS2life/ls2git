<script>
    export let data;
    console.log(data);
</script>
<h1>sveltekit demo</h1>

<p>안녕하세요. 제 이름은 이상수 입니다. 제 나이는 38세 입니다.</p>
<p>hi. my name is lee. I am 38 years old.</p>

<p>page.js restAPI TEST</p>
<p>안녕하세요. 제 이름은 이상수 입니다. 제 나이는 {data.age}세 입니다.</p>
<p>hi. my name is lee. I am {data.age} years old.</p>

<h3>10 Users</h3>
<ul>
    {#each data.users as user}
        <li>
            <strong>Name:</strong>{user.name}<br>
            <strong>email:</strong>{user.email}<br>
            <strong>website:</strong>{user.website}<br>
            <br>
        </li>
    {/each}
</ul>