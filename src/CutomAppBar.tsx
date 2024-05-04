// export default MyLayout;
import * as React from "react";
import {
  AppBar,
  Layout,
  LayoutProps,
  UserMenu,
  useUserMenu,
} from "react-admin";
import { MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import useAuthRedirect from "./components/useAuthRedirect";
import { useAuthenticator } from "@aws-amplify/ui-react";

// It's important to pass the ref to allow Material UI to manage the keyboard navigation
const SettingsMenuItem = React.forwardRef((props: any, ref) => {
  // We are not using MenuItemLink so we retrieve the onClose function from the UserContext
  const { onClose } = useUserMenu();
  useAuthRedirect({
    authhStatus: "unauthenticated",
    redirectPath: "../../",
  });
  const { signOut } = useAuthenticator();
  const handleClick = () => signOut();
  return (
    <MenuItem
      onClick={onClose}
      ref={ref}
      // It's important to pass the props to allow Material UI to manage the keyboard navigation
      {...props}
    >
      <ListItemIcon>
        <SettingsIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText onClick={handleClick}>サインアウト</ListItemText>
    </MenuItem>
  );
});

const MyAppBar = () => (
  <AppBar
    userMenu={
      <UserMenu>
        <SettingsMenuItem />
      </UserMenu>
    }
  />
);

export const MyLayout = (
  props: React.JSX.IntrinsicAttributes & LayoutProps
) => {
  return <Layout {...props} appBar={MyAppBar} />;
};
