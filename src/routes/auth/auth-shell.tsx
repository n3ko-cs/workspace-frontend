import { component$, Slot } from "@builder.io/qwik";

export const AuthShell = component$(() => {
  return (
    <div class="auth-bg">
      <div class="auth-card">
        <Slot />
      </div>
    </div>
  );
});
