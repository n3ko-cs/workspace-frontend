import { $, useSignal, type Signal } from "@builder.io/qwik";

export function useTyping(source: Signal<string>) {
  const text = useSignal("");
  const timer = useSignal<number>();

  const start$ = $(() => {
    if (timer.value) {
      clearInterval(timer.value);
    }

    text.value = "";
    const full = source.value;
    let i = 0;

    timer.value = window.setInterval(() => {
      if (i < full.length) {
        text.value += full[i++];
      } else {
        clearInterval(timer.value);
        timer.value = undefined;
      }
    }, 100);
  });

  const stop$ = $(() => {
    if (timer.value) {
      clearInterval(timer.value);
      timer.value = undefined;
    }
  });

  return {
    text,
    start$,
    stop$,
  };
}
