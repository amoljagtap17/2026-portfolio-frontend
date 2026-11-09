import type { IChildrenProp } from "app/types";
import { BrowserRouter } from "react-router";

interface IRouterProviderProps extends IChildrenProp {}

export default function RouterProvider({ children }: IRouterProviderProps) {
  return <BrowserRouter useTransitions={false}>{children}</BrowserRouter>;
}
