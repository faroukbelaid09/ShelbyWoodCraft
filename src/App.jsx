import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero";
import Projects from "./sections/Projects/Projects";

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Projects />
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '1rem',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <p className="section-subtitle">Luxury Woodworking</p>

        <h1 className="section-title">
          SHELBY <span className="gold-text">WOODCRAFT</span>
        </h1>

        <p
          style={{
            maxWidth: '700px',
            color: 'var(--color-muted)',
            lineHeight: 1.8,
          }}
        >
          Crafting bespoke interiors and premium custom furniture for
          discerning homeowners and developers across Nigeria.
        </p>
      </div>
    </>
  );
}

export default App;