// import LoginPage from "./pages/Login";
import Homepage from "./pages/Admin/Home";
import MyAccount from "./pages/Admin/MyAccount";
// import Web from "./pages/Layout/Web";
import HomeWeb from "./pages/Web/Home";

export const AdminRoutes = [
  {
    path: "/bautroixanh",
    exact: true,
  },
  {
    name: "Home",
    path: "/bautroixanh/home",
    components: Homepage,
    iconName: "manager",
    exact: true,
  },
  {
    name: "My Account",
    path: "/bautroixanh/my-account",
    iconName: "task",
    components: MyAccount,
  },
  {
    name: "My Acoount 2",
    path: "/bautroixanh/my-account1",
    iconName: "contact",
    components: MyAccount,
  },
];
export const WebRoutes = [
  {
    name: "sdsd",
    path: "/",
    components: HomeWeb,
    exact: true,
  }
  // {
  //   name: "sdsd",
  //   path: "/bautroixanh/my-account",
  //   components: MyAccount,
  //   exact: false,
  // },
];

// export default routes;
