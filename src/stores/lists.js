import { reactive, computed, } from 'vue'
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
    const getDetail = (index) => computed(() => list[index])

    // action
    //addlistfunction
    function addList(params) {
        if (params) {
            list.push(params)
        }
    }
    //removelist function
    const removeList = (index) => {
        //use splite to delete instead on filter then
        list.splice(index, 1)
    }
    //edit list function
    const editList = (index, data) => {
        list[index] = data
    }

    return { list, getDetail, addList, removeList, getList, editList }
})