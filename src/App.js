import ReactDOM from 'react-dom';
import Card from './card'
const React=require('react');


function App() {
 //let [author,setau]=React.useState("")
 //let [content,setcn]=React.useState("")
let url="https://api.quotable.io/random";
let getQuote=()=>{
  fetch(url).then(data=>data.json()).then(item=>{
  
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    
      <Card author={item.author} content={item.content} />
    
    );
    })
}
return getQuote()
}

export default App;
