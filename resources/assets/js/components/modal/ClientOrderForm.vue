<template>
    <form>
        <h2>Заказы клиентов</h2>
        <div class="form-group">
            Клиент
            <input v-model="client" type="text" class="form-control">
        </div>
        <div class="form-group">
            Номер телефона
            <input v-model="phone" type="text" class="form-control">
        </div>
        <div class="form-group">
            Статус
            <select  v-model="status" class="form-control">
                <option>Зарегистрирован</option>
                <option>Отправлен</option>
                <option>Принят от поставщика</option>
                <option>Отдан клиенту</option>
                <option>Не удовлетворен</option>
            </select>
        </div>
        <div class="form-group">
            Номенклатура товара
            <input v-model="product" type="text" class="form-control">
        </div>
        <div class="form-group">
            Описание заказа
            <textarea v-model="description" rows="3" class="form-control">
            </textarea>
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
              client: '',
              phone: '',
              status: '',
              product: '',
              description: ''
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