"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { SnackbarProvider } from "notistack";

persistStore(store);
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SnackbarProvider>
      <Provider store={store}>{children}</Provider>;
    </SnackbarProvider>
  );
}
