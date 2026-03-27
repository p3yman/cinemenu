import { Outlet } from "react-router";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="flex-1 px-5 py-6">
        <Outlet />
      </main>
    </>
  );
}
