import {
  component$,
  Slot,
  useSignal,
  useTask$,
} from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

import { Navbar } from '~/components/navbar/Navbar';
import { GlobalFooter } from '~/components/global-footer/global-footer';

import './layout.css';

export default component$(() => {
  const loc = useLocation();

  /** 页面过渡方向：前进 / 后退 */
  const transition = useSignal<'forward' | 'back'>('forward');
  const prevPath = useSignal(loc.url.pathname);

  useTask$(({ track }) => {
    track(() => loc.url.pathname);

    transition.value =
      loc.url.pathname.length >= prevPath.value.length
        ? 'forward'
        : 'back';

    prevPath.value = loc.url.pathname;
  });

  return (
    <div class="app-shell">
      <Navbar />

      <div
        class={[
          'page-container',
          transition.value,
        ]}
      >
        <Slot />
      </div>

      <GlobalFooter
        clubName="XXX 动漫社"
        description="热爱二次元 · 创作 · 技术 · 舞台"
        contactExtra="QQ群：123456789"
      />
    </div>
  );
});
