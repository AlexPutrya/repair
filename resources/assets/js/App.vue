<template>
    <div id="app">
        <NavBar/>
        <ModalWindow/>
    </div>
</template>

<script>
    import NavBar from './components/NavBar.vue'
    import ModalWindow from './components/modal/ModalWindow.vue'

    export default {
        components: {
            NavBar,
            ModalWindow
        }
    }
</script>