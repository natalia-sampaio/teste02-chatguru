<script setup>
import { getAnswersList } from '../../services/npsRequests';
import BaseTable from '../tables/BaseTable.vue';
import BaseCard from './BaseCard.vue';
import dayjs from 'dayjs';

const dateFormat = (date) => {
    return dayjs(date).format('DD/MM/YYYY HH:mm:ss')
}
</script>

<script>
export default {
    data() {
        return {
            answersList: [],
            currentPage: 1,
            itemsPerPage: 10,
            maxPagesShown: 5
        }
    },
    methods: {
        onClickHandler(page) {
            this.currentPage = page;
        }
    },
    async beforeMount() {
        this.answersList = await getAnswersList();
    },
    computed: {
        answersPage() {
            let firstIndex = (this.currentPage-1) * this.itemsPerPage;
            let lastIndex = this.currentPage * this.itemsPerPage;
            return this.answersList.slice(firstIndex, lastIndex);
        }
    }
}
</script>

<template>
    <BaseCard>
        <h4 class="uppercase font-semibold">Listagem de respostas</h4>
        <div class="overflow-x-auto pb-8">
            <BaseTable class="w-full">
                <template #tableHeaders class="table-header">
                    <th>Nota</th>
                    <th>Nome do chat</th>
                    <th>Comentário</th>
                    <th>Usuário</th>
                    <th>Grupo</th>
                    <th>Data de criação</th>
                    <th>Data de resposta</th>
                </template>
                <template #tableRows>
                    <tr v-for="answer in answersPage" :key="answer.id" class="border-b border-light-grayish-blue">
                        <td>{{ answer.score }}</td>
                        <td>{{ answer.chat.name }}</td>
                        <td>{{ answer.comments }}</td>
                        <td><span v-for="user in answer.users_delegated" :key="user.id">{{ user.name }} <br></span></td>
                        <td><span v-for="group in answer.groups_delegated" :key="group.id">{{ group.name }} <br></span></td>
                        <td>{{ dateFormat(answer.created) }}</td>
                        <td>{{ dateFormat(answer.answered_date) }}</td>
                    </tr>
                </template>
            </BaseTable>
        </div>
        <div class="text-center">
            <vue-awesome-paginate
            :total-items="answersList.length"
            :items-per-page="itemsPerPage"
            :max-pages-shown="maxPagesShown"
            v-model="currentPage"
            :on-click="onClickHandler"
            :hide-prev-next-when-ends="true"
            prev-button-content="Página anterior"
            next-button-content="Próxima página"
            paginate-buttons-class="text-green font-bold py-2 px-4 border border-light-grayish-blue border-r-0"
            active-page-class="bg-light-grayish-blue"
            back-button-class="border-l rounded-l-xl"
            next-button-class="border-r rounded-r-xl"
          />
        </div>
    </BaseCard>
</template>

<style lang="sass" scoped >

th, td
    padding-right: 4rem
    line-height: 3rem

</style>