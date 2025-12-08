// src/routes/verify/index.tsx
import { component$, useSignal } from '@builder.io/qwik';
import './verify.css'; // 引入外部样式

export default component$(() => {
  const isLogin = useSignal(true);

  return (
    <div class="verify-page">
      <div class="auth-card">
        <div class="auth-header">
          <h2>{isLogin.value ? '欢迎回来，老资历' : '欢迎新鸟儿'}</h2>
          <p>
            {isLogin.value
              ? '输入凭证，继续你的青空之旅'
              : '创建账号，开启你的青空之旅'}
          </p>
        </div>

        <div class="tab-switcher" data-active={isLogin.value ? 'login' : 'register'}>
          <button
            type="button"
            class={`tab-btn ${isLogin.value ? 'active' : ''}`}
            onClick$={() => (isLogin.value = true)}
          >
            登录
          </button>
          <button
            type="button"
            class={`tab-btn ${!isLogin.value ? 'active' : ''}`}
            onClick$={() => (isLogin.value = false)}
          >
            注册
          </button>
          <div class="tab-slider" aria-hidden="true"></div>
        </div>

        {isLogin.value ? (
          <form key="login" class="auth-form" preventdefault:submit>
            <div class="input-field">
              <input type="text" placeholder="用户名或邮箱" required autocomplete="username" />
            </div>
            <div class="input-field">
              <input type="password" placeholder="密码" required autocomplete="current-password" />
            </div>
            <div class="form-footer">
              <label class="remember-me">
                <input type="checkbox" /> 记住我
              </label>
              <a href="#" class="forgot-password">忘记密码？</a>
            </div>
            <button type="submit" class="submit-btn">进入世界</button>
          </form>
        ) : (
          <form key="register" class="auth-form" preventdefault:submit>
            <div class="input-field">
              <input type="text" placeholder="设置唯一用户名" required autocomplete="username" />
            </div>
            <div class="input-field">
              <input type="email" placeholder="常用邮箱地址" required autocomplete="email" />
            </div>
            <div class="input-field">
              <input type="password" placeholder="设置安全密码（8+位）" required autocomplete="new-password" />
            </div>
            <button type="submit" class="submit-btn">创建账号</button>
          </form>
        )}
      </div>
    </div>
  );
});