import {
  component$,
  Slot,
  useSignal,
  useTask$,
  useOnWindow,
  $,
} from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

import { Navbar } from '~/components/navbar/Navbar';
import { GlobalFooter } from '~/components/global-footer/global-footer';

import './layout.css';

export default component$(() => {
  const loc = useLocation();
  const isAuth = loc.url.pathname.startsWith('/auth');

  /** 页面过渡方向 */
  const transition = useSignal<'forward' | 'back'>('forward');
  const prevPath = useSignal(loc.url.pathname);

  /* ✅ 监听浏览器后退 / 前进 */
  useOnWindow(
    'popstate',
    $(() => {
      transition.value = 'back';
      prevPath.value = loc.url.pathname;
    })
  );

  /* ✅ 响应 pathname 变化（惰性、可恢复） */
  useTask$(({ track }) => {
    track(() => loc.url.pathname);

    if (loc.url.pathname !== prevPath.value) {
      transition.value =
        loc.url.pathname.length >= prevPath.value.length
          ? 'forward'
          : 'back';

      prevPath.value = loc.url.pathname;
    }
  });

  

  return (
    <div class="app-shell">
      {!isAuth && <Navbar />}

      <div class={['page-container', transition.value]}>
        <div class="page-inner" key={loc.url.pathname}>
          <Slot />
        </div>
      </div>

      {!isAuth && (
        <GlobalFooter
          clubName="XXX 动漫社"
          description="热爱二次元 · 创作 · 技术 · 舞台"
          contactExtra="QQ群：123456789"
        />
      )}
    </div>
  );
});
