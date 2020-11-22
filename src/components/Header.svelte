<script>
  import Profile from "./Profile.svelte";

  export let user;
  export let logout;
</script>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  button {
    margin: 0 10px;
  }
</style>

<header>
  {#if user}
    <Profile
      displayName={user.displayName}
      photoURL={user.photoURL}
      uid={user.uid} />
    <button on:click={logout}>Logout</button>
  {:else}Hello!{/if}
</header>
