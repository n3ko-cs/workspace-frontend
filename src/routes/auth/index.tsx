import { component$ } from "@builder.io/qwik";
import { routeAction$ } from "@builder.io/qwik-city";
import { AuthShell } from "./auth-shell";
import { AuthIsland } from "./auth-island";
import "./auth.css";

export const useAuthAction = routeAction$(async () => {
  return { success: true };
});

export default component$(() => {
  return (
    <AuthShell>
      <AuthIsland />
    </AuthShell>
  );
});
