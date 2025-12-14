// ================================
// src/routes/member/index.tsx
// ================================
import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useMemberInfo = routeLoader$(async () => {
  // mock：实际应从 session / cookie 中读取
  return {
    username: "Alice",
    department: "技术部",
    role: "部长", // 部长 | 普通社员 | 老资历
  };
});

export default component$(() => {
  const member = useMemberInfo();

  const rolePermissions: Record<string, string[]> = {
    部长: ["管理成员", "审批活动", "修改部门信息"],
    老资历: ["参与决策", "指导新人"],
    普通社员: ["参与活动"],
  };

  return (
    <main class="member-page">
        <h1>成员中心</h1>
        <p>
          <strong>用户名：</strong>
          {member.value.username}
        </p>
        <p>
          <strong>所属部门：</strong>
          {member.value.department}
        </p>
        <p>
          <strong>身份权限：</strong>
          {member.value.role}
        </p>

        <section class="dept">
          <h2>你拥有的权限</h2>
          <ul>
            {rolePermissions[member.value.role].map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>
    </main>
  );
});
