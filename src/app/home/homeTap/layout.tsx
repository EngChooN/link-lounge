import HomeTapSidebar from "@/components/layouts/home/HomeTap/Sidebar"

export default function HomeTapLayout({ children }: {children: React.ReactNode}) {
  return (
    <section className="flex w-full h-full">
      <HomeTapSidebar />
      <main className="w-full rounded-r bg-gray-800">
        {children}
      </main>
    </section>
  )
}