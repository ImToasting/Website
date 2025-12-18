<script lang="ts">
    import ClockIcon from "@assets/clock.svg.svelte";
    import type {Project} from "@types";

    export let project: Project;
</script>

<div class="card-panel-wrapper" style="background-color: #{project.color}">
    <div>
        <div>
            <h2>{project.title}</h2>
            <span class="card-panel-time">
                            <ClockIcon />
                {#if (project.yearStart === project.yearEnd)}
                        {project.yearStart}
                    {:else}
                        {project.yearStart} - {project.yearEnd}
                    {/if}
                </span>
        </div>
        <p>{project.description}</p>
    </div>

    <div class="card-panel-buttons">
        {#if (project.website)}
            <a href={project.website} target="_blank" rel="noreferrer">
                <button tabindex="0" class="button-website">
                    Website
                </button>
            </a>
        {/if}
        {#if (project.github)}
            <a href={project.github} target="_blank" rel="noreferrer">
                <button tabindex="0" class="button-github">
                    GitHub
                </button>
            </a>
        {/if}
    </div>
</div>

<style lang="scss">
    .card-panel-wrapper {
        flex: 3;
        -webkit-box-shadow: 0px 0px 10px 0px var(--color-shadow);
        box-shadow: 0px 0px 10px 0px var(--color-shadow);
        border-radius: 24px;
        padding: 24px 24px;
        z-index: 4;
        color: rgba(255, 255, 255, 0.87);
        transition: background .2s ease;
        border-right: 4px solid hsla(0,0%,100%,.273);
        border-top: 4px solid hsla(0,0%,100%,.273);
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h2 {
            margin: 0.5em 0;
        }
    }

    .card-panel-time {
        margin-top: 6px;
        border: 1px solid currentColor;
        font-weight: bold;
        padding: 4px 10px;
        border-radius: 50px;
        font-size: .9em;
        user-select: none;
        -webkit-user-select: none;
        cursor: default;
        display: inline-flex;
        align-items: center;
        gap: 8px;

        & :global(svg) {
            height: 16px;

            & :global(path) {
                color: currentColor;
            }
        }
    }

    .card-panel-buttons {
        display: flex;
        gap: 12px;

        a {
            flex: 1;

            button {
                width: 100%;
            }
        }
    }
</style>