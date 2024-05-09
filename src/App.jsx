import { NavBar, RightSidebar } from "./components";
import { Hero, About, Project, Footer } from "./sections";

function App() {
  return (
    <main className="relative  bg-semi-white">
      <div className=" max-sm:absolute max-sm:w-1 max-sm:h-[1600px] max-sm:left-5 max-sm:top-[100px] bg-black relative " />
      <NavBar />
      <RightSidebar />
      <section className="relative">
        <Hero />
      </section>
      <section className="">
        <About />
      </section>
      <section>
        <Project />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default App;
