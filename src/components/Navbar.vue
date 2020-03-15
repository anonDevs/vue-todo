<template>
    <div class="navbar">
        <img class="navbar__logo" src="../assets/logo.png" alt="Logo"/>
        <ul class="navbar__ul">
            <li class="navbar__li">
                <a href="#" class="navbar__a">Home</a>
            </li>
            <li class="navbar__li">
                <a href="#" class="navbar__a">About</a>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "Navbar"
  };
</script>

<style scoped>
    .navbar {
        display: flex;
        background: grey;
        align-items: center;
        height: 80px;
    }

    .navbar .navbar__logo {
        margin-right: auto;
        width: 60px;
        height: 60px;
        margin-left: 20px;
    }

    .navbar .navbar__ul {
        display: flex;
    }

    .navbar .navbar__li {
        list-style: none;
        display: flex;
        align-items: center;
    }

    .navbar .navbar__a {
        padding: 30px;
        color: white;
        transition: all 0.2s;
    }

    .navbar .navbar__a:hover {
        background: white;
        color: black;
    }
</style>
