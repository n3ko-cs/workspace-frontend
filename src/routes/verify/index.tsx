import { component$, useSignal } from '@builder.io/qwik';
import './verify.css';

export default component$(() => {
  const isLogin = useSignal(true);

  return (
    <div class="verify-page">
      <div class="glass-card">

        {/* 标题 */}
        <div class="header">
          <h1>{isLogin.value ? '欢迎回来' : '创建账号'}</h1>
          <p>
            {isLogin.value
              ? '请输入你的账户信息以继续'
              : '请填写信息完成账号注册'}
          </p>
        </div>

        {/* 切换按钮 */}
        <div class="switch-bar">
          <div
            class="switch-bg"
            style={{
              transform: isLogin.value
                ? 'translateX(0%)'
                : 'translateX(100%)',
            }}
          />
          <button
            type="button"
            class={isLogin.value ? 'active' : ''}
            onClick$={() => (isLogin.value = true)}
          >
            登录
          </button>
          <button
            type="button"
            class={!isLogin.value ? 'active' : ''}
            onClick$={() => (isLogin.value = false)}
          >
            注册
          </button>
        </div>

        {/* 表单滚动区域 */}
        <div class="form-wrapper">
          <div
            class="form-slider"
            style={{
              transform: isLogin.value
                ? 'translateX(0%)'
                : 'translateX(-50%)',
            }}
          >
            {/* 登录 */}
            <form class="form login" preventdefault:submit>
              <div class="input-group">
                <label>用户名</label>
                <input type="text" required />
              </div>

              <div class="input-group">
                <label>密码</label>
                <input type="password" required />
              </div>

              <button class="submit" type="submit">登录</button>
            </form>

            {/* 注册 */}
            <form class="form register" preventdefault:submit>
              <div class="input-group">
                <label>用户名</label>
                <input type="text" required />
              </div>

              <div class="input-group">
                <label>邮箱</label>
                <input type="email" required />
              </div>

              <div class="input-group code-row">
                <label>验证码</label>
                <input type="text" required />
                <button type="button" class="code-btn">
                  获取验证码
                </button>
              </div>

              <div class="input-group">
                <label>密码</label>
                <input type="password" required />
              </div>

              <button class="submit" type="submit">注册</button>
            </form>
          </div>

          {/* 顶部渐隐遮罩层 */}
          <div class="fade-top"></div>
          <div class="fade-bottom"></div>
        </div>
      </div>
    </div>
  );
});
