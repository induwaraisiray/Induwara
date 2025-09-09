/*
  Safe minimal JavaScript for your page
  - Auth check (localStorage වල userId/userKey)
  - Sidebar / navigation (showPage)
  - Mobile sidebar toggle
  - Simple message notifications (showMessage)
  - Simple safe ad banner (placeholder)
  - logout(), copyReferralCode()
  - Sinhala comments for clarity
*/

window.addEventListener('load', () => {
  try {
    checkAuth();        // Auth check - redirect disabled for safe testing
    bindNavLinks();     // Sidebar nav listeners
    initMobileToggle(); // Mobile sidebar toggle
    insertAdBanner();   // Create small safe ad banner
  } catch (err) {
    console.error('Init error', err);
  }
});

/* -----------------------
   AUTH CHECK (simple)
   ----------------------- */
function checkAuth() {
  const userId = localStorage.getItem('userId');
  const userKey = localStorage.getItem('userKey');
  // Redirect අහඹු ලෙස නොකරන්න - testing සඳහා console warning එක පමණයි.
  if (!userId || !userKey) {
    console.warn('No userId/userKey in localStorage (checkAuth) — redirect disabled for safety.');
    return false;
  }
  return true;
}

/* -----------------------
   NAVIGATION & SIDEBAR
   ----------------------- */

    // Toggle sidebar for mobile
    function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      const mainContent = document.getElementById('main-content');
      
      sidebar.classList.toggle('show');
      if (sidebar.classList.contains('show')) {
        mainContent.classList.add('expanded');
      } else {
        mainContent.classList.remove('expanded');
      }
    }

function showPage(pageName) {
  // Hide all pages
  document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
  // Show requested page
  const el = document.getElementById(`${pageName}-page`);
  if (el) el.classList.add('active');

  // Update active nav link
  document.querySelectorAll('.sidebar-nav a').forEach(link => link.classList.remove('active'));
  const nav = document.getElementById(`nav-${pageName}`);
  if (nav) nav.classList.add('active');

  // Close mobile sidebar if open
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('main-content');
  if (sidebar) sidebar.classList.remove('show');
  if (mainContent) mainContent.classList.remove('expanded');
}

/* -----------------------
   MOBILE TOGGLE BUTTON
   ----------------------- */
function initMobileToggle() {
  const btn = document.querySelector('.mobile-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    if (!sidebar) return;
    sidebar.classList.toggle('show');
    if (sidebar.classList.contains('show')) {
      if (mainContent) mainContent.classList.add('expanded');
    } else {
      if (mainContent) mainContent.classList.remove('expanded');
    }
  });
}

/* -----------------------
   MESSAGES / NOTIFICATIONS
   ----------------------- */
function showMessage(type, text) {
  // type: 'error' | 'success' | 'warning' | 'info'
  const container = document.getElementById('message-container');
  if (!container) {
    console.warn('Message container not found');
    return;
  }

  // Only one message at a time (replace)
  container.innerHTML = '';
  const div = document.createElement('div');
  div.className = `message ${type}`;
  div.style.opacity = '1';
  div.innerHTML = `<i class="fas fa-${type === 'error' ? 'exclamation-triangle' : type === 'success' ? 'check-circle' : 'info-circle'}"></i> ${text}`;
  container.appendChild(div);

  // Auto-hide after 4.5s
  setTimeout(() => {
    div.style.opacity = '0';
    div.style.transform = 'translateY(-12px)';
    setTimeout(() => {
      if (div.parentNode) div.remove();
    }, 300);
  }, 4500);
}

/* -----------------------
   SAFE AD BANNER (placeholder)
   ----------------------- */
function insertAdBanner() {
  if (document.getElementById('ad-banner')) return;

  const banner = document.createElement('div');
  banner.id = 'ad-banner';
  banner.style.cssText = 'position:fixed;right:16px;bottom:16px;z-index:9999;max-width:320px;';

  banner.innerHTML = `
    <div style="background:rgba(10,10,10,0.95);padding:12px;border-radius:12px;border:1px solid rgba(255,255,255,0.04);color:#ddd;font-size:14px;">
      <div style="display:flex;gap:8px;align-items:center;">
        <img src="" id="ad-thumb" alt="" style="width:56px;height:56px;border-radius:8px;object-fit:cover;display:none;">
        <div style="flex:1" id="ad-txt">
          <strong style="color:#fff;">Safe Ad Banner</strong>
          <div style="color:#bbb;font-size:12px;">Placeholder — no external scripts loaded.</div>
        </div>
        <button id="ad-close" style="background:transparent;border:none;color:#aaa;font-size:16px;margin-left:8px;cursor:pointer;">✕</button>
      </div>
    </div>
  `;
  document.body.appendChild(banner);

  const closeBtn = document.getElementById('ad-close');
  if (closeBtn) closeBtn.addEventListener('click', () => banner.remove());
}

/* -----------------------
   LOGOUT & REFERRAL COPY
   ----------------------- */
function logout() {
  localStorage.removeItem('userId');
  localStorage.removeItem('userKey');
  localStorage.removeItem('simple_ads_v1');
  localStorage.removeItem('simple_ads_v1_time');
  showMessage('success', 'Logged out');
  // Redirect if you want:
  // window.location.href = '/';
}

function copyReferralCode() {
  const el = document.getElementById('referral-code-display');
  if (!el) {
    showMessage('error', 'Referral field not found');
    return;
  }
  // Try modern clipboard first
  if (navigator.clipboard && el.value !== undefined) {
    navigator.clipboard.writeText(el.value).then(() => {
      showMessage('success', 'Referral code copied to clipboard');
    }).catch(() => {
      fallbackCopy(el);
    });
  } else {
    fallbackCopy(el);
  }

  function fallbackCopy(fieldEl) {
    try {
      fieldEl.select?.();
      document.execCommand('copy');
      showMessage('success', 'Referral code copied');
    } catch (err) {
      showMessage('error', 'Copy failed');
    }
  }
}

/* -----------------------
   Small helper: attach logout handler to .logout-link
   ----------------------- */
document.addEventListener('click', (e) => {
  const logoutEl = e.target.closest && e.target.closest('.logout-link');
  if (logoutEl) {
    e.preventDefault();
    logout();
  }
});
    
