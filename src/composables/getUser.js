import { ref } from "vue"
import { projectAuth } from "../firebase/config"

/*
 * Method gets the initial state of the user and changes it if the auth state was changed
 */

const user = ref(projectAuth.currentUser)

projectAuth.onAuthStateChanged(_user => {
    user.value = _user
})

const getUser = () => {
    return { user }
}

export default getUser
