import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

interface TestStore {
  status: boolean;
  counter: number;
}

export const test: Writable<TestStore> = writable({
  status: false,
  counter: 0,
});

export const toggleStatus = () => {
  test.update((state) => {
    return Object.assign({}, state, {
      status: !state.status,
    });
  });
};
