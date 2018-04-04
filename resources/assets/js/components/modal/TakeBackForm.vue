<template>
    <form action="">
        <h2>Документ на возврат поставщику</h2>
        <div class="form-group">

        </div>
        <button v-on:click="closeModal" class="btn btn-warning">Отмена</button>
        <button class="btn btn-success">Создать</button>
    </form>
</template>

<script>
    import mapActions from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'closeModal'
            ])
        }
    }
</script>

<style scoped>

</style>