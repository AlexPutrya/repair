<template>
    <form action="">
        <h2>Документ на возврат поставщику</h2>
        <div class="form-group">
            Партнер
            <input v-model="partner" type="text" class="form-control">
        </div>
        <div class="form-group">
            Статус
            <select  v-model="status" class="form-control">
                <option>Зарегистрирован</option>
                <option>Отправлен поставщику</option>
                <option>Списан поставщиком</option>
                <option>Возвращен обратно</option>
            </select>
        </div>
        <div class="form-group">
            Номенклатура товара
            <input v-model="product" type="text" class="form-control">
        </div>
        <div class="form-group">
            Серийный номер
            <input v-model="serial" type="text" class="form-control">
        </div>
        <div class="form-group">
            Описание претензии
            <textarea v-model="description" rows="3" class="form-control">
            </textarea>
        </div>
        <div class="form-group">
            ТТН отправки
            <input v-model="track_number" type="text" class="form-control">
        </div>
        <button v-on:click="closeModal" class="btn btn-warning">Отмена</button>
        <button class="btn btn-success">Создать</button>
    </form>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        data() {
            return {
                partner: '',
                status: '',
                product: '',
                serial: '',
                description: '',
                track_number: ''
            }
        },
        methods: {
            ...mapActions([
                'closeModal'
            ])
        }
    }
</script>

<style scoped>

</style>