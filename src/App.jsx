import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <><>
     <Breadcrumb>
      <Breadcrumb.Item href="#">MY PROFILE</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        HOBBIES
      </Breadcrumb.Item>
      <Breadcrumb.Item active>PICTURE </Breadcrumb.Item>
    </Breadcrumb>
   
   
  </>
    
   </>
   
  )
}

export default App
