<script lang="ts">
    export let text: string;
</script>

<div class="tooltip-wrapper">
    <div class="tooltip-slot">
        <slot>
            <p>{text}</p>
        </slot>
    </div>
    <span class="tooltip-text">{text}</span>
</div>

<style lang="scss">
  .tooltip-text {
    font-weight: bold;
    width: 120px;
    background-color: var(--color-text);
    color: var(--color-background);
    text-align: center;
    border-radius: 50px;
    padding: 5px 0px;
    position: absolute;
    z-index: 1;
    top: 120%;
    left: 50%;
    margin-left: -60px;
    transition: opacity .2s ease-in-out;
    opacity: 0;
    pointer-events: none;
    cursor: default;

    &::after {
      content: "";
      position: absolute;
      bottom: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent var(--color-text) transparent;
    }
  }

  .tooltip-wrapper {
    position: relative;
  }

  .tooltip-slot {
    position: relative;

    &:hover ~ .tooltip-text {
      visibility: visible;
      opacity: 1;
    }
  }
</style>