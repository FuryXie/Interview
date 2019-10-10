<template>
    <div>
        <redpacket-topbar></redpacket-topbar>
        <redpacket-main></redpacket-main>
        <redpacket-bottombar></redpacket-bottombar>
    </div>
</template>

<script>
import redpacketTopbar from './components/Topbar'
import redpacketMain from './components/Main'
import redpacketBottombar from './components/Bottombar'

export default {
    name:'redpacket',
    components:{
        redpacketTopbar,
        redpacketMain,
        redpacketBottombar,
    }
}
</script>

<style>
    
</style>