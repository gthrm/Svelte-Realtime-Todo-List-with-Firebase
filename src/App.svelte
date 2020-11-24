<script>
  import Layout from "./components/Layout.svelte";
  import { auth, googleProvider } from "./utils/firebase";
  import { authState } from "rxfire/auth";

  let user;

  authState(auth).subscribe((u) => (user = u));

  function login() {
    auth.signInWithPopup(googleProvider);
  }

  function logout() {
    auth.signOut();
  }
</script>

<Layout {user} {login} {logout} />
