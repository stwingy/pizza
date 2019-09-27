import { useState, useEffect } from 'react'


let auth = window.firebase.auth()
const provider = new window.firebase.auth.GoogleAuthProvider()

export function useAuthentication() {

    const [authentication, setAuthentication] = useState("loading")
    useEffect(() => {
        auth.onAuthStateChanged(
            function (user) {
                if (user) {
                    setAuthentication(user)
                } else {
                    setAuthentication()
                }
            },
            function (error) {
                console.log(error)
            }
        )

    }, [])
    function login() {
        auth.signInWithPopup(provider)

    }
    function logout() {
        auth.signOut()
            .then(
                function () {

                }
            ).catch(
                function (error) {

                }
            )
    }

    return { login, loggedIn: authentication, logout }
}