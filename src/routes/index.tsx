import { component$ } from "@builder.io/qwik";
import './index.css'

export default component$(() => {
  return (
    <main class="container">
      {/* ================= Hero ================= */}
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">欢迎来到 XXX 动漫社</h1>
          <p class="hero-subtitle">
            热爱二次元 · 创作 · 技术 · 舞台
          </p>
          <p class="hero-desc">
            在这里，把想象变成舞台，把热爱变成作品。
          </p>

          <div class="hero-actions">
            <a href="#departments" class="btn primary">
              了解我们
            </a>
            <a href="#join" class="btn ghost">
              加入社团
            </a>
          </div>
        </div>

        {/* 装饰层（纯 CSS，可删） */}
        <div class="hero-bg" />
      </section>

      {/* ================= Departments ================= */}
      <section id="departments" class="departments">
        <h2 class="section-title">我们的部门</h2>

        <div class="dept-grid">
          <section id="planning" class="dept-card">
            <h3>策划部</h3>
            <p>
              负责活动策划、剧本创作、世界观设定与社团运营方案设计。
            </p>
          </section>

          <section id="tech" class="dept-card">
            <h3>技术部</h3>
            <p>
              负责官网开发、动画制作工具、舞台技术、特效与程序支持。
            </p>
          </section>

          <section id="media" class="dept-card">
            <h3>宣传部</h3>
            <p>
              负责海报设计、视频剪辑、新媒体运营与社团形象推广。
            </p>
          </section>

          <section id="perform" class="dept-card">
            <h3>演艺部</h3>
            <p>
              负责配音、舞台剧、Cosplay、Live 表演与节目排练。
            </p>
          </section>
        </div>
      </section>
    </main>
  );
});
