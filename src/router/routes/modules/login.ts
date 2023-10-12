const login = [{
  path: "/login",
  name: "Login",
  component: () => import("~/pages/login/index.vue"),
  meta: {
    title: "登录",
  },
},
];

export default login;
