import { Header } from "./components/Header";
import { Post } from "./Post";

import './global.css';

function App() {
  
  return (
    <>
      <Header />

      <Post 
        author="carlos"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, 
          ducimus possimus repudiandae expedita obcaecati fugit quia fuga quos praesentium 
          quidem harum aspernatur veniam veritatis quasi a consequuntur, vitae, iusto numquam?"
      />
      <Post
        author="warley"
        content="o verdadeiro programador, ele programa a Dor "
      />
    </>
  )
}

export default App

