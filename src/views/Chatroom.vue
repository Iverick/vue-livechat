<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewMessageForm />
  </div>
</template>

<script>
import { watch } from '@vue/runtime-core'
import ChatWindow from "../components/ChatWindow.vue"
import Navbar from "../components/Navbar.vue"
import NewMessageForm from "../components/NewMessageForm.vue"
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'

export default {
  components: { Navbar, NewMessageForm, ChatWindow },
  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Welcome' })
      }
    })
  }
}
</script>

<style>

</style>