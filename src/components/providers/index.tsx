import type { IChildrenProp } from "app/types";
import MuiProvider from "./MuiProvider";

interface IAppProvidersProps extends IChildrenProp {}

export default function AppProviders({ children }: IAppProvidersProps) {
  return <MuiProvider>{children}</MuiProvider>;
}
