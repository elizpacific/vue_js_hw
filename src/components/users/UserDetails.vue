<template>
  <div class="container">
    <h2>User details</h2>
  </div>

  <table class="table table-striped">
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><b>ID:</b> {{ user.id }}</li>
      <li class="list-group-item"><b>Name:</b> {{ user.name }}</li>
      <li class="list-group-item"><b>Email:</b> {{ user.email }}</li>
    </ul>
  </table>
</template>

<script>
import { onMounted } from 'vue'
import useUsers from "../../composables/users";
export default {
  name: "UsersDetails",
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const { errors, user, getUser } = useUsers()
    onMounted(getUser(props.id))
    return {
      errors,
      user,
      getUser
    }
  }
}
</script>

<style scoped>
</style>