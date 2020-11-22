<script>
  import { db } from "../utils/firebase";
  export let user;

  // Form Text
  let text = "Some task...";

  function add() {
    if (text) {
      db.collection("todos").add({
        uid: user.uid,
        text,
        complete: false,
        created: Date.now(),
      });
      text = "";
    }
  }
</script>

<style>
  input {
    display: block;
    width: 100%;
  }

  button {
    min-width: 150px;
    margin-left: 10px;
  }

  .footer__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
</style>

<footer>
  {#if user}
    <div class="footer__wrapper">
      <input bind:value={text} />
      <button on:click={add}>Add Task</button>
    </div>
  {/if}
</footer>
