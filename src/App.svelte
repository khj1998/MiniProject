<<<<<<< HEAD

<script>
	import {Router,Link, Route} from "svelte-routing";
	import Home from "./routes/Home.svelte";
	import About from "./routes/About.svelte";
	import Test from "./routes/Test.svelte";
	import Reservation from "./routes/reservation.svelte";
	import { link } from 'svelte-spa-router'
import Search from "./routes/Search.svelte";
	export let urls="";

</script>

<!-- <a use:link href="./">Home</a>
<a use:link href="./about">About</a> -->

<title>소프트웨어 마에스트로 빈 강의실 조회</title>

<Router url="{urls}">
	<div>
		<Route path="/"><Home /></Route>
		<Route path="about" component="{About}"></Route>
		<Route path="reservation"><Reservation /></Route>
		<Route path="search"><Search /></Route>
	</div>
</Router>
 
=======
<script>
	import Search from './Search.svelte';
	import Box from './Box.svelte';
	let name='fafa';
	let age=29;
</script>
<h1>Hello {name} </h1>

<h1>Hello {age} !</h1>

>>>>>>> 1af0604fceb5949c5fd77d0e4ef1e062841821e7
