import Header from "@/components/header";
import SideMenu from "@/components/side_menu";

export default function AdminLayout({ children }) {
    return <div className="h-screen max-h-screen overflow-hidden flex flex-col">
        <Header />
        <div className="flex-1 flex">
            <SideMenu />
            <main className="flex-1">{children}</main>
        </div>
    </div>
}