// src/routes/layout.tsx
import {
  component$,
  useSignal,
  useOnDocument,
  $,
} from '@builder.io/qwik';
import { Slot } from '@builder.io/qwik';
import './layout.css';

export default component$(() => {
  // 控制主内容区是否显示动画
  const isAnimating = useSignal(false);

  // 每次 Qwik 恢复（即路由切换后）触发动画
  useOnDocument(
    'qresume',
    $(() => {
      isAnimating.value = true;
      // 动画结束后可选清除（非必须）
      setTimeout(() => {
        isAnimating.value = false;
      }, 300);
    })
  );

  return (
    <div class="app-layout">
      <header class="header">
        <div class="logo">NavPro</div>
        <nav class="nav">
          <a href="/">首页</a>
          <a href="/department">部门</a>
          <a href="/intro">简介</a>
          <a href="/verify" class="auth-link">登录 / 注册</a>
        </nav>
      </header>

      {/* 主内容区：带淡入动画 */}
      <main
        class={{
          'main-content': true,
          'page-fade-in': isAnimating.value,
        }}
      >
        <Slot />
      </main>

      <footer class="footer">
        © 2025 NavPro. All rights reserved.
      </footer>
    </div>
  );
});



