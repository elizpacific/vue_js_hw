<template>
  <div class="container">
    <h2>Create</h2>

    <div class="alert alert-danger" role="alert" v-if="errors.length !== 0">
      <ul>
        <li v-for="error in errors">
          {{ error }}
        </li>
      </ul>
    </div>

    <form v-on:submit.prevent="saveUser">
      <div class="mb-3">
        <label for="id" class="form-label">Choose a user</label><br>
        <select name="id" v-model="form.id">
          <option v-bind:value="user.id" v-for="user in users">{{user.id}}</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" name="name" v-model="form.name" placeholder="Name">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="text" class="form-control" name="email" v-model="form.email" placeholder="Email">
      </div>
      <input type="submit" class="btn btn-success" value="Create">
    </form>
  </div>
</template>

<script>
import {onMounted, reactive} from "vue";
import useUsers from "../../composables/users";
export default {
  name: "UsersCreate",
  setup() {
    const form = reactive({
      id: "",
      name: "",
      email: ""
    })
    const { errors, createUser, users, getUsers } = useUsers()
    const saveUser = async () => {
      await createUser(form)
    }
    onMounted(getUsers);
    return {
      errors,
      form,
      saveUser,
      users
    }
  }
}
</script>

<style scoped>
</style>
