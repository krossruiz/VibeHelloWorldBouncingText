import './App.css'

function App() {
  return (
    <>
      <div className="bouncing-container">
        <div className="bouncing-text">
          Hello World!
        </div>
      </div>
      <div className="controls">
        <div className="speed-control">
          <input 
            type="range" 
            min="1" 
            max="4" 
            step="0.1" 
            defaultValue="1" 
            className="speed-slider"
            onChange={(e) => {
              const speed = parseFloat(e.target.value);
              document.documentElement.style.setProperty('--x-speed', (0.0625 * speed).toString());
              document.documentElement.style.setProperty('--y-speed', (0.0833 * speed).toString());
            }}
          />
        </div>
        <div className="color-control">
          <input 
            type="color" 
            defaultValue="#ffffff"
            className="color-picker"
            onChange={(e) => {
              document.documentElement.style.setProperty('--text-color', e.target.value);
            }}
          />
        </div>
      </div>
    </>
  )
}

export default App
