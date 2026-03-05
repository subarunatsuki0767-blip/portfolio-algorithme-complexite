import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-border py-6">
        <div className="container text-center text-xs text-muted-foreground">
          By Teguera Aboubacar — Master 1 Big Data — Algorithmique & Complexité
        </div>
      </footer>
    </div>
  );
};

export default Layout;
