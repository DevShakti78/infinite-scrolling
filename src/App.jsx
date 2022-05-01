import { useState,useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

const PAGE_NUMBER = 1
function App() {
  const [state, setState] = useState([])
const [page,Setpage] = useState(PAGE_NUMBER)
useEffect(()=>{
fetch(`https://fakestoreapi.com/products?page=${page}&size=5`)
.then(res=>res.json())
.then(json=>setState([...state, ...json]))
},[page])

const scrollToEnd = ()=>{
  Setpage(page+1)
}


window.onscroll = function(){
 if(window.innerHeight + document.documentElement.scrollTop===
  document.documentElement.offsetHeight){
    scrollToEnd()
  }
}
  return (
    <div className="App">
     {state.length>0 && state.map((el,i)=>{
       <div key={i} className={'container'}>  
       <h4>name:{el.title}</h4>
       
        </div>
     })}
    </div>
  )
}

export default App
