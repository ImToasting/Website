<script lang="ts">
    import '@styles/index.scss';
    import Footer from "@partials/Footer.svelte";
    import Header from "@partials/Header.svelte";
    import { page } from '$app/stores';
</script>

<div id="app">

    {#if $page.error}
        <slot />
    {:else}
        <Header />

        <main>
            <slot />
        </main>

        <Footer />
    {/if}

</div>

<style lang="scss">
  #app {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 50px;
  }

  main {
    display: flex;
    flex-direction: column;
    row-gap: 100px;
    margin: 100px 0;
  }

  @media screen and (max-width: 650px) {
    #app {
      padding: 0 30px;
    }

    main {
      margin: 0;
      row-gap: 50px;
    }
  }
</style>