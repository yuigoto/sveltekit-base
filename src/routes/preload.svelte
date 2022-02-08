<script context="module" lang="ts">
  export async function load({ fetch }) {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((e) => e.json())
      .then((json) => {
        return json;
      });

    return {
      props: {
        posts,
      },
    };
  }
</script>

<script lang="ts">
  import { html as TestMd, attributes } from "$app/assets/data/Test.md";

  type PostItem = {
    id: number;
    title: string;
    body: string;
    userId: number;
  };

  export let posts: Array<PostItem> = [];
</script>

<svelte:head>
  <title>Preloaded Data</title>
</svelte:head>

<h2>Preloading data from an API</h2>

{#each posts as post (post.id)}
  <h4><strong>{post.id}</strong> - {post.title}</h4>
  <p>{post.body}</p>
{/each}
