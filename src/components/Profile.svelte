<script lang="ts">
    import banner from '@assets/banner.png';
</script>

<div class="profile" style="position: relative">
    <h1 class="visually-hidden">Sreeman Reddy</h1>

    <div class="banner" style="background-image: url({banner})">
    </div>

    <div class="logo-wrapper">
        <img draggable="false" loading="lazy" alt="pauel" src="https://github.com/imtoasting.png" />
    </div>
</div>

<style lang="scss">
  @import "@styles/mixins";

  .profile {
    margin-top: 50px;
  }

  .banner {
    display: block;
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 82%;
    background-position-x: center;
    border-radius: 16px;
    @include loading;
  }

  .logo-wrapper {
    position: absolute;
    top: 100px;
    left: 40px;
    z-index: 2;

    > img {
      border: 4px solid var(--color-background);
      border-radius: 30%;
      width: 128px;
      aspect-ratio: 1 / 1;
      display: block;
      @include loading;
    }
  }

  @media screen and (max-width: 650px) {
    .logo-wrapper {
      left: 0;
      top: 78px;

      > img {
        width: 96px;
      }
    }

    .profile {
      margin: 0;
    }

    .banner {
      height: 150px;
      margin: 0 -50px;
      border-radius: 0;
    }
  }
</style>