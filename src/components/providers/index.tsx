import type { IChildrenProp } from "app/types";
import MuiProvider from "./MuiProvider";
import RouterProvider from "./RouterProvider";

interface IAppProvidersProps extends IChildrenProp {}

export default function AppProviders({ children }: IAppProvidersProps) {
  return (
    <MuiProvider>
      <RouterProvider>{children}</RouterProvider>
    </MuiProvider>
  );
}
