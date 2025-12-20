import {
  component$,
  useSignal,
  useVisibleTask$,
  $,
} from '@builder.io/qwik';
import type { Department, VNNode } from './vnTypes';
import { DEPT_THEME } from './vnTheme';
import { loadProgress, saveProgress } from './vnStore';
import { VNPanel } from './VNPanel';
import './department-vn-module.css';

interface Props {
  department: Department;
  nodes: VNNode[];
}

export const DepartmentVNModule = component$<Props>(
  ({ department, nodes }) => {
    const theme = DEPT_THEME[department];
    const unlocked = useSignal(0);
    const active = useSignal<number | null>(null);

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
      unlocked.value = loadProgress(department);
    });

    const complete$ = $(() => {
      unlocked.value++;
      saveProgress(department, unlocked.value);
      active.value = null;
    });

    return (
      <section
        class="dept-module"
        style={{ background: theme.background }}
      >
        <h2
          class="dept-title"
          style={{
            color: theme.accent,
            textShadow: `0 0 12px ${theme.glow}`,
          }}
        >
          {department} · 主线
        </h2>

        <div class="dept-timeline">
          {nodes.map((n, i) => {
            const locked = i > unlocked.value;
            return (
              <div
                key={n.id}
                class={{ 'vn-node': true, locked }}
                onClick$={() => !locked && (active.value = i)}
              >
                <strong>{n.title}</strong>
                <small>{n.time}</small>
              </div>
            );
          })}
        </div>

        {active.value !== null && (
          <div class="vn-overlay">
            <div class="vn-panel-wrapper">
      <VNPanel
        node={nodes[active.value]}
        onFinish$={complete$}
      />
    </div>
          </div>
        )}
      </section>
    );
  }
);
