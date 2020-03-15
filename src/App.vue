<template>
    <div id="app">
        <Navbar/>
        <Container>
            <Main/>
        </Container>
    </div>
</template>

<script>
  import Navbar from "./components/Navbar";
  import Container from "./components/layout/Container";
  import Main from "./components/Main";

  export default {
    name: "App",
    components: {
      Navbar,
      Container,
      Main
    }
  };
</script>

<style>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
</style>
