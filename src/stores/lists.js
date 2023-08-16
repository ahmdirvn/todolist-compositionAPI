import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useListStore = defineStore('list', () => {
    // state
    const list = reactive([
        {
            name: 'Irvan',
            hobby: 'Futsal',
            description: 'Every sunday'
        },
        {
            name: 'Maida',
            hobby: 'Masak',
            description: 'Every sunday'
        },

    ])

    // getter
    const getList = computed(() => list)

    // action
    function addList(params) {
        if (params) {
            list.push(params)
        }
    }

    return { list, getList, addList }
})