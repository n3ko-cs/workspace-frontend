// src/routes/department/index.tsx
import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import './department.css';

export default component$(() => {
  const departments = [
    {
      id: 'planning',
      name: '策划部',
      description: '负责活动创意、流程设计与资源统筹，是每场精彩背后的蓝图绘制者。',
      bgClass: 'planning-bg',
    },
    {
      id: 'performance',
      name: '演艺部',
      description: '汇聚舞台表演人才，编排节目、训练演员，用艺术点亮每一次演出。',
      bgClass: 'performance-bg',
    },
    {
      id: 'tech',
      name: '技术部',
      description: '提供音视频、灯光、直播与设备支持，用技术保障活动流畅运行。',
      bgClass: 'tech-bg',
    },
    {
      id: 'promotion',
      name: '宣传部',
      description: '负责视觉设计、文案撰写与媒体推广，让每一次活动声名远扬。',
      bgClass: 'promotion-bg',
    },
  ];

  return (
    <div class="department-overview">
      <h1>社团部门介绍</h1>

      {departments.map((dept) => (
        <div key={dept.id} class={`department-block ${dept.bgClass}`}>
          <div class="department-block-content">
            <h2>{dept.name}</h2>
            <p>{dept.description}</p>
            {/* 👇 只有这个 Link 是可点击的 */}
            <Link href={`/department/${dept.id}`} class="department-link">
              查看详细介绍
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
});