<script lang="ts">
    import Keyboard from "@components/Keyboard.svelte";

    const year = new Date().getFullYear()
</script>

<footer>
    <Keyboard />
    <div>
        <p>© {year} Sreeman</p>
    </div>
</footer>

<style lang="scss">
  footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 200px 0 0 0;
    padding: 5px 0 10px 0;
    border-top: 1px solid var(--color-stroke);

    & > :global(div) {
      opacity: .7;
    }
  }

  p {
    font-size: 14px;
    display: inline-block;
  }

  @media screen and (max-width: 650px) {
    footer {
      justify-content: flex-end;
    }
  }
</style>
