// src/routes/member/index.tsx
import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { MemberInfo } from "~/types/member";
import { ROLE_PERMISSIONS } from "~/types/member";

export const useMemberInfo = routeLoader$<MemberInfo>(async ({ cookie }) => {
  // TODO: 从 cookie / session 中解析
  // const session = cookie.get("session")?.value;

  return {
    username: "Alice",
    department: "技术部",
    role: "部长",
  };
});

export default component$(() => {
  const member = useMemberInfo();
  const permissions = ROLE_PERMISSIONS[member.value.role];

  return (
    <main class="member-page">
      <header class="member-header">
        <h1>成员中心</h1>
        <span class="member-role">{member.value.role}</span>
      </header>

      <section class="member-card">
        <Info label="用户名" value={member.value.username} />
        <Info label="所属部门" value={member.value.department} />
      </section>

      <section class="permission-card">
        <h2>你拥有的权限</h2>
        <ul>
          {permissions.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>
    </main>
  );
});

const Info = component$<{ label: string; value: string }>(({ label, value }) => (
  <p>
    <strong>{label}：</strong>
    <span>{value}</span>
  </p>
));
