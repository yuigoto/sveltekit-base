<script>
  import { html as TestMd, attributes } from "$app/assets/data/Test.md";
  import { test } from "$app/store";
</script>

<svelte:head>
  <title>Test Page</title>
</svelte:head>

<h2>This is a test page</h2>

<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque modi
  debitis enim reiciendis id rem perferendis voluptas eius hic necessitatibus
  molestias repellat corrupti illum quia pariatur, inventore aspernatur
  temporibus?
</p>

<h3>Store-based counter:</h3>

<p>
  Using SvelteKit's store to persist data during the session. You can visit
  another page and come back, the counter will keep its value until you refresh.
</p>

<div class="store">
  <p>{$test.counter}</p>

  <button on:click={() => ($test.counter -= 1)}>
    <i class="fa fa-minus" />
  </button>

  <button on:click={() => ($test.counter += 1)}>
    <i class="fa fa-plus" />
  </button>
</div>

<h3>Markdown Loader Test:</h3>

{@html TestMd}

<h3>Markdown Frontmatter:</h3>

<pre>{JSON.stringify(attributes, null, 2)}</pre>

<style lang="scss">
  .store {
    p {
      font-size: 4rem;
      font-weight: 300;
      margin: 0;
    }

    button {
      font-size: 2rem;
      line-height: 2;
      padding: 0 1rem;
    }
  }
</style>
