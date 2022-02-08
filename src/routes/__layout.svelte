<script lang="ts">
  import "$app/styles/main.scss";
</script>

<div class="layout__base">
  <header>
    <h1>SvelteKit Base</h1>
    <p>An opinionated SvelteKit boilerplate.</p>
  </header>

  <nav>
    <a href="/">Home</a>
    <a href="/test">Test Page</a>
    <a href="/preload">Preloaded Data</a>
    <a href="/api" target="_blank">API Endpoint</a>
  </nav>

  <div class="main">
    <div class="container">
      <slot />
    </div>
  </div>

  <footer>&copy;YUITI 2022</footer>
</div>

<style lang="scss">
  header {
    width: 100%;
    color: #fff;
    background: #2c2c2c;
    padding: 2rem;
  }

  nav {
    color: #fff;
    background: #1d1d1d;
    padding: 0 1rem;
    display: flex;

    a {
      color: currentColor;
      font-size: 1.25rem;
      font-weight: 300;
      line-height: 2;
      text-transform: uppercase;
      text-decoration: none;
      padding: 0 1rem;
      display: inline-block;

      &:hover {
        color: #ccc;
      }

      &:active {
        color: #2c2c2c;
        background: #fff;
      }
    }
  }

  footer {
    width: 100%;
    color: #fff;
    background: #1d1d1d;
    padding: 2rem;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: block;
  }

  .main {
    width: 100%;
    flex: 1;
  }

  .layout__base {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
