Laravel+Vue.js+SQLite
簡単なSPAを作成

参考：Vue.js + LaravelでシンプルなSPA構築チュートリアル：概要編
https://qiita.com/minato-naka/items/2d2def4d66ec88dc3ca2

使用した環境
{
    "private": true,
    "type": "module",
    "scripts": {
        "build": "vite build",
        "dev": "vite"
    },
    "devDependencies": {
        "@popperjs/core": "^2.11.6",
        "@vitejs/plugin-vue": "^4.5.0",
        "autoprefixer": "^10.4.20",
        "axios": "^1.7.4",
        "bootstrap": "^5.2.3",
        "concurrently": "^9.0.1",
        "laravel-vite-plugin": "^1.0",
        "postcss": "^8.4.47",
        "sass": "^1.56.1",
        "tailwindcss": "^3.4.13",
        "vite": "^5.4.11",
        "vue": "^3.2.37"
    },
    "dependencies": {
        "vue-router": "^4.5.0"
    }
}

備考
・URLが/api/tasksではなく、/tasksとならないように調整
・web.phpのRoute::getを後ろに配置しないとダメ
