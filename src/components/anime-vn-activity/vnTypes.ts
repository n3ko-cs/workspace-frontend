export type Department =
  | '策划部'
  | '技术部'
  | '宣传部'
  | '演艺部';

export interface VNNode {
  id: string;
  title: string;
  time: string;
  story: string[];
}
