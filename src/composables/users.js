import { ref } from 'vue'
import http from "../http.js"
import { useRouter} from 'vue-router'

export default function useUsers() {
    const user = ref([])
    const users = ref([])

    const errors = ref([])
    const router = useRouter()


    const getUsers = async () => {
        let response = await http.get('/api/v1/users')
        users.value = response.data.data
    }

    const createUser = async (data) => {
        errors.value = []

        try {
            await http.post('/api/v1/users', data)
            await router.push({ name: 'users.index' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value.push(e.response.data.errors[key][0]);
                }
            }
        }
    }

    const getUser = async (id) => {
        try {
            let response = await http.get(`/api/v1/users/${id}`)
            user.value = response.data.data
        } catch (e) {
            errors.value.push(e.message);
        }
    }

    const destroyUser = async (id) => {
        errors.value = []

        try {
            await http.delete(`/api/v1/users/${id}`)
        } catch (e) {
            errors.value.push(e.message);
        }
    }



    return {
        errors,
        router,
        user,
        users,
        getUsers,
        destroyUser,
        createUser,
        getUser
    }
}