<script>
  import Header from "./Header.svelte";
  import Main from "./Main.svelte";
  import Footer from "./Footer.svelte";
  import Aside from './Aside.svelte'
  export let user;
  export let login;
  export let logout;
</script>

<!-- {#if user}
  <Profile
    displayName={user.displayName}
    photoURL={user.photoURL}
    uid={user.uid} />
  <button on:click={logout}>Logout</button>
  <hr />
  <Todos uid={user.uid} />
{:else}<button on:click={login}> Signin with Google </button>{/if} -->

<Header {user} {logout} />
<Main {user} {login} />
<Aside />
<Footer {user} />
