<script lang="ts">
    import { page } from '$app/stores';
</script>

<div class="error">
    <h1>{$page.error?.message ?? "Error"}</h1>
    <p>Have you lost your way? <a href="/">Back to homepage</a></p>
</div>

<style lang="scss">
    .error {
      min-height: 80vh;
      height: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
</style>