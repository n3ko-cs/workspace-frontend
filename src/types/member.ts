export type Role = "部长" | "老资历" | "普通社员";

export interface MemberInfo {
  username: string;
  department: string;
  role: Role;
}

export const ROLE_PERMISSIONS: Record<Role, string[]> = {
  部长: ["管理成员", "审批活动", "修改部门信息"],
  老资历: ["参与决策", "指导新人"],
  普通社员: ["参与活动"],
};
