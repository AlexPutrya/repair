<template>
    <div v-bind:class="['modal', {show: isActive}]">
        <div class="modal-content">
            <component :is="dynamicComponent"></component>
        </div>
    </div>
</template>

<script>
    import RepairForm from './RepairForm.vue';
    import TakeBackForm from './TakeBackForm.vue';
    import ClientOrderForm from './ClientOrderForm.vue';

    export default {
        computed: {
            isActive(){
                return this.$store.state.modal.isActive;
            },
            dynamicComponent(){
                let content = this.$store.state.modal.content;
                switch(content){
                    case 'repair':
                        return RepairForm;
                        break;
                    case 'take_back':
                        return TakeBackForm;
                        break;
                    case 'client_order':
                        return ClientOrderForm;
                        break;
                }
                // if(content == 'repair'){
                //     return RepairForm;
                // }else if(content == 'take_back'){
                //     return TakeBackForm;
                // }else if(content == 'client_order'){
                //     return ClientOrderForm;
                // }
            }
        },
        components : {
            RepairForm,
            TakeBackForm,
            ClientOrderForm
        }

    }
</script>

<style scoped>
    .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    /* Modal Content/Box */
    .modal-content {
        background-color: #fefefe;
        margin: 15% auto; /* 15% from the top and centered */
        padding: 20px;
        border: 1px solid #888;
        width: 80%; /* Could be more or less, depending on screen size */
    }
    
    .show {
        display: block;
    }
</style>