// src/routes/layout.tsx
import {
  component$
} from '@builder.io/qwik';
import { Slot } from '@builder.io/qwik';
import './layout.css';

export default component$(() => {

  return (
    <div class="app-layout">
      <header class="header">
        <div class="logo">XXX</div>
        <nav class="nav">
          <a href="/">首页</a>
          <a href="/department">部门</a>
          <a href="/verify" class="auth-link">登录 / 注册</a>
        </nav>
      </header>

      {/* 主内容区：带淡入动画 */}
      <main
        class={{
          'main-content': true
        }}
      >
        <Slot />
      </main>

      <footer class="footer">
        © 2025 n3ko. All rights reserved.
      </footer>
    </div>
  );
});



