const user = [{
  path: "/user",
  name: "User",
  component: () => import("~/pages/user/index.vue"),
  meta: {
    title: "User",
  },
},
];

export default user;
