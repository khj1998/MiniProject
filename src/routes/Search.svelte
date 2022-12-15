<script>
	import Box from '../Box.svelte';

    const tomorrow = new Date(Date.now() + 86400000);

    let start = [
        tomorrow.getFullYear(),
        pad(tomorrow.getMonth() + 1, 2),
        pad(tomorrow.getDate(), 2)
    ].join('-');

    let startTime = [0,0].join(':')
    let endTime = [0,0].join(':')

    let end = start;

    let promise = fetchResult();

    $: startDate = convertToDate(start);
    $: endDate = convertToDate(end);

    $: convertToStartTime = convertToTime(startTime);
    $: convertToEndTime = convertToTime(endTime);

    function setForm() {
        promise = fetchResult();
    }

    function pad(x, len) {
        x = String(x);
        while (x.length < len) x = `0${x}`;
        return x;
    }

    function convertToDate(str){
        const split = str.split('-');
        return new Date(+split[0], +split[1]-1, +split[2]);
    }

    function convertToTime(str){
        const split = str.split(':');
        return new Date(0,0,0, +split[0], +split[1]);
x    }

    async function fetchResult(){
        const res = await fetch('http://localhost:3000/v1/search',{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                startDate,
                endDate,
                startTime : convertToStartTime,
                endTime : convertToEndTime
            }),
        })
        return await res.json();
    }
</script>

<Box>
	<h2>빠른 검색</h2>
    <label>
        시작 날짜
        <input type=date bind:value={start}>
    </label>

    <label>
        종료 날짜
        <input type=date bind:value={end}>        
    </label>

    <label>
        시작 시간
        <input type=time bind:value={startTime}>
    </label>

    <label>
        종료 시간
        <input type=time bind:value={endTime}>
    </label>
    
    <button
        on:click={setForm}
        disabled="{(startDate > endDate) || (convertToStartTime >= convertToEndTime)}"
    >검색하기</button>

    <style>
        input, button {
            display: block;
            margin: 0.5em 0;
            font-size: inherit;
        }
    </style>

    <p>{start}</p>
    {#await promise}
        <p>...waiting</p>
    {:then result}
        {#each result.emptyRoom as name, i}
        <li>{i+1} : {name}</li>
        {/each} -->
    {:catch error}
        <p style = "color:red">{error.message}</p>
    {/await}

</Box>