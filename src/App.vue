<template>
	<div id="app">
		<TopNav :MenuList="MenuList" v-on:ViewChanged="UDPView"/>
		<Map/>
		<Login v-if="View == 'Login'" v-on:ViewChanged="UDPView"/>
		<Signin v-if="View == 'Signin'" v-on:ViewChanged="UDPView"/>
	</div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    import TopNav from './components/TopNav.vue';
    import Login from './components/TopNavMenus/Login.vue';
    import Signin from './components/TopNavMenus/Signin.vue';

    import Map from './components/Map.vue';

    @Component({
        components: {
            TopNav,
	        Map,
	        Login,
	        Signin
        },
    })
    export default class App extends Vue {
        private MenuList:string[] = ["Login", "Signin"];
		private View:string = "Map";
		private Plans:object[] = [{index: 1, Location: {lat: 33.450901, lng: 126.570967}}, {index: 2, Location: {lat: 33.450901, lng: 126.570967}}];

        private UDPView(nextView:string) {
		    this.View = nextView;
		}
    }
</script>

<style>
	#app {
		width: 100%;
		height: 100%;
	}
</style>
