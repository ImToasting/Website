<script lang="ts">
  import GitHubIcon from "@assets/github.svg.svelte";
  import LinkedInIcon from "@assets/linkedin.svg.svelte";
  import XIcon from "@assets/x.svg.svelte";
  import Socials from "@config/socials.json";
  import Menu from "@config/menu.json";
  import type { MenuItem } from "@types";
  import { scrollToAnchor } from "$lib";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  let scrollY = 0;
  const menuItems: MenuItem[] = Menu;
  let headerOffset: number;
</script>

<svelte:window bind:scrollY />

<div
  class:scrolled={scrollY > headerOffset}
  class="header-wrapper"
  bind:offsetHeight={headerOffset}
>
  <header>
    <nav id="menu">
      <ul role="menubar">
        {#each menuItems as menuItem}
          <li role="menuitem">
            <a
              href="/#{menuItem.value}"
              on:click|preventDefault={() => {
                scrollToAnchor(menuItem.value, headerOffset);
              }}
            >
              {menuItem.name}
            </a>
          </li>
        {/each}
      </ul>
    </nav>

    <div class="logo">
      {#if scrollY >= 300}
        <div
          transition:fly={{
            delay: 0,
            duration: 300,
            y: -headerOffset,
            opacity: 0.5,
            easing: quintOut,
          }}
        >
          <a
            href="#top"
            on:click|preventDefault={() => {
              scrollToAnchor("html", headerOffset);
            }}
          >
            <img
              draggable="false"
              loading="lazy"
              alt="pauel"
              src="https://github.com/imtoasting.png"
            />
          </a>
        </div>
      {/if}
    </div>

    <ul class="socials">
      <li>
        <a rel="noreferrer" target="_blank" href={Socials.github}>
          <GitHubIcon />
        </a>
      </li>
      <!--
            <li>
                <a rel="noreferrer" target="_blank" href={Socials.linkedin}>
                    <LinkedInIcon />
                </a>
            </li>
            -->
      <li>
        <a rel="noreferrer" target="_blank" href={Socials.x}>
          <XIcon />
        </a>
      </li>
    </ul>
  </header>
</div>

<style lang="scss">
  @import "@styles/mixins";

  .header-wrapper {
    position: fixed;
    z-index: 9;
    background-color: var(--color-background);
    left: 0;
    top: 0;
    width: 100%;
    margin: 0;
    transition: box-shadow 0.2s ease;

    &.scrolled {
      border-bottom: 1px solid var(--color-stroke);
    }
  }

  header {
    max-width: var(--max-width);
    margin: 0 auto;
    position: relative;
    padding: 20px 50px;
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    gap: 10px;
    height: 40px;
    user-select: none;
    -webkit-user-select: none;
  }

  ul {
    list-style: none;
    padding: 0;
    align-items: center;
    display: flex;
    gap: 40px;
    margin: 0;

    li {
      display: inline-block;
    }
  }

  nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    li a {
      color: var(--color-text);
      opacity: 0.8;
      transition: opacity 0.2s ease;
      padding: 15px 0;
      font-size: 17px;

      &:hover {
        opacity: 1;
      }
    }
  }

  .socials {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    :global(svg) {
      cursor: pointer;
      height: 24px;
      width: auto;
      padding: 1px;
      vertical-align: middle;
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }

      & :global(path) {
        fill: var(--color-text);
      }
    }
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      line-height: 1;
    }

    img {
      height: 30px;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      transition: transform 0.1s ease;
      @include loading;

      &:hover {
        transform: scale(108%);
      }
    }
  }

  @media (prefers-color-scheme: light) {
    .header-wrapper {
      &.scrolled {
        border-bottom: none;
        -webkit-box-shadow: 0px 0px 8px 0px var(--color-shadow);
        box-shadow: 0px 0px 8px 0px var(--color-shadow);
      }
    }
  }

  @media screen and (max-width: 800px) {
    header {
      grid-template-columns: auto auto;
    }

    .logo {
      display: none;
    }
  }

  @media screen and (max-width: 650px) {
    .header-wrapper {
      display: none;
    }
  }
</style>
