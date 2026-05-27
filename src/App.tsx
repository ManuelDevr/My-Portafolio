import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import AboutMe from '@/components/AboutMe';
import Technologies from '@/components/Technologies';
import Footer from '@/components/Footer';

function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Projects />
      <AboutMe />
      <Technologies />
      <Footer />
    </main>
  );
}

export default App;
