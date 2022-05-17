// import logo from './logo.svg';
import './App.css';
// import Lists  from "./components/lists";
// import Lists2 from "./components/lists"

// var style1={
  
//   // background: 'green',
  
// }


function App() {
  return (
    <>
       <div >
          <h3>Mobile Operating System</h3>
          <ul >
            <li>Blackberry</li>
            <li>iphone</li>
            <li>Windows phone</li>
          </ul>
       </div>
       <div>
          <h3>Mobile Manufactures</h3>
          <ul>
            <li  style={{ listStyleType: 'square' }}>samsung</li>
            <li  style={{ listStyleType: 'square' }}>HTC</li>
            <li>Micromax phone</li>
            <li  style={{ listStyleType: 'circle' }}>Apple</li>
          </ul>
       </div>
    </>
  );
}

export default App;
