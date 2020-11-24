<script>
  import Layout from "./components/Layout.svelte";
  import { auth, googleProvider } from "./utils/firebase";
  import { authState } from "rxfire/auth";

  let user;

  console.log("process.env", process.env);

  authState(auth).subscribe((u) => console.log("u", u) || (user = u));

  function login() {
    auth.signInWithPopup(googleProvider);
  }

  function logout() {
    auth.signOut();
  }
</script>

<Layout {user} {login} {logout} />

<!-- <section>
  {#if user}
    <Profile
      displayName={user.displayName}
      photoURL={user.photoURL}
      uid={user.uid} />
    <button on:click={logout}>Logout</button>
    <hr />
    <Todos uid={user.uid} />
  {:else}<button on:click={login}> Signin with Google </button>{/if}
</section> -->
