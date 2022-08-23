<template>
  <div class="container">
    <h2>Users</h2>
    <hr>
    <div class="content-actions">
      <router-link :to="{ name: 'users.create' }">
        Create user
      </router-link>
    </div>
    <div class="alert alert-danger" role="alert" v-if="errors.length !== 0">
      <ul>
        <li v-for="error in errors">
          {{ error }}
        </li>
      </ul>
    </div>
  </div>
  <table class="table table-striped">
    <thead>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th></th>
    </thead>
    <tbody>
    <template v-for="user in users">
      <tr>
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>
          <router-link :to="{ name: 'users.details', params: { id: user.id} }">View</router-link>
<!--          <a href="#" @click.prevent="deleteUser(user.id)">Delete</a>-->
        </td>
      </tr>
    </template>
    </tbody>
  </table>
</template>
<script>
import useUsers from '../../composables/users'
import { onMounted } from 'vue'
export default {
  name: "UsersIndex",
  setup() {
    const { errors, users, getUsers, destroyUser } = useUsers()
    const deleteUser = async (id) => {
      if (!window.confirm('You sure?')) {
        return
      }
      await destroyUser(id)
      await getUsers()
    }
    onMounted(getUsers)
    return {
      errors,
      users,
      deleteUser
    }
  }
}
</script>
<style scoped>
</style>