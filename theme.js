// theme.js

function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

document.addEventListener('DOMContentLoaded', () => {
    // 모든 페이지에서 테마 적용
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // 테마 토글 버튼 이벤트 리스너 등록
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
});