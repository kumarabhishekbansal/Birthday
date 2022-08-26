import React,{useState} from 'react'
// import ReactAudioPlayer from 'react-audio-player';
import aud1 from '../Images/ba.mp3'
const Bet = () => {
    const [name, setname] = useState("");
    const [uname, setuname] = useState("");
    // let audio = new Audio("../Images/ba.mp3");
    const setval=(e)=>{
        if(e.target.value !== "")
        {
            setname(e.target.value);
        }else{
            setname("");
        }
    }
    const ongo=()=>{
        setuname(name);
        new Audio(aud1).play();
        // window.scrollBy(0,window.innerHeight);
        setTimeout(()=>{
            setInterval(() => {
                window.scrollBy(0,200);
            },300);
        },5000);

        
    }

    
    return (
    <>
        <div className="betdiv">
        <div className="inputevent">
        <input type="text" className='form-control in searchinput' placeholder='Enter Your Name' 
            onChange={setval}
            value={name}
        />
        <button
        onClick={ongo}
        className="btn btn-primary searchbtn"
        >Submit</button>
        </div>
        <div className="head text-primary">
            {(uname==="")?<p>Happy Birthday to You</p>:<p>Happy Birthday to {uname}</p>}
        </div>
        {/* <audio
                    src={aud1}
                    autoPlay
                    controls
                    className='w-100 mt-0 ra'
                    style={{ "height": "50px" ,border:"10px solid skyblue" ,borderRadius:"2rem"}}
        ></audio> */}
        </div>
    </>
  )
}

export default Bet