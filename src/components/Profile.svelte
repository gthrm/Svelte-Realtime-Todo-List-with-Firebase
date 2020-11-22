<script>
  export let displayName;
  export let photoURL;
  export let uid;
</script>

<style>
  img {
    height: 50px;
    width: auto;
  }
  .profile__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  * {
    margin: 5px 10px;
  }
</style>

<div class="profile__wrapper">
  <img src={photoURL} width="100" alt="user avatar" />
  <h3>Hi {displayName}!</h3>
  <p>Your userID is {uid}</p>
</div>
