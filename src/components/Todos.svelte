<script>
  import TodoItem from "./TodoItem.svelte";
  import { db } from "../utils/firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  // User ID passed from parent
  export let uid;

  // Query requires an index, see screenshot below
  const query = db
    .collection("todos")
    .where("uid", "==", uid)
    .orderBy("created");

  const todos = collectionData(query, "id").pipe(startWith([]));

  function updateStatus(event) {
    const { id, newStatus } = event.detail;
    db.collection("todos").doc(id).update({ complete: newStatus });
  }

  function removeItem(event) {
    const { id } = event.detail;
    db.collection("todos").doc(id).delete();
  }
</script>

<style>
  ul {
    margin: 0;
    padding: 0;
  }
</style>

<ul>
  {#each $todos as todo}
    <TodoItem
      id={todo.id}
      text={todo.text}
      complete={todo.complete}
      on:remove={removeItem}
      on:toggle={updateStatus} />
  {/each}
</ul>
