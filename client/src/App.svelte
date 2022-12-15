
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
	
	<nav>
		<Link to ="/">Home</Link>
		<Link to ="about">About</Link>
		<Link to ="reservation">reservation</Link>
		<Link to ="search">search</Link>
	</nav> 
	<div>
		<Route path="/"><Home /></Route>
		<Route path="about" component="{About}"></Route>
		<Route path="reservation"><Reservation /></Route>
		<Route path="search"><Search /></Route>
	</div>
</Router>
 