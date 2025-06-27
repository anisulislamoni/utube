import { SidebarProvider } from "@/components/ui/sidebar"
import StudioNavbar from "@/modules/studio/ui/components/studio-navbar"
import StudioSidebar from "@/modules/studio/ui/components/studio-sidebar"

interface LayoutProps {
  children: React.ReactNode
}

export default function StudioLayoutModule({ children }: LayoutProps){
  return (
    <SidebarProvider>
      <div className="w-full">
        <StudioNavbar />
        <div className="flex min-h-screen pt-[4rem]">
          <StudioSidebar />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
