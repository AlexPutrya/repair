<template>
    <div id="myModal" v-bind:class="['modal', {show: isActive}]">

        <!-- Modal content -->
        <div class="modal-content">
            <p>Some text in the Modal..</p>
            <component :is="dynamicComponent"></component>
            <button v-on:click="closeModal" class="btn btn-warning">Отмена</button>
            <button class="btn btn-success">Создать</button>
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
                if(this.$store.state.modal.content == 'repair'){
                    return RepairForm;
                }else if(this.$store.state.modal.content == 'take_back'){
                    return TakeBackForm;
                }else if(this.$store.state.modal.content == 'client_order'){
                    return ClientOrderForm;
                }
            }
        },
        methods: {
            closeModal(){
                this.$store.dispatch('closeModal');
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