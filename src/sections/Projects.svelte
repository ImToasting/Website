<script lang="ts">
    import {writable} from 'svelte/store';
    import {fade} from 'svelte/transition';
    import Switcher from "@components/Switcher.svelte";
    import Timeline from "@components/Timeline.svelte";
    import Cards from "@components/Cards.svelte";
    import type {Project} from "@types";
    import Projects from "@config/projects.json";
    import Experiences from "@config/experiences.json";
    import {onMount} from "svelte";

    const projects: Project[] = Projects;

    const store = writable(0);
    let windowWidth = 0;

    function onResize(_e: UIEvent) {
        if (windowWidth < 800) {
            store.set(1);
        }
    }
</script>

<svelte:window on:resize={onResize} bind:innerWidth={windowWidth} />

<section id="projects">
    <h1>Projects & Work</h1>

    <h2>Experience</h2>

    <div class="experiences">
        {#each Experiences as experience}
            <div>
                <h3>{experience.name}</h3>
                <ul>
                    {#each experience.contents as entry}
                        <li>{entry}</li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>

    <h2>Portfolio</h2>

    {#if (windowWidth >= 800)}
        <Switcher store={store} options={["Timeline", "Cards"]} />
    {/if}

    <div class="view-container">
        {#if $store === 0}
            <div in:fade={{ duration: 300 }}>
                <Timeline projects={projects} />
            </div>
        {:else}
            <div in:fade={{ duration: 300 }}>
                <Cards projects={projects} />
            </div>
        {/if}
    </div>

</section>

<style lang="scss">
  .view-container {
    margin-top: 60px;
  }

  .experiences {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 30px;
    margin: 0 0 100px 0;

    ul {
      padding: 0;
      display: block;
      list-style: none;

      li {
        line-height: 1.8;
      }
    }
  }

  @media screen and (max-width: 750px) {
    .experiences {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
  }
</style>
