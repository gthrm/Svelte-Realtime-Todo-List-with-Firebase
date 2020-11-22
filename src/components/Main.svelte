<script>
  import Todos from "./Todos.svelte";

  export let user;
  export let login;
</script>

<main>
  {#if user}
    <Todos uid={user.uid} />
  {:else}<button on:click={login}> Signin with Google </button>{/if}
</main>
