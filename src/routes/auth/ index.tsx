import { component$, useSignal, $ } from '@builder.io/qwik';
import { Form, routeAction$ } from '@builder.io/qwik-city';

export const useAuthAction = routeAction$(async (data) => {
  const { mode, username } = data as any;
  if (mode === 'register') {
    return { mode, success: true };
  }
  return { mode, username, department: '技术部', role: '部长' };
});

export default component$(() => {
  const modeSig = useSignal<'login' | 'register'>('login');

  const switchMode$ = $(() => {
    modeSig.value = modeSig.value === 'login' ? 'register' : 'login';
  });

  return (
    <div class="auth-bg">
      <div class="auth-card">
        <h1 class="auth-title">
          {modeSig.value === 'login' ? '欢迎回来' : '加入 XXX 动漫社'}
        </h1>

        <Form action={useAuthAction()} class="auth-form">
          <input type="hidden" name="mode" value={modeSig.value} />
          <input name="username" placeholder="用户名" required />
          <input type="password" name="password" placeholder="密码" required />
          {modeSig.value === 'register' && (
            <input type="password" name="confirm" placeholder="确认密码" required />
          )}
          <button type="submit" class="auth-btn">
            {modeSig.value === 'login' ? '登录' : '注册'}
          </button>
        </Form>

        <div class="auth-switch">
          {modeSig.value === 'login' ? (
            <span onClick$={switchMode$}>还没有账号？注册</span>
          ) : (
            <span onClick$={switchMode$}>已有账号？登录</span>
          )}
        </div>
      </div>
    </div>
  );
});
