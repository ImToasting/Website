<script lang="ts">
    import GitHubIcon from '@assets/github.svg.svelte';
    import LinkedInIcon from '@assets/linkedin.svg.svelte';
    import XIcon from '@assets/x.svg.svelte';
    import MailIcon from '@assets/mail.svg.svelte';
    import Socials from "@config/socials.json";
    import Tooltip from "@components/Tooltip.svelte";
</script>

<section id="contact">
    <h1>Contact me here</h1>
    <div class="socials">
        <Tooltip text="Mail">
            <a rel="noreferrer" target="_blank" href={Socials.mail}>
                <MailIcon />
            </a>
        </Tooltip>

        <Tooltip text="GitHub">
            <a rel="noreferrer" target="_blank" href={Socials.github}>
                <GitHubIcon />
            </a>
        </Tooltip>

        <!--
        <Tooltip text="LinkedIn">
            <a rel="noreferrer" target="_blank" href={Socials.linkedin}>
                <LinkedInIcon />
            </a>
        </Tooltip>
        -->

        <Tooltip text="X / Twitter">
            <a rel="noreferrer" target="_blank" href={Socials.x}>
                <XIcon />
            </a>
        </Tooltip>
    </div>
</section>

<style lang="scss">
  section {
    margin: 80px 0 0 0;
  }

  h1 {
    text-align: center;
  }

  .socials {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 100px 50px 0;

    & :global(svg) {
      width: 48px;
      opacity: .8;
      transition: opacity .2s ease;

      &:hover {
        opacity: 1;
      }

      & :global(path) {
        fill: var(--color-text);
      }
    }
  }

  @media screen and (max-width: 650px) {
    .socials {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin: 80px 0 0;

      & :global(svg) {
        width: 38px;
      }
    }
  }
</style>
