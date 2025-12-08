import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>This is a test page</h1>
      <h2>Welcome to this website</h2>
    </>
  )
});

export const head: DocumentHead = {
  title: "Welcome to XXX",
  meta: [
    {
      name: "description",
      content: "XXX site description",
    },
  ],
};
