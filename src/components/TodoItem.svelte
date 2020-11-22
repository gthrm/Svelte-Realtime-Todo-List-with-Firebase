<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function remove() {
    dispatch("remove", { id });
  }

  function toggleStatus() {
    let newStatus = !complete;
    dispatch("toggle", {
      id,
      newStatus,
    });
  }

  export let id; // document ID
  export let text;
  export let complete;
</script>

<style>
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid;
    margin: 5px 0;
    padding: 5px 5px;
  }
  button {
    width: 30px;
    height: 30px;
    min-width: 30px;
    min-height: 30px;
    margin: 0 5px;
    font-size: 10px;
    text-align: center;
    padding: 0;
  }
  .is-complete {
    text-decoration: line-through;
    color: green;
  }
  .todoitem__text {
    width: 100%;
  }
</style>

<li>
  {#if complete}
    <span class="todoitem__text is-complete">{text}</span>
    <button on:click={toggleStatus}>❌</button>
  {:else}
    <span class="todoitem__text">{text}</span>
    <button on:click={toggleStatus}>✔️</button>
  {/if}

  <button on:click={remove}>🗑</button>
</li>
