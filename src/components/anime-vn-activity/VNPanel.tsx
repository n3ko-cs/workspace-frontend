import { component$, PropFunction } from '@builder.io/qwik';
import type { VNNode } from './vnTypes';

interface Props {
  node: VNNode;
  onFinish$: PropFunction<() => void>;
}

export const VNPanel = component$<Props>(({ node, onFinish$ }) => {
  return (
    <div class="vn-panel">
      <h3>{node.title}</h3>

      <div class="vn-story">
        {node.story.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <button class="vn-next" onClick$={onFinish$}>
        ▶ 继续剧情
      </button>
    </div>
  );
});
