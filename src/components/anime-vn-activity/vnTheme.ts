import type { Department } from './vnTypes';

export const DEPT_THEME: Record<
  Department,
  {
    accent: string;
    glow: string;
    background: string;
  }
> = {
  策划部: {
    accent: '#ff9bd2',
    glow: '#ff5fa2',
    background:
      'radial-gradient(circle at top, rgba(255,155,210,0.25), rgba(20,20,40,0.95))',
  },
  技术部: {
    accent: '#8be9fd',
    glow: '#4fdcff',
    background:
      'radial-gradient(circle at top, rgba(79,220,255,0.25), rgba(20,20,40,0.95))',
  },
  宣传部: {
    accent: '#f1fa8c',
    glow: '#f5e960',
    background:
      'radial-gradient(circle at top, rgba(245,233,96,0.25), rgba(20,20,40,0.95))',
  },
  演艺部: {
    accent: '#caa9fa',
    glow: '#a879ff',
    background:
      'radial-gradient(circle at top, rgba(168,121,255,0.25), rgba(20,20,40,0.95))',
  },
};
