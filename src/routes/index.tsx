import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      {/* 全屏 Hero 区示例 */}
      <div style="height: 100vh; background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://example.com/hero-bg.jpg') center/cover no-repeat; display: flex; align-items: center; justify-content: center; text-align: center;">
        <div>
          <h1 style="font-size: 3rem; margin-bottom: 1rem;">欢迎来到XXXX</h1>
          <p style="font-size: 1.2rem;">XX还有X秒到达XXXX</p>
          <p style="font-size: 1.2rem;">写这段时我自己都没有绷住</p>
        </div>
      </div>

      {/* 内容区块 */}
      <section style="padding: 4rem 2rem; max-width: 1200px; margin: 0 auto;">
        <h2>占位文本</h2>
        <p>这里是内容区域，可自由扩展。</p>
      </section>
    </>
  );
});