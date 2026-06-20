// ==================== 项目视频展示网站 - 交互脚本 ====================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Project Video Showcase Loaded');
    
    // 初始化所有功能
    initNavigation();
    initCategoriesScroll();
    initSearchFunctionality();
    initVideoCards();
    initResponsiveSidebar();
});

// ==================== 导航功能 ====================
function initNavigation() {
    // 侧边栏导航
    const sidebarNavItems = document.querySelectorAll('.sidebar-nav .nav-item');
    const topNavLinks = document.querySelectorAll('.top-nav .nav-link');
    
    // 侧边栏导航点击事件
    sidebarNavItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有活动状态
            sidebarNavItems.forEach(nav => nav.classList.remove('active'));
            
            // 添加当前活动状态
            this.classList.add('active');
            
            // 同步顶部导航
            const section = this.getAttribute('data-section');
            updateTopNavigation(section);
        });
    });
    
    // 顶部导航点击事件
    topNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有活动状态
            topNavLinks.forEach(nav => nav.classList.remove('active'));
            
            // 添加当前活动状态
            this.classList.add('active');
        });
    });
}

// 更新顶部导航状态
function updateTopNavigation(section) {
    const topNavLinks = document.querySelectorAll('.top-nav .nav-link');
    
    // 根据section更新顶部导航
    topNavLinks.forEach(link => {
        link.classList.remove('active');
        
        const linkText = link.textContent.trim();
        if (linkText === '首页' && section === 'home') {
            link.classList.add('active');
        } else if (linkText === '项目视频' && section === 'videos') {
            link.classList.add('active');
        } else if (linkText === '分类' && section === 'categories') {
            link.classList.add('active');
        } else if (linkText === '案例展示' && section === 'showcase') {
            link.classList.add('active');
        } else if (linkText === '教程' && section === 'tutorials') {
            link.classList.add('active');
        } else if (linkText === '关于我' && section === 'about') {
            link.classList.add('active');
        }
    });
}

// ==================== 分类横向滚动 ====================
function initCategoriesScroll() {
    const categoriesScroll = document.querySelector('.categories-scroll');
    const categoryTags = document.querySelectorAll('.category-tag');
    
    if (!categoriesScroll) return;
    
    // 分类标签点击事件
    categoryTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // 移除所有活动状态
            categoryTags.forEach(t => t.classList.remove('active'));
            
            // 添加当前活动状态
            this.classList.add('active');
            
            // 平滑滚动到视图中心
            this.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        });
    });
    
    // 鼠标滚轮横向滚动
    let isDown = false;
    let startX;
    let scrollLeft;
    
    categoriesScroll.addEventListener('mousedown', (e) => {
        isDown = true;
        categoriesScroll.style.cursor = 'grabbing';
        startX = e.pageX - categoriesScroll.offsetLeft;
        scrollLeft = categoriesScroll.scrollLeft;
    });
    
    categoriesScroll.addEventListener('mouseleave', () => {
        isDown = false;
        categoriesScroll.style.cursor = 'grab';
    });
    
    categoriesScroll.addEventListener('mouseup', () => {
        isDown = false;
        categoriesScroll.style.cursor = 'grab';
    });
    
    categoriesScroll.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - categoriesScroll.offsetLeft;
        const walk = (x - startX) * 2; // 滚动速度
        categoriesScroll.scrollLeft = scrollLeft - walk;
    });
    
    // 触摸滑动支持
    let touchStartX = 0;
    let touchEndX = 0;
    
    categoriesScroll.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    categoriesScroll.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // 向左滑动
                categoriesScroll.scrollBy({ left: 200, behavior: 'smooth' });
            } else {
                // 向右滑动
                categoriesScroll.scrollBy({ left: -200, behavior: 'smooth' });
            }
        }
    }
    
    // 设置初始光标样式
    categoriesScroll.style.cursor = 'grab';
}

// ==================== 搜索功能 ====================
function initSearchFunctionality() {
    const searchBox = document.querySelector('.search-box');
    const searchInput = searchBox?.querySelector('input');
    const searchBtn = searchBox?.querySelector('.search-btn');
    
    if (!searchBox || !searchInput || !searchBtn) return;
    
    // 搜索按钮点击事件
    searchBtn.addEventListener('click', performSearch);
    
    // 回车键搜索
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // 搜索框焦点效果
    searchInput.addEventListener('focus', function() {
        searchBox.style.borderColor = '#AAAAAA';
    });
    
    searchInput.addEventListener('blur', function() {
        searchBox.style.borderColor = '#3F3F3F';
    });
}

function performSearch() {
    const searchInput = document.querySelector('.search-box input');
    const query = searchInput?.value.trim();
    
    if (query) {
        console.log('搜索:', query);
        // 这里可以添加实际的搜索逻辑
        alert(`搜索功能演示：您搜索了 "${query}"`);
    }
}

// ==================== 视频卡片交互 ====================
function initVideoCards() {
    const videoCards = document.querySelectorAll('.video-card');
    
    videoCards.forEach(card => {
        // 点击事件
        card.addEventListener('click', function() {
            const title = this.querySelector('.video-title')?.textContent;
            console.log('播放视频:', title);
            // 这里可以添加播放视频的逻辑
        });
        
        // 悬停效果增强
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// ==================== 响应式侧边栏 ====================
function initResponsiveSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    // 检测屏幕尺寸变化
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    
    function handleScreenChange(e) {
        if (e.matches) {
            // 平板尺寸：收起侧边栏
            sidebar.classList.add('collapsed');
        } else {
            // 桌面尺寸：展开侧边栏
            sidebar.classList.remove('collapsed');
        }
    }
    
    // 初始检查
    handleScreenChange(mediaQuery);
    
    // 监听屏幕尺寸变化
    mediaQuery.addEventListener('change', handleScreenChange);
    
    // 移动端菜单切换（可选功能）
    let mobileMenuOpen = false;
    
    // 可以在这里添加移动端菜单切换按钮的逻辑
    // 例如：汉堡菜单按钮
}

// ==================== 平滑滚动 ====================
function smoothScrollTo(element, targetPosition) {
    const startPosition = element.scrollLeft;
    const distance = targetPosition - startPosition;
    const duration = 500;
    let start = null;
    
    function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        element.scrollLeft = run;
        
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }
    
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// ==================== 工具函数 ====================

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 节流函数
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 格式化数字
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// 格式化时间
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

// ==================== 性能优化 ====================

// 使用 Intersection Observer 实现懒加载
function initLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ==================== 初始化完成 ====================
console.log('所有交互功能已初始化完成');