<template>
    <form>
        <div class="form-group">
            Клиент
            <input v-model="client" type="text" class="form-control">
        </div>
        <div class="form-group">
            Номер телефона
            <input v-model="phone" type="text" class="form-control">
        </div>
        <div class="form-group">
            Партнер
            <input v-model="partner" type="text" class="form-control">
        </div>
        <div class="form-group">
            Статус
            <select  v-model="status" class="form-control">
                <option>Зарегистрирован</option>
                <option>Отправлен</option>
                <option>Получен обратно</option>
                <option>Закрыт</option>
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
    </form>
</template>

<script>
    export default {
        data() {
            return {
                client: '',
                phone: '',
                partner: '',
                status: '',
                product: '',
                serial: '',
                description: '',
                track_number: ''
            }
        }
    }
</script>

<style scoped>

</style>