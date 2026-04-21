import {
  NavBar,
  Banner,
  Skills,
  Projects,
  Experience,
  // Certificates,
  Contact,
  Footer,
  ScrollProgress,
} from "@/components/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Experience />
{/* <Certificates /> */}
      <Contact />
      <Footer />
    </main>
  );
}
