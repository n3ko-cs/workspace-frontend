// src/routes/department/planning/index.tsx
import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import './planning.css'

export default component$(() => {
  return (
    <div class="dept-detail planning-theme">
      <div class="dept-container">
        <Link href="/department" class="back-link">
          ← 返回部门列表
        </Link>

        <h1 class="dept-title">策划部</h1>

        <div class="dept-content">
          <p class="intro-paragraph">
            策划部是社团的大脑与指挥中心。我们负责从0到1构思活动主题、设计流程、协调资源，并确保每一个环节无缝衔接。
          </p>

          <section class="dept-section">
            <h2 class="section-title">主要职责</h2>
            <ul class="dept-list">
              <li>年度/季度活动规划</li>
              <li>活动流程脚本撰写</li>
              <li>预算编制与资源申请</li>
              <li>跨部门协作统筹</li>
            </ul>
          </section>

          <section class="dept-section">
            <h2 class="section-title">我们需要这样的你</h2>
            <ul class="dept-list">
              <li>逻辑清晰，有全局观</li>
              <li>擅长沟通与组织</li>
              <li>对创意与细节同样重视</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
});