const key = (dept: string) => `vn-progress-${dept}`;

export const loadProgress = (dept: string): number => {
  const raw = localStorage.getItem(key(dept));
  return raw ? Number(raw) : 0;
};

export const saveProgress = (dept: string, index: number) => {
  localStorage.setItem(key(dept), String(index));
};
