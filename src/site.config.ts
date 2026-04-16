/**
 * 站点核心配置 — 新站克隆时只需修改此文件
 * Site core config — only this file needs editing when cloning for a new site
 */
const siteConfig = {
    /** 域名（不含 https://） */
    domain: 'oujiaosuo.com',
    /** 完整 URL */
    baseUrl: 'https://oujiaosuo.com',
    /** 品牌简称 */
    brand: '欧意',
    /** 品牌全称 */
    brandFull: '欧意OKX',
    /** 官方平台名 */
    platform: 'OKX',
    /** 本站站名 */
    siteName: '欧交所',
    /** 下载渠道号（对应 fallback-data 里的 channelId） */
    channelId: 'ACE528829',
    /** 全局 title 后缀 */
    titleSuffix: '欧意下载中心',
    /** 全局默认 title */
    titleDefault: '欧意下载中心_OKX欧易电脑网页版_殴易APP网址-欧交所官网',
    /** 全局默认 description */
    description: '欧交所导航站，覆盖欧意OKX电脑端、网页端和APP下载与注册入口。',
    /** 导航菜单 */
    nav: [
        { label: '首页', href: '/' },
        {
            label: 'APP下载', href: '/ouyi-app', children: [
                { label: '安卓下载', href: '/ouyi-app/anzhuo' },
                { label: '苹果iOS', href: '/ouyi-app/pingguo' },
            ]
        },
        { label: '电脑版', href: '/ouyi-pc' },
        { label: '网页版', href: '/ouyi-web' },
        { label: '注册入口', href: '/ouyi-zhuce' },
        { label: '官方通道', href: '/ouyi-official' },
        { label: '下载教程', href: '/ouyi-xiazai' },
        { label: '关于交易所', href: '/ouyijiaoyisuo' },
    ],
    /** sitemap 路由列表 */
    routes: [
        '/',
        '/ouyi-app',
        '/ouyi-app/anzhuo',
        '/ouyi-app/pingguo',
        '/ouyi-pc',
        '/ouyi-web',
        '/ouyi-zhuce',
        '/ouyi-xiazai',
        '/ouyi-official',
        '/ouyijiaoyisuo',
    ],
};

export default siteConfig;
