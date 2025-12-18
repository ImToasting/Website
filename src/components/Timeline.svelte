<script lang="ts">
    import type {Project} from "@types";
    import ClockIcon from "@assets/clock.svg.svelte";
    import Card from "@components/Card.svelte";
    export let projects: Project[];

    let currentProject: Project = projects[0];
    let rect: DOMRectReadOnly;
    let mouseX: number = 0;
    let innerWidth: 0;

    const years = projects.map(p => p.yearStart) // get all start years
        .concat(projects.map(p => p.yearEnd)) // get all end years
        .filter((v, i, a) => a.indexOf(v) === i) // remove duplicates
        .sort() // sort
        .reverse(); // reverse, so 2024, 2023, ...

    function syncMouse(e: MouseEvent) {
        mouseX = e.clientX;
    }

    function onResize(e: UIEvent) {
        mouseX = 0;
    }
</script>

<svelte:window on:resize={onResize} bind:innerWidth={innerWidth} />

<div class="timeline-container">
    <div
            bind:contentRect={rect}
            on:mousemove={syncMouse}
            class="timeline-wrapper"
            role="none"
    >
        <div class="timeline-gradient">
            <div class="timeline">

                {#each years as year, yIndex}

                    <div class="timeline-year" style="grid-column: {yIndex + 1}">
                        <span>{year}</span>
                    </div>

                    {#each projects.filter(p => p.yearEnd === year) as project}

                        <div
                                class:active={currentProject === project}
                                on:mouseover={() => {currentProject = project}}
                                on:focus={() => {currentProject = project}}
                                role="button"
                                tabindex="0"
                                class="timeline-project"
                                style="
                             grid-column: {yIndex + 1} / span {year - project.yearStart + 1};
                             grid-row: {project.row + 1};
                             background-color: #{project.color}aa
                             "
                        >
                            <span>
                                {project.title}
                            </span>
                        </div>

                    {/each}

                {/each}

            </div>
        </div>
    </div>

    <Card project={currentProject} />

    <div
            class:hidden={mouseX === 0}
            style="left: {mouseX}px; height: {rect?.height}px;"
            class="timeline-cursor"
    />

</div>

<style lang="scss">
  .timeline-container {
    width: 100%;
    display: flex;
    min-height: 400px;
    column-gap: 30px;
    row-gap: 20px;
  }

  .timeline-wrapper {
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    position: relative;
    flex: 7;
  }

  .timeline-gradient {
    &::before,
    &::after {
      top: 0;
      position: absolute;
      width: 30px;
      height: 100%;
      content: "";
      z-index: 3;
    }

    &::before {
      left: 0;
      background: linear-gradient(to right, var(--color-background) 10%, transparent 80%);
    }

    &::after {
      right: 0;
      background: linear-gradient(to left, var(--color-background) 10%, transparent 80%);
    }
  }

  .timeline {
    position: relative;
    display: grid;
    grid-auto-columns: 1fr;
    grid-gap: 10px;
    overflow-x: auto;
    padding: 0 30px 20px 30px;
    border-top: 1px solid oklch(.8 0 0);
    max-width: 100%;
  }

  .timeline-year {
    font-weight: bold;
    min-width: 70px;
    padding: 10px;
    cursor: default;
    border-left: 1px solid oklch(.8 0 0);
  }

  .timeline-project {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 18px;
    height: 45px;
    border-radius: 8px;
    font-size: 14pt;
    font-weight: 500;
    transition: background .2s ease, color .2s ease;
    color: white;
    min-width: max-content;
    cursor: default;

    &:not(:hover):not(.active) {
      background-color: var(--color-ui-element) !important;
      color: var(--color-text) !important;
    }
  }

  .timeline-cursor {
    position: absolute;
    display: block;
    width: 2px;
    background-color: red;
    z-index: 4;
    left: -22vw;
    pointer-events: none;
    opacity: .5;
  }

  @media only screen and (max-width: 1100px) {
    .timeline-container {
      flex-direction: column;
    }

    :global(.card-panel-wrapper),
    .timeline-wrapper {
      flex: 1;
      margin: 0;
    }

    :global(.card-panel-wrapper) {
      min-height: 260px;
    }
  }
</style>