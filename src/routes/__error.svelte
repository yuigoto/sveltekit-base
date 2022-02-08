<script context="module" lang="ts">
  import type { ErrorLoad } from "@sveltejs/kit";

  export const load: ErrorLoad = ({ error, status }) => {
    return {
      props: {
        title: `Error ${status}`,
        message: error?.message || null,
        status: status,
      },
    };
  };
</script>

<script lang="ts">
  export let title: string;
  export let message: string;
  export let status: number;
</script>

<h1>{title}</h1>

<p>{message}</p>

<p>Status: <strong>{status}</strong></p>
