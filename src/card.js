import ReactDOM from 'react-dom';
import css from  "./css.css"
const React=require('react');
function handlleClick(){
    window.location.reload()
}
function Card(props){
return (<div class="card transition">
<h2 class="transition">{props.author}</h2>
<p>{props.content}</p>
<div class="cta-container transition"><a onClick={handlleClick} href="#" class="cta">New Quote</a></div>
<div class="card_circle transition"></div>
</div>)

}

export default Card;