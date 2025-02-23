import './App.css';
// import Component1 from './components/Component1'
// import Students2 from './components/Students2'
// import ConditionalRendering from './components/ConditionalRendering'
import RenderingLists from './components/RenderingLists';

const App = () => {
  return (
    <div className="App">
      <RenderingLists />
      {/* <ConditionalRendering /> */}

      {/* <Students2 /> */}

      {/* <h1>Welcome to React</h1>
      <p>React is a library for building UI</p>
      <p>We created this react boilerplate using create-react-app package</p>
      <Component1 /> */}
    </div>
  )
}

export default App;

/*
  # Components: Building blocks of UI, which return JSX
    - Types:
      - Class Components: Class which renders JSX
      - Function Components ***: Function which returns (renders) JSX

  # JSX: JavaScript XML
    - JSX returned by a component can only have a single parent
      - If there are multiple JSX element, it needs to be wrapped under a single parent element
      - Or multiple JSX elements can also be wrapped under a JSX "Fragment" tag (<></>)
        - A special tag in JSX, which can be used to wrap multiple JSX elements inside a component
        - Syntax: <React.Fragment></React.Fragment>
          - Shorthand Syntax: <></>
        - Additional note: JSX fragments don't have any default styles and is used only for wrapping purpose in React

    - How to use JavaScript variables/expression values within JSX
      - Variables/expression values can be accessed inside JSX using {} syntax
        - Syntax: {var1}, {5 + 5}, {'Omkar' + 'Mishra'}, etc.
      - {} can also be used to assign JSX expression
      - Additional note:
        - When the following values are accessed within JSX expressions, the values are compiled as '' string
          - Boolean (true/false)
          - undefined
          - null
        - If the above values are needed to be displayed, it can be 'type casted' to string
    
    - Difference between JSX and HTML
      - className instead of class (class is a reserved word keyword in JavaScript)
      - Singleton tags in JSX need to be ending with /> or as a paired tag
        - Syntax:
          - <img></img>
          - <img />
  
  # Conditional Rendering
    - Display a JSX expression based on a condition
    - Syntax: { condition && <h1>Dummy code</h1> }
    - Alternative Syntax:
      let x = null
      if(bool1) {
        x = <h1>Test</h1>
      }
      {x}

  # Rendering Lists (Loop Rendering)
    - Using map method, JSX can be rendered for the given elements in an array
    - 'key' prop (attribute) should be added to the parent JSX element returned in the map method, and this needs to be unique for each element
      - index value (second parameter) of map method callback can be assigned to the key prop
      - key props helps React uniquely identify individual list JSX elements and update only those elements whenever a change is detected

  # React Developer Tools:
    - Debug React
*/