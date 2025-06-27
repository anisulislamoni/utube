import StudioLayoutModule from "@/modules/studio/ui/layouts/studio-layout"

interface LayoutProps {
  children: React.ReactNode
}

export default function StudioLayout({ children }: LayoutProps){
  return (
    <div className="font-inter">
      <StudioLayoutModule>
        {children}
      </StudioLayoutModule>
    </div>
  )
}
