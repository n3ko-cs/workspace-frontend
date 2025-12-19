import {
  component$,
  useSignal,
  useComputed$,
  $,
} from "@builder.io/qwik";
import "./activity.css";

type Dept = "策划部" | "技术部" | "宣传部" | "演艺部";

interface ActivityEvent {
  id: number;
  title: string;
  dept: Dept;
  date: string;
}

const DAY_MS = 86400000;
const WINDOW_DAYS = 14;
const HALF_WINDOW = WINDOW_DAYS / 2;

const MIN_DAY_WIDTH = 40;
const MAX_DAY_WIDTH = 240;

// 惯性参数
const FRICTION = 0.92;
const STOP_THRESHOLD = 0.02;

export default component$(() => {
  /* ======================
   * 核心状态
   * ====================== */
  const centerTime = useSignal(new Date("2025-03-01"));
  const activeDept = useSignal<Dept | "ALL">("ALL");
  const dayWidth = useSignal(120);

  /* 拖拽 / 惯性状态 */
  const isDragging = useSignal(false);
  const lastX = useSignal(0);
  const lastTime = useSignal(0);
  const velocity = useSignal(0); // px/ms
  const inertiaId = useSignal<number | null>(null);

  /* ======================
   * Mock 数据
   * ====================== */
  const events: ActivityEvent[] = [
    { id: 1, title: "春季企划立项", dept: "策划部", date: "2025-02-20" },
    { id: 2, title: "官网重构", dept: "技术部", date: "2025-02-25" },
    { id: 3, title: "PV 发布", dept: "宣传部", date: "2025-03-01" },
    { id: 4, title: "舞台排练", dept: "演艺部", date: "2025-03-03" },
    { id: 5, title: "世界观讨论会", dept: "策划部", date: "2025-03-06" },
  ];

  /* ======================
   * 可见事件
   * ====================== */
  const visibleEvents = useComputed$(() => {
    const centerMs = centerTime.value.getTime();

    return events.filter((e) => {
      if (activeDept.value !== "ALL" && e.dept !== activeDept.value) {
        return false;
      }

      const diffDays = Math.floor(
        (new Date(e.date).getTime() - centerMs) / DAY_MS
      );

      return Math.abs(diffDays) <= HALF_WINDOW;
    });
  });

  /* ======================
   * 时间控制
   * ====================== */
  const snapToDate$ = $((iso: string) => {
    centerTime.value = new Date(iso);
  });

  const moveWindow$ = $((days: number) => {
    const d = new Date(centerTime.value);
    d.setDate(d.getDate() + days);
    centerTime.value = d;
  });

  /* ======================
   * 滚轮缩放
   * ====================== */
  const zoomTimeline$ = $((e: WheelEvent) => {
    e.preventDefault();

    const delta = Math.sign(e.deltaY);
    let next = dayWidth.value - delta * 12;

    if (next < MIN_DAY_WIDTH) next = MIN_DAY_WIDTH;
    if (next > MAX_DAY_WIDTH) next = MAX_DAY_WIDTH;

    dayWidth.value = next;
  });

  /* ======================
   * 拖拽开始
   * ====================== */
  const onMouseDown$ = $((e: MouseEvent) => {
    if (inertiaId.value !== null) {
      cancelAnimationFrame(inertiaId.value);
      inertiaId.value = null;
    }

    isDragging.value = true;
    lastX.value = e.clientX;
    lastTime.value = performance.now();
    velocity.value = 0;
  });

  /* ======================
   * 拖拽中（记录速度）
   * ====================== */
  const onMouseMove$ = $((e: MouseEvent) => {
    if (!isDragging.value) return;

    const now = performance.now();
    const dx = e.clientX - lastX.value;
    const dt = now - lastTime.value;

    lastX.value = e.clientX;
    lastTime.value = now;

    if (dt > 0) {
      velocity.value = dx / dt; // px/ms
    }

    const msPerPixel = DAY_MS / dayWidth.value;
    const deltaMs = -dx * msPerPixel;

    centerTime.value = new Date(
      centerTime.value.getTime() + deltaMs
    );
  });

  /* ======================
   * 拖拽结束 → 惯性释放
   * ====================== */
  const onMouseUp$ = $(() => {
    isDragging.value = false;

    let v = velocity.value;
    if (Math.abs(v) < STOP_THRESHOLD) return;

    const step = () => {
      v *= FRICTION;

      if (Math.abs(v) < STOP_THRESHOLD) {
        inertiaId.value = null;
        return;
      }

      const msPerPixel = DAY_MS / dayWidth.value;
      const deltaMs = -v * msPerPixel * 16; // ~16ms/frame

      centerTime.value = new Date(
        centerTime.value.getTime() + deltaMs
      );

      inertiaId.value = requestAnimationFrame(step);
    };

    inertiaId.value = requestAnimationFrame(step);
  });

  /* ======================
   * 渲染
   * ====================== */
  return (
    <main class="activity-page">
      <h1>社团活动时间轴</h1>

      <div class="dept-switch">
        {(["ALL", "策划部", "技术部", "宣传部", "演艺部"] as const).map((d) => (
          <button
            key={d}
            class={{ active: activeDept.value === d }}
            onClick$={() => (activeDept.value = d)}
          >
            {d === "ALL" ? "全部" : d}
          </button>
        ))}
      </div>

      <div class="time-controls">
        <button onClick$={() => moveWindow$(-7)}>◀ 回溯</button>
        <span class="center-date">
          {centerTime.value.toISOString().slice(0, 10)}
        </span>
        <button onClick$={() => moveWindow$(7)}>推进 ▶</button>
      </div>

      <div
        class="timeline-wrapper"
        onWheel$={zoomTimeline$}
        onMouseDown$={onMouseDown$}
        onMouseMove$={onMouseMove$}
        onMouseUp$={onMouseUp$}
        onMouseLeave$={onMouseUp$}
      >
        <div class="timeline">
          <div class="center-line" />

          {visibleEvents.value.map((e) => {
            const offsetDays = Math.floor(
              (new Date(e.date).getTime() -
                centerTime.value.getTime()) /
                DAY_MS
            );

            return (
              <div
                key={e.id}
                class={`event ${e.dept}`}
                style={{
                  left: `${offsetDays * dayWidth.value}px`,
                }}
                onClick$={() => snapToDate$(e.date)}
              >
                <strong>{e.title}</strong>
                <time>{e.date}</time>
                <span class="dept">{e.dept}</span>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
});
