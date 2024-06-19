import React, { useState }from 'react';
import './App.css';
// import ClassDemo from './components/demo/classDemo';
// import FuncDemo from './components/demo/funcDemo';
// import Room1 from './components/Room/Room1';
// import Room2 from './components/Room/Room2';
// import ConditionalDemo from './components/demo/conditionalDemo';
// import LifeCycleDemo from './components/demo/LifeCycleDemo';
// import UseEffectDemo from './components/demo/UseEffectDemo';
// import UserContextSol from './components/demo/UserContextSol';
import UseMemoDemo from './components/demo/UseMemoDemo';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className='app'> 
      Hello User
      <br/>
      <button onClick={() => setShow(!show)}>SHOW/HIDE COMPONENT</button>
      <div className='container'>
        {/* <ClassDemo age='20'/>
        <FuncDemo state="KL"/> */}
        {/* <Room1 car='BMW' bike='TVS'/>
        <Room2 car='BMW' bike='TVS'/> */}
        {/* <ConditionalDemo/> */}
        {/* {show && <LifeCycleDemo color="red"/>} */}
        {/* {show && <UseEffectDemo/>} */}
        {/* {show && <UserContextSol />} */}
        <UseMemoDemo />
      </div>
    </div>
  );
}

export default App;
