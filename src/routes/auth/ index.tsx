import { component$, useSignal, $ } from '@builder.io/qwik';
import { Form, routeAction$, Link } from '@builder.io/qwik-city';
import './auth.css'

export const useAuthAction = routeAction$(async (data) => {
  const { mode, username, password, confirm } = data as any;

  if (mode === 'register') {
    if (password !== confirm) return { mode, success: false, message: '密码不一致' };
    return { mode, success: true, message: '注册成功！' };
  }

  if (username && password) {
    return {
      mode,
      success: true,
      username,
      department: '技术部',
      role: '部长',
    };
  }

  return { mode, success: false, message: '用户名或密码错误' };
});

export default component$(() => {
  const modeSig = useSignal<'login' | 'register'>('login');
  const action = useAuthAction();
  const moodText = useSignal<string>('准备开始今天的冒险吧~');

  const switchMode$ = $(() => {
    modeSig.value = modeSig.value === 'login' ? 'register' : 'login';
    moodText.value = modeSig.value === 'login' ? '欢迎回来，快去登录吧~' : '快来加入我们吧~';
  });

  return (
    <div class="auth-bg">
      <div class="auth-card">
        {/* 小插画 */}
        <div class="auth-illustration">
          <img src="/images/char-icon.png" alt="人物插画" />
        </div>

        <h1 class="auth-title fade-text">
          {modeSig.value === 'login' ? '欢迎回来' : '加入 XXX 动漫社'}
        </h1>

        <p class="mood-text">{moodText.value}</p>

        <Form action={action} class={`auth-form fade-form ${modeSig.value}`}>
          <input type="hidden" name="mode" value={modeSig.value} />

          <input name="username" placeholder="用户名" required />
          <input type="password" name="password" placeholder="密码" required />
          {modeSig.value === 'register' && (
            <input name="confirm" type="password" placeholder="确认密码" required />
          )}
          <button type="submit" class="auth-btn">
            {modeSig.value === 'login' ? '登录' : '注册'}
          </button>
        </Form>

        {action.value && !action.value.success && (
          <p class="auth-message error">{action.value.message}</p>
        )}

        {action.value && action.value.success && modeSig.value === 'register' && (
          <p class="auth-message success">{action.value.message}</p>
        )}

        {action.value && action.value.success && modeSig.value === 'login' && (
          <p class="auth-message success">
            登录成功！进入 <Link href="/member">成员中心</Link>
          </p>
        )}

        <div class="auth-switch">
          {modeSig.value === 'login' ? (
            <span onClick$={switchMode$}>还没有账号？注册</span>
          ) : (
            <span onClick$={switchMode$}>已有账号？登录</span>
          )}
        </div>

        <Link href="/" class="auth-back">← 返回首页</Link>
      </div>
    </div>
  );
});
