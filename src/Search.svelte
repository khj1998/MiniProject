<script>
	import Box from './Box.svelte';

    const tomorrow = new Date(Date.now() + 86400000);

    let start = [
        tomorrow.getFullYear(),
        pad(tomorrow.getMonth() + 1, 2),
        pad(tomorrow.getDate(), 2)
    ].join('-');

    let startTime = [0,0]
    let endTime = [0,0]

    let end = start;

    $: startDate = convertToDate(start);
    $: endDate = convertToDate(end);

    function setDateTime() {
            
    }

    function pad(x, len) {
        x = String(x);
        while (x.length < len) x = `0${x}`;
        return x;
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
    
    <button>
        on:click={setDateTime}
        disabled="{(startDate >= endDate)}"
    검색하기</button>
    
    <style>
        input, button {
            display: block;
            margin: 0.5em 0;
            font-size: inherit;
        }
    </style>
</Box>