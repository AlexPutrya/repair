<template>
    <div id="app">
        <NavBar/>
        <ModalWindow/>
        <DataTable/>
    </div>
</template>

<script>
    import NavBar from './components/NavBar.vue';
    import ModalWindow from './components/modal/ModalWindow.vue';
    import DataTable from './components/table/DataTable.vue';

    export default {
        components: {
            NavBar,
            ModalWindow,
            DataTable
        }
    }
</script>