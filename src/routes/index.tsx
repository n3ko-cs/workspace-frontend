// ================================
// src/routes/index.tsx
// ================================
import { component$ } from "@builder.io/qwik";
import { Navbar } from "../components/navbar/Navbar";

export default component$(() => {
  return (
    <>
      <Navbar />
      <main class="container">
        <section class="hero">
          <h1>欢迎来到 XXX 动漫社</h1>
          <p>热爱二次元 · 创作 · 技术 · 舞台</p>
        </section>

        <section id="planning" class="dept">
          <h2>策划部</h2>
          <p>负责活动策划、剧本创作、世界观设定与社团运营方案设计。</p>
        </section>

        <section id="tech" class="dept">
          <h2>技术部</h2>
          <p>负责官网开发、动画制作工具、舞台技术、特效与程序支持。</p>
        </section>

        <section id="media" class="dept">
          <h2>宣传部</h2>
          <p>负责海报设计、视频剪辑、新媒体运营与社团形象推广。</p>
        </section>

        <section id="perform" class="dept">
          <h2>演艺部</h2>
          <p>负责配音、舞台剧、Cosplay、Live 表演与节目排练。</p>
        </section>
      </main>
    </>
  );
});
