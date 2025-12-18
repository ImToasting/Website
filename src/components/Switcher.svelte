<script lang="ts">
  import type { Writable } from "svelte/store";

  export let store: Writable<number>;
  export let options: string[];
</script>

<div class="view-switcher">
  {#each options as option, index}
    <button
      class:active={$store === index}
      on:click={() => {
        store.set(index);
      }}
    >
      {option}
    </button>
  {/each}
</div>

<style lang="scss">
  .view-switcher {
    display: flex;
    width: fit-content;
    justify-content: center;
    gap: 20px;
    padding: 20px 30px;
    margin: 40px auto;
    border-radius: 50px;
    background-color: var(--color-ui-element);

    button {
      background: none;
      border: none;
      cursor: pointer;
      margin: 0;
      padding: 0;
      font-size: 1em;
      font-weight: bold;
      opacity: 0.6;
      transition: opacity 0.1s ease;
      color: var(--color-text);
    }
  }

  .view-switcher .active {
    font-weight: bold;
    opacity: 1;
  }
</style>

