import Homepage from "./pages/Admin/Home";
import MyAccount from "./pages/Admin/MyAccount";
import HomeWeb from "./pages/Web/Home";

export const AdminRoutes = [
  {
    path: "/bautroixanh",
    exact: true,
  },
  {
    name: "Home",
    path: "/bautroixanh/home",
    component: Homepage,
    iconName: "manager",
    exact: true,
  },
  {
    name: "My Account",
    path: "/bautroixanh/my-account",
    iconName: "task",
    component: MyAccount,
  },
  {
    name: "My Acoount 2",
    path: "/bautroixanh/my-account1",
    iconName: "contact",
    component: MyAccount,
  },
];
export const WebRoutes = [
  {
    name: "sdsd",
    path: "/",
    component: HomeWeb,
    exact: true,
  }
  // {
  //   name: "sdsd",
  //   path: "/bautroixanh/my-account",
  //   component: MyAccount,
  //   exact: false,
  // },
];

// export default routes;
