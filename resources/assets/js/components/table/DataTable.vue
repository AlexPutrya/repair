<template>
    <div class="data-table">
        <component :is="dynamicComponent"></component>
    </div>
</template>

<script>
    import AllDataTable from './AllDataTable.vue';
    import RepairTable from './RepairTable.vue';
    import TakeBackTable from './TakeBackTable.vue';
    import ClientsOrdersTable from './ClientsOrdersTable.vue';

    export default {
        computed: {
            dynamicComponent(){
                let filter = this.$store.state.filter.type;
                switch (filter){
                    case 'all':
                        return AllDataTable;
                        break;
                    case 'repair':
                        return RepairTable;
                        break;
                    case 'take_back':
                        return TakeBackTable;
                        break;
                    case 'clients_orders':
                        return ClientsOrdersTable;
                        break;
                }
            }
        },
        components: {
            AllDataTable,
            RepairTable,
            TakeBackTable,
            ClientsOrdersTable
        }
    }
</script>