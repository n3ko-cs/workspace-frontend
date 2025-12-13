import { component$, Slot } from '@builder.io/qwik';
import { Navbar } from '~/components/navbar/Navbar';
import { GlobalFooter } from '~/components/global-footer/global-footer';

export default component$(() => {
  return (
    <div class="app-layout">
      {/* 全局导航栏 */}
      <Navbar />

      {/* 页面内容 */}
      <main class="app-main">
        <Slot />
      </main>

      {/* 全局页脚 */}
      <GlobalFooter
        clubName="XXX 动漫社"
        description="热爱二次元 · 创作 · 技术 · 舞台的综合动漫社团"
        contactEmail="contact@xxx-anime.club"
        contactExtra="百团大战为唯一招新渠道"
      />
    </div>
  );
});
