import HomeHeader from "@/components/layouts/home/Header";
import HomeSidebar from "@/components/layouts/home/Sidebar";

export default function HomeLayout({children}: {children: React.ReactNode}) {
  return (
    <section className="w-screen h-dvh  bg-rose-700 overflow-hidden">
      <HomeHeader />
      <div className="flex">
        <HomeSidebar />
        <main className="w-screen rounded bg-white mr-[5px] mb-[5px]">
          {children}
        </main>
      </div>
      {/* <footer>푸터!!!</footer> */}
    </section>
  );
}