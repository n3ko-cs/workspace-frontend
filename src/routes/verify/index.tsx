import { component$, useSignal, useVisibleTask$, $ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import { ripple$ } from '../../components/ripple';
import './verify.css';

export default component$(() => {
  const isLogin = useSignal(true);
  const tabRef = useSignal<HTMLElement | undefined>(undefined);

  // 动画状态
  const loginShake = useSignal(false);
  const flyOut = useSignal(false);
  const showVerifyMail = useSignal(false);

  useVisibleTask$(({ track }) => {
    track(() => isLogin.value);
    if (tabRef.value) {
      tabRef.value.setAttribute('data-active', isLogin.value ? 'login' : 'register');
    }
  });

  // 登录提交（示例逻辑：用户名=test 密码=1234 成功；否则失败并摇晃）
  const onLogin = $((ev: Event) => {
    ev.preventDefault();
    const form = ev.currentTarget as HTMLFormElement;
    const user = (form.querySelector('#login-user') as HTMLInputElement)?.value || '';
    const pass = (form.querySelector('#login-pass') as HTMLInputElement)?.value || '';

    if (!(user === 'test' && pass === '1234')) {
      // 失败 => 摇晃
      loginShake.value = true;
      setTimeout(() => (loginShake.value = false), 420);
      return;
    }

    // 成功 => 飞走并在动画后跳转（示例跳转）
    flyOut.value = true;
    // 做点延迟让动画看完
    setTimeout(() => {
      // 真实项目请换成 router.navigate 或 fetch 等
      window.location.href = '/';
    }, 700);
  });

  // 注册提交（示例：触发邮箱验证弹窗）
  const onRegister = $((ev: Event) => {
    ev.preventDefault();
    showVerifyMail.value = true;

    // 自动跳转到验证页或继续流程（示例 1.2s 后跳转）
    setTimeout(() => {
      window.location.href = '/verify/email';
    }, 1200);
  });

  return (
    <div class={`verify-page ${flyOut.value ? 'page-flying' : ''}`}>
      <div
        class={`auth-card ${flyOut.value ? 'fly-out' : ''} ${loginShake.value ? 'shake' : ''} ${showVerifyMail.value ? 'verify-glow' : ''}`}
        role="region"
        aria-label="认证卡片"
      >
        <div class="auth-header">
          <h2>{isLogin.value ? '欢迎回来，老资历' : '欢迎新鸟儿'}</h2>
          <p>
            {isLogin.value
              ? '输入凭证，继续你的青空之旅'
              : '创建账号，开启你的青空之旅'}
          </p>
        </div>

        <div class="tab-switcher" ref={tabRef} data-active={isLogin.value ? 'login' : 'register'}>
          <button
            type="button"
            class={`tab-btn ${isLogin.value ? 'active' : ''}`}
            onClick$={() => (isLogin.value = true)}
            aria-pressed={isLogin.value}
          >
            登录
          </button>
          <button
            type="button"
            class={`tab-btn ${!isLogin.value ? 'active' : ''}`}
            onClick$={() => (isLogin.value = false)}
            aria-pressed={!isLogin.value}
          >
            注册
          </button>
          <div class="tab-slider" aria-hidden="true" />
        </div>

        {/* form-slider：左右并排两个表单（宽度 200%） */}
        <div class="form-viewport">
          <div class="form-slider spring-slide" data-active={isLogin.value ? 'login' : 'register'}>
            {/* 登录表单（左侧） */}
            <form class="auth-form login-form" onSubmit$={onLogin} noValidate>
              <div class="input-field">
                <input id="login-user" name="username" type="text" placeholder=" " required autoComplete="username" />
                <label htmlFor="login-user">用户名或邮箱</label>
              </div>

              <div class="input-field">
                <input id="login-pass" name="password" type="password" placeholder=" " required autoComplete="current-password" />
                <label htmlFor="login-pass">密码</label>
              </div>

              <div class="form-footer">
                <label class="remember-me">
                  <input type="checkbox" /> 记住我
                </label>
                <a class="forgot-password" href="#">忘记密码？</a>
              </div>

              <button type="submit" class="submit-btn">进入世界</button>
            </form>

            {/* 注册表单（右侧） */}
            <form class="auth-form register-form" onSubmit$={onRegister} noValidate>
              <div class="input-field">
                <input id="reg-name" name="reg_name" type="text" placeholder=" " required autoComplete="username" />
                <label htmlFor="reg-name">设置唯一用户名</label>
              </div>

              <div class="input-field">
                <input id="reg-email" name="reg_email" type="email" placeholder=" " required autoComplete="email" />
                <label htmlFor="reg-email">常用邮箱地址</label>
              </div>

              <div class="input-field">
                <input id="reg-pwd" name="reg_pwd" type="password" placeholder=" " required autoComplete="new-password" />
                <label htmlFor="reg-pwd">设置安全密码（8+位）</label>
              </div>

              <button type="submit" class="submit-btn">创建账号</button>
            </form>
          </div>
        </div>

        {/* 注册成功时显示邮箱弹窗（虚拟图标） */}
        {showVerifyMail.value ? (
          <div class="verify-mail-popup" aria-live="polite">📧 已发送验证邮件</div>
        ) : null}
      </div>
    </div>
  );
});
