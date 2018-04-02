<template>
    <nav>
        <div class="dropdown">
            <button v-on:click="changeVision" class="dropbtn">Создать документ</button>
            <div v-bind:class="['dropdown-content', {show: isActive}]">
                <a v-on:click="openModal('repair')"  href="#">Заявку на ремонт</a>
                <a v-on:click="openModal('take_back')"  href="#">Возврат товара</a>
                <a v-on:click="openModal('client_order')"  href="#">Заказ клиента</a>
            </div>
        </div>
        <div class="filter">
            <select v-model="filter.selected" v-on:change="changeFilter" name="filter">
                <option v-for="option in filter.options" v-bind:value="option.value">
                    {{option.text}}
                </option>
            </select>
        </div>
        <span> Selected  {{filter.selected}}</span>
        <div class="status">
            Статус документа:
            <select>
                <option v-for="status in statusList" :key="status.id">
                    {{status}}
                </option>
            </select>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return{
                filter: {
                    selected : "all",
                    options: [
                        {text: "Все документы", value: "all"},
                        {text: "Заявки на ремот", value: "repair"},
                        {text: "Возвраты", value: "take_back"},
                        {text: "Заказы клиентов", value: "clients_orders"}
                    ]
                }
            }
        },
        computed: {
          isActive(){
              return this.$store.state.dropdown.isActive
          },
            statusList(){
              switch (this.$store.state.filter.type){
                  case 'all':
                      return ['Зарегистрирован', 'Отправлен', 'Не удовлетворен'];
                  break;
                  case 'repair':
                      return ['Зарегистрирован', 'Отправлен', 'Не удовлетворен', 'Удовлетворен'];
              }

            }
        },
        methods : {
            changeVision() {
                this.$store.commit('changeDropdownVision');
            },
            openModal(content) {
                this.$store.commit('changeModalVision', true);
                this.$store.commit('setModalContent', content);
                this.$store.commit('changeDropdownVision', false);
            },
            changeFilter() {
                this.$store.commit('changeFilter', this.filter.selected);
            }
        }
    }
</script>

<style scoped>
    /* Style The Dropdown Button */
    .dropbtn {
        background-color: #4CAF50;
        color: white;
        padding: 16px;
        font-size: 16px;
        border: none;
        cursor: pointer;
    }

    /* The container <div> - needed to position the dropdown content */
    .dropdown {
        position: relative;
        display: inline-block;
    }

    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    /* Links inside the dropdown */
    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        outline: 0 !important;
    }

    /* Change color of dropdown links on hover */
    .dropdown-content a:hover {background-color: #f1f1f1}


    /* Change the background color of the dropdown button when the dropdown content is shown */
    .dropdown:hover .dropbtn {
        background-color: #3e8e41;
    }

    /* Show the dropdown menu on hover */
    .show {
        display: block;
    }

</style>