<script setup>
import BaseTable from '../tables/BaseTable.vue';
import BaseCard from './BaseCard.vue';
import dayjs from 'dayjs';

const answersList = [
    {
        "id": "605f6bfca290e1878451d91c",
        "nps_id": "605f6bfca290e1878451d91c",
        "score": 10,
        "comments": "Atendimento muito bom",
        "created": "2021-06-23T18:39:28.297661",
        "answered_date": "2021-06-23T18:39:28.297661",
        "expiration_date": "2021-06-23T18:39:28.297661",
        "ip_address": "127.0.0.1",
        "chat": {
            "id": "5ff6cd03673c118da70fddad",
            "name": "Chat Test"
        },
        "users_delegated": [
            {
                "id": "5bb7b391cda19e6318a07cb6",
                "name": "Fulano de Tal"
            }
        ],
        "groups_delegated": [
            {
                "id": "60c342fcdd84477a70026596",
                "name": "Comercial"
            }
        ]
    },
    {
        "id": "605f6bfca290e1878451d91c",
        "nps_id": "605f6bfca290e1878451d91c",
        "score": 10,
        "comments": "Atendimento muito bom",
        "created": "2021-06-23T18:39:28.297661",
        "answered_date": "2021-06-23T18:39:28.297661",
        "expiration_date": "2021-06-23T18:39:28.297661",
        "ip_address": "127.0.0.1",
        "chat": {
            "id": "5ff6cd03673c118da70fddad",
            "name": "Chat Test"
        },
        "users_delegated": [
            {
                "id": "5bb7b391cda19e6318a07cb6",
                "name": "Fulano de Tal"
            }
        ],
        "groups_delegated": [
            {
                "id": "60c342fcdd84477a70026596",
                "name": "Comercial"
            }
        ]
    },]

const dateFormat = (date) => {
    return dayjs(date).format('DD/MM/YYYY HH:mm:ss')
}
</script>

<template>
    <BaseCard>
        <h4 class="uppercase font-semibold">Listagem de respostas</h4>
        <div class="overflow-x-auto pb-16">
            <BaseTable class="">
                <template #tableHeaders>
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

<style lang="sass" scoped>


</style>