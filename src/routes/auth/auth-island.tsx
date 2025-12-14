import {
  component$,
  useSignal,
  useVisibleTask$,
  $,
} from "@builder.io/qwik";
import { Form, Link } from "@builder.io/qwik-city";
import { useTyping } from "./use-typing";
import CharIcon from "~/media/images/char-icon.png?jsx";
import { useLoginAction, useRegisterAction } from './index';

export const AuthIsland = component$(() => {
  const mode = useSignal<"login" | "register">("login");
  const loginAction = useLoginAction();
  const registerAction = useRegisterAction();
  const animation = useSignal("");
  const fullText = useSignal("欢迎回来，快去登录吧~");
  const action = mode.value === 'login' ? loginAction : registerAction;
  const typing = useTyping(fullText);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    typing.start$();
  });

  const switchMode$ = $(() => {
    typing.stop$();
    animation.value = "fade-out";

    setTimeout(() => {
      mode.value = mode.value === "login" ? "register" : "login";
      fullText.value =
        mode.value === "login"
          ? "欢迎回来，快去登录吧~"
          : "快来加入我们吧~";

      animation.value = "fade-in";
      typing.start$();
    }, 160);
  });

  return (
    <div class={`auth-card-inner ${mode.value}`}>
      <div class="auth-illustration">
        <CharIcon />
      </div>

      <h1 class={`auth-title ${animation.value}`}>
        {mode.value === "login" ? "欢迎回来" : "加入 XXX 动漫社"}
      </h1>

      <p class="mood-text">{typing.text.value}</p>

      <Form action={action} class="auth-form">
        <input
          class="auth-input"
          name="username"
          required
          placeholder="用户名"
        />

        <input
          class="auth-input"
          type="password"
          name="password"
          required
          placeholder="密码"
        />

        {mode.value === "register" && (
          <input
            class="auth-input"
            type="password"
            name="confirm"
            required
            placeholder="确认密码"
          />
        )}

        <button class="auth-btn">
          {mode.value === "login" ? "登录" : "注册"}
        </button>
      </Form>

      {/* 结果反馈 */}
      {action.value?.success === false && (
        <p class="auth-message error">
          {action.value.message}
        </p>
      )}

      {action.value?.success === true && (
        <p class="auth-message success">
          {mode.value === 'login'
            ? '登录成功'
            : '注册成功'
          }
        </p>
      )}

      <div class="auth-switch">
        <span onClick$={switchMode$}>
          {mode.value === "login"
            ? "还没有账号？注册"
            : "已有账号？登录"}
        </span>
      </div>

      <Link href="/" class="auth-back">
        ← 返回首页
      </Link>
    </div>
  );
});
