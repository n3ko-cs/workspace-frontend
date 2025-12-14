import { component$ } from '@builder.io/qwik';
import { routeAction$ } from '@builder.io/qwik-city';
import { AuthShell } from './auth-shell';
import { AuthIsland } from './auth-island';
import './auth.css';

/* 登录 */
export const useLoginAction = routeAction$(async (data) => {
  const res = await fetch('http://localhost:8000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    return {
      success: false,
      message: '登录失败',
    };
  }

  return {
    success: true,
  };
});

/* 注册 */
export const useRegisterAction = routeAction$(async (data) => {
  const res = await fetch('http://localhost:8000/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    return {
      success: false,
      message: '注册失败',
    };
  }

  return {
    success: true,
  };
});

export default component$(() => {
  return (
    <AuthShell>
      <AuthIsland />
    </AuthShell>
  );
});
