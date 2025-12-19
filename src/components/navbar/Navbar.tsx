import { component$, useSignal, $ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import "./navbar.css";

export const Navbar = component$(() => {
  // 当前展开的下拉菜单
  const openDropdown = useSignal<string | null>(null);
  const hideTimeout = useSignal<number | null>(null);

  const showDropdown$ = $((name: string) => {
    if (hideTimeout.value) {
      clearTimeout(hideTimeout.value);
      hideTimeout.value = null;
    }
    openDropdown.value = name;
  });

  const hideDropdown$ = $(() => {
    // 延迟隐藏
    hideTimeout.value = window.setTimeout(() => {
      openDropdown.value = null;
    }, 250); // 250ms 延迟
  });

  return (
    <nav class="nav anime-nav">
      <div class="logo">✨ XXX 动漫社</div>
      <ul class="nav-links">
        <li>
          <Link href="/">首页</Link>
        </li>

        <li
          class={`dropdown ${openDropdown.value === "departments" ? "active" : ""}`}
          onMouseEnter$={() => showDropdown$("departments")}
          onMouseLeave$={hideDropdown$}
        >
          <span class="dropdown-title">部门 ▾</span>
          <ul
            class="dropdown-menu"
            onMouseEnter$={() => showDropdown$("departments")}
            onMouseLeave$={hideDropdown$}
          >
            <li>
              <a href="#planning">策划部</a>
            </li>
            <li>
              <a href="#tech">技术部</a>
            </li>
            <li>
              <a href="#media">宣传部</a>
            </li>
            <li>
              <a href="#perform">演艺部</a>
            </li>
          </ul>
        </li>

        <li>
          <Link href="/activity">社团活动</Link>
        </li>
        <li>
          <Link href="/auth">登录 / 注册</Link>
        </li>
      </ul>
    </nav>
  );
});
