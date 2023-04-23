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
            answersList: []
        }
    },
    async beforeMount() {
        this.answersList = await getAnswersList();
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
                    <tr v-for="answer in answersList" :key="answersList.id" class="border-b border-light-grayish-blue">
                        <td>{{ answer.score }}</td>
                        <td>{{ answer.chat.name }}</td>
                        <td>{{ answer.comments }}</td>
                        <td v-for="user in answer.users_delegated" :key="user.id">{{ user.name }}</td>
                        <td v-for="group in answer.groups_delegated" :key="group.id">{{ group.name }}</td>
                        <td>{{ dateFormat(answer.created) }}</td>
                        <td>{{ dateFormat(answer.answered_date) }}</td>
                    </tr>
                </template>
            </BaseTable>
        </div>
    </BaseCard>
</template>

<style lang="sass" scoped >

th, td
    padding-right: 4rem

</style>