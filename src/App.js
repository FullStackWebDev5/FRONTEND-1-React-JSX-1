import './App.css';
import Component1 from './components/Component1'

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <p>React is a library for building UI</p>
      <p>We created this react boilerplate using create-react-app package</p>

      <Component1 />
      
      {/*
        <Component1 />
        <Component1 />
        <Component1 />
      */}
    </div>
  )
}

export default App;

/*
  # Components: Building blocks of UI, which return JSX
    - Types:
      - Class Components: Class which renders JSX
      - Function Components ***: Function which returns (renders) JSX

  # React Developer Tools:
    - Debug React
*/