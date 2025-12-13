import { component$ } from '@builder.io/qwik';
import './global-footer.css';

export interface FooterLink {
  label: string;
  href: string;
}

export interface GlobalFooterProps {
  clubName?: string;
  description?: string;
  links?: FooterLink[];
  contactEmail?: string;
  contactExtra?: string;
  copyrightOwner?: string;
}

export const GlobalFooter = component$<GlobalFooterProps>((props) => {
  const year = new Date().getFullYear();

  const {
    clubName = 'XXX 动漫社',
    description = '一个热爱动漫、游戏与创作的兴趣社团，欢迎志同道合的你加入我们 ✨',
    links = [
      { label: '关于我们', href: '/about' },
      { label: '成员中心', href: '/member' },
      { label: '社团活动', href: '/activity' },
    ],
    contactEmail = 'contact@xxx-anime.club',
    contactExtra = 'QQ群：123456789',
    copyrightOwner,
  } = props;

  return (
    <footer class="global-footer">
      <div class="footer-container">
        {/* 社团介绍 */}
        <section class="footer-section">
          <h3 class="footer-title">{clubName}</h3>
          <p class="footer-text">{description}</p>
        </section>

        {/* 链接 */}
        {links.length > 0 && (
          <section class="footer-section">
            <h4 class="footer-subtitle">相关链接</h4>
            <ul class="footer-links">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 联系方式 */}
        <section class="footer-section">
          <h4 class="footer-subtitle">联系方式</h4>
          <p class="footer-text">
            邮箱：{contactEmail}
            <br />
            {contactExtra}
          </p>
        </section>
      </div>

      <div class="footer-bottom">
        © {year}{' '}
        {copyrightOwner ?? clubName}
        · All Rights Reserved
      </div>
    </footer>
  );
});
