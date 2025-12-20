import { component$, PropFunction } from '@builder.io/qwik';
import type { Department } from './vnTypes';
import { DEPT_THEME } from './vnTheme';

interface Props {
  onSelect$: PropFunction<(dept: Department) => void>;
}

const DEPTS: Department[] = ['策划部', '技术部', '宣传部', '演艺部'];

export const WorldlineSelector = component$<Props>(({ onSelect$ }) => {
  return (
    <div class="worldline-select">
      <h1>选择部门</h1>

      <div class="worldline-grid">
        {DEPTS.map((d) => {
          const t = DEPT_THEME[d];
          return (
            <button
              key={d}
              class="worldline-card"
              style={{
                borderColor: t.accent,
                boxShadow: `0 0 16px ${t.glow}`,
              }}
              onClick$={() => onSelect$(d)}
            >
              {d}
            </button>
          );
        })}
      </div>
    </div>
  );
});
