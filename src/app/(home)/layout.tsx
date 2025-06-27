import HomeLayoutModule from "@/modules/home/ui/layouts/home-layout"

interface LayoutProps {
  children: React.ReactNode
}

export default function HomeLayout({ children }: LayoutProps){
  return (
    <div className="font-inter">
      <HomeLayoutModule>
        {children}
      </HomeLayoutModule>
    </div>
  )
}
