
import Preact, { h} from 'preact'; 
import { useState } from 'preact/hooks'; 
import "../styles/global.css"; 

export default function Greeting({message} : {message: Array<string>})  {
    const [greeting, setGreeting] = useState<string>(message[0]); 
    const randomMessage = () : string => message[(Math.floor(Math.random() * message.length))]; 
    const BeforeStyle = "before:object-fit before:content-[''] before:h-full before:w-0 before:bg-black before:absolute before:inset-0 before:opacity-10 hover:before:w-full before:transform-all before:z-10 before:duration-[500ms]"

    return(
        <div>
            <h1>{greeting}</h1>
            <div 
                class ={`w-fit px-5 py-1 rounded-lg cursor-pointer select-none active:translate-x-[1px] active:translate-y-[1px] relative bg-slate-300 text-white font-bold overflow-hidden ${BeforeStyle} clippedShape`}
                onClick = {()=>setGreeting(randomMessage())}
            ><div class="z-20 text-white">New Greeting</div></div>
        </div>
    )
}