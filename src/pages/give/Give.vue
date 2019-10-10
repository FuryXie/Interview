<template>
    <div>
        <give-topbar></give-topbar>
        <give-main></give-main>
    </div>
</template>

<script>
import giveTopbar from './components/Topbar'
import giveMain from './components/Main'

export default {
    name:'give',
    components:{
        giveTopbar,
        giveMain,
    }
}
</script>

<style>
    
</style>