<script lang="ts">
    import type { Project } from "@types";
    import ClockIcon from "@assets/clock.svg.svelte";
    import Card from "@components/Card.svelte";

    export let projects: Project[];
</script>

<div class="cards-wrapper">
    <div class="cards">
        {#each projects as project}
            <Card {project} />
        {/each}
    </div>
</div>

<style lang="scss">
    .cards-wrapper {
        width: 100%;
        position: relative;
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 20px;
        align-items: stretch;

        & > div {
            min-width: 40%;
        }
    }
</style>

