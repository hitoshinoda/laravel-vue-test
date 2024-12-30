import "./bootstrap";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue";
import TaskListComponent from "./components/TaskListComponent.vue";
import TaskCreateComponent from "./components/TaskCreateComponent.vue";
import TaskShowComponent from "./components/TaskShowComponent.vue";
import TaskEditComponent from "./components/TaskEditComponent.vue";

const routes = [
    {
        path: "/",
        name: "task.list",
        component: TaskListComponent,
    },
    {
        path: "/tasks/create",
        name: "task.create",
        component: TaskCreateComponent,
    },
    {
        path: "/tasks/:taskId",
        name: "task.show",
        component: TaskShowComponent,
        props: true,
    },
    {
        path: "/tasks/:taskId/edit",
        name: "task.edit",
        component: TaskEditComponent,
        props: true,
    },
];

// Vue Router のインスタンスを作成
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Vue アプリケーションの作成
const app = createApp({
    components: {
        HeaderComponent,
    },
});

// ルーターをアプリケーションに登録
app.use(router);

// アプリケーションをマウント
app.mount("#app");
