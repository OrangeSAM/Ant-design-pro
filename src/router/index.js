import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    // 使用JSX语法创建router-view标签
    // component: { render: h => h("router-view") },
    component: () =>
      import(/* webpackChunkName: "user" */ "../layout/UserLayout.vue"),
    redirect: "/user/login",
    children: [
      {
        path: "/user/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/user/login.vue")
      },
      {
        path: "/user/register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/user/register.vue")
      }
    ]
  },
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layout/BasicLayout"),
    children: [
      // dashboard
      {
        path: "/",
        redirect: "/dashboard/analysis"
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: { render: h => h("router-view") },
        children: [
          {
            path: "/dashboard/analysis",
            name: "analysis",
            component: () =>
              import(
                /* webpackChunkName: "dashboard" */ "../views/DashBoard/Analysis"
              )
          }
        ]
      },
      // form
      {
        path: "/form",
        name: "form",
        component: { render: h => h("router-view") },
        children: [
          {
            path: "/form/basic-form",
            name: "basicform",
            component: () =>
              import(/* webpackChunkName: "form" */ "../views/Forms/BasicForm")
          },
          {
            path: "/form/step-form",
            name: "stepform",
            component: () =>
              import(/* webpackChunkName: "form" */ "../views/Forms/StepForm"),
            children: [
              {
                path: "/form/step-form",
                redirect: "/form/step-form/info"
              },
              {
                path: "/form/step-form/info",
                name: "info",
                component: () =>
                  import(
                    /* webpackChunkName: "form" */ "../views/Forms/StepForm/Step1"
                  )
              },
              {
                path: "/form/step-form/confirm",
                name: "confirm",
                component: () =>
                  import(
                    /* webpackChunkName: "form" */ "../views/Forms/StepForm/Step2"
                  )
              },
              {
                path: "/form/step-form/result",
                name: "result",
                component: () =>
                  import(
                    /* webpackChunkName: "form" */ "../views/Forms/StepForm/Step3"
                  )
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: "*",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 配置nprogress使生效
router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
    // 路径变化才显示加载进度
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});
export default router;
