import { component$, useSignal } from '@builder.io/qwik';
import { WorldlineSelector } from './WorldlineSelector';
import { DepartmentVNModule } from './DepartmentVNModule';
import type { Department, VNNode } from './vnTypes';

const DATA: Record<Department, VNNode[]> = {
  策划部: [
    {
      id: 'p1',
      title: '世界观起稿',
      time: '2024-03',
      story: ['策划部开启了故事的第一笔。'],
    },
  ],
  技术部: [
    {
      id: 't1',
      title: '系统构筑',
      time: '2024-04',
      story: ['代码开始编织世界。'],
    },
  ],
  宣传部: [
    {
      id: 'm1',
      title: '视觉公开',
      time: '2024-05',
      story: ['世界开始被看见。'],
    },
  ],
  演艺部: [
    {
      id: 'a1',
      title: '舞台初演',
      time: '2024-06',
      story: ['舞台灯光亮起。'],
    },
  ],
};

export const AnimeVNActivity = component$(() => {
  const current = useSignal<Department | null>(null);

  return (
    <div class="vn-page">
      {current.value === null ? (
        <WorldlineSelector onSelect$={(d) => (current.value = d)} />
      ) : (
        <DepartmentVNModule
          department={current.value}
          nodes={DATA[current.value]}
        />
      )}
    </div>
  );
});
