import { $, QRL } from '@builder.io/qwik';

export const ripple$ = $((ev: MouseEvent) => {
  const button = ev.currentTarget as HTMLElement;
  const rect = button.getBoundingClientRect();

  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.left = `${ev.clientX - rect.left}px`;
  ripple.style.top = `${ev.clientY - rect.top}px`;

  button.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);
});
