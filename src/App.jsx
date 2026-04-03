import GradualBlur from './Components/animations/GradualBlur';

function App() {
  return (
    <div className="relative min-h-screen">
    
    
      <GradualBlur
        target="page"
        position="bottom"
        height="30vh"
        strength={8}
        animated={false}
        opacity={1}
      />
    </div>
  );
}

export default App;