import { component$, Slot } from '@builder.io/qwik';
import { useStyles$ } from '@builder.io/qwik';

export default component$(() => {
  useStyles$(`
    body {
      margin: 0;
      background-color: #000;
      color: white;
      font-family: 'Helvetica Neue', Arial, sans-serif;
    }
    .app-layout {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 60px;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      padding: 0 2rem;
      z-index: 100;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    .logo {
      font-size: 1.2rem;
      font-weight: bold;
    }
    .nav {
      margin-left: auto;
      display: flex;
      gap: 1.5rem;
      align-items: center;
    }
    .nav a {
      color: white;
      text-decoration: none;
      opacity: 0.9;
    }
    .nav a:hover {
      opacity: 1;
    }
    .auth-link {
      color: #f9c5d1 !important;
      font-weight: bold;
    }
    .main-content {
      flex: 1;
      margin-top: 60px;
    }
    .footer {
      padding: 2rem;
      background: #0a0a0a;
      text-align: center;
      color: #888;
      font-size: 0.9rem;
    }
  `);

  return (
    <div class="app-layout">
      <header class="header">
        <div class="logo">XXX</div>
        <nav class="nav">
          <a href="/">首页</a>
          <a href="/department">部门</a>
          <a href="/intro">简介</a>
          {/* 👇 关键：跳转到 /verify */}
          <a href="/verify" class="auth-link">登录 / 注册</a>
        </nav>
      </header>

      <main class="main-content">
        <Slot />
      </main>

      <footer class="footer">
        © 2025 XXX. All rights reserved.
      </footer>
    </div>
  );
});