import { component$ } from '@builder.io/qwik';
import './index.css';

export default component$(() => {
  return (
    <>
      {/* 英雄区域 - 象征突破的天空 */}
      <div class="hero-section">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h1 class="hero-title">XXX 社团</h1>
          <p class="hero-subtitle">突破束缚，翱翔天际</p>
          <p class="hero-motto">在这里，每个人都是一只渴望飞翔的鸟儿</p>
          <div class="hero-buttons">
            <button class="cta-button primary">突破自我</button>
            <button class="cta-button secondary">展翅高飞</button>
          </div>
        </div>
      </div>

      {/* 社团简介 */}
      <section class="about-section">
        <div class="container">
          <h2 class="section-title">突破之路</h2>
          <div class="about-content">
            <div class="about-text">
              <p>XXX社团成立于20XX年，如同一只从荆棘丛中挣脱的鸟儿，我们始终相信每个人的潜力无限。我们致力于为成员提供突破自我、实现梦想的平台。</p>
              <p>在这个大家庭里，每个人都在不断突破自己的边界，如同鸟儿冲破荆棘的束缚，向着更广阔的天空飞翔。我们鼓励创新、支持探索，让每个成员都能找到属于自己的飞行轨迹。</p>
            </div>
            <div class="thorn-image">
              <div class="thorn-container">
                <div class="thorn thorn-1"></div>
                <div class="thorn thorn-2"></div>
                <div class="thorn thorn-3"></div>
                <div class="thorn thorn-4"></div>
                <div class="thorn thorn-5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 四大部门介绍 - 各部门象征不同的突破方式 */}
      <section class="departments-section">
        <div class="container">
          <h2 class="section-title">突破的方向</h2>
          <div class="departments-grid">
            <div class="department-card planning">
              <div class="department-icon">📋</div>
              <h3>策划部</h3>
              <p>突破思维局限，用创意撕裂常规的束缚。策划部成员善于发现新思路，用智慧的力量冲破传统框架。</p>
              <div class="department-stats">
                <span class="stat">成员: 12人</span>
                <span class="stat">负责人: 张三</span>
              </div>
            </div>
            
            <div class="department-card tech">
              <div class="department-icon">💻</div>
              <h3>技术部</h3>
              <p>突破技术壁垒，用代码编织翅膀。技术部成员不断学习新技术，用创新工具为社团插上科技的羽翼。</p>
              <div class="department-stats">
                <span class="stat">成员: 8人</span>
                <span class="stat">负责人: 李四</span>
              </div>
            </div>
            
            <div class="department-card promotion">
              <div class="department-icon">📢</div>
              <h3>宣传部</h3>
              <p>突破传播界限，用创意点亮世界。宣传部成员用视觉与文字的力量，让社团的声音传达到更远的地方。</p>
              <div class="department-stats">
                <span class="stat">成员: 10人</span>
                <span class="stat">负责人: 王五</span>
              </div>
            </div>
            
            <div class="department-card performance">
              <div class="department-icon">🎭</div>
              <h3>演艺部</h3>
              <p>突破表现极限，用艺术诠释生命。演艺部成员用才华为舞台注入灵魂，展现最真实的自我。</p>
              <div class="department-stats">
                <span class="stat">成员: 15人</span>
                <span class="stat">负责人: 赵六</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 活动亮点 - 记录每一次突破瞬间 */}
      <section class="activities-section">
        <div class="container">
          <h2 class="section-title">突破时刻</h2>
          <div class="activities-grid">
            <div class="activity-card">
              <div class="activity-date">2025.01.15</div>
              <h3>年度突破大会</h3>
              <p>回顾过去一年的突破历程，庆祝每位成员的成长，规划未来的飞跃方向</p>
              <div class="activity-meta">
                <span class="activity-department">全体部门</span>
              </div>
            </div>
            
            <div class="activity-card">
              <div class="activity-date">2025.02.20</div>
              <h3>突破挑战赛</h3>
              <p>面向全校发起突破自我挑战，邀请更多勇者加入我们的突破之旅</p>
              <div class="activity-meta">
                <span class="activity-department">策划部主办</span>
              </div>
            </div>
            
            <div class="activity-card">
              <div class="activity-date">2025.03.08</div>
              <h3>技能突破沙龙</h3>
              <p>各部门精英分享突破经验，传授突破技巧，激发潜能</p>
              <div class="activity-meta">
                <span class="activity-department">技术部主办</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 加入我们 - 邀请更多鸟儿加入突破之旅 */}
      <section class="join-section">
        <div class="container">
          <div class="join-content">
            <div class="join-text">
              <h2 class="section-title">加入突破之旅</h2>
              <p>如果你也是一只渴望突破荆棘束缚的鸟儿，如果你也想在天空中自由翱翔，那么XXX社团就是你起飞的平台。我们等待每一个不甘平凡的灵魂。</p>
              <ul class="join-benefits">
                <li>获得突破自我、超越极限的机会</li>
                <li>在团队中找到突破的伙伴与力量</li>
                <li>体验从荆棘到天空的蜕变过程</li>
                <li>成为突破文化的传承者与创造者</li>
              </ul>
            </div>
            <div class="join-form">
              <div class="form-group">
                <label for="name">姓名</label>
                <input type="text" id="name" placeholder="请输入您的姓名" />
              </div>
              <div class="form-group">
                <label for="email">邮箱</label>
                <input type="email" id="email" placeholder="请输入您的邮箱" />
              </div>
              <div class="form-group">
                <label for="department">第一意向部门</label>
                <select id="department">
                  <option value="">请选择意向部门</option>
                  <option value="planning">策划部</option>
                  <option value="tech">技术部</option>
                  <option value="promotion">宣传部</option>
                  <option value="performance">演艺部</option>
                </select>
              </div>

              <div class="form-group">
                <label for="department">第二意向部门</label>
                <select id="department">
                  <option value="">请选择意向部门</option>
                  <option value="planning">策划部</option>
                  <option value="tech">技术部</option>
                  <option value="promotion">宣传部</option>
                  <option value="performance">演艺部</option>
                </select>
              </div>
              <button class="submit-btn">申请突破</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* 尾部 - 寓意永远飞翔 */}
      <footer class="flight-footer">
        <div class="sky-pattern"></div>
        <div class="flight-message">
          <p>愿每一只鸟儿都能突破荆棘，翱翔天际</p>
        </div>
      </footer>
    </>
  );
});