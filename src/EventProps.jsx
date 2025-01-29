export const EventProps = () =>{
    const HandleWelcomeUser = (user)=>{
        alert(`Hey ${user}`);
    }
    const HandleHover = ()=>{
        alert('Hey Thanks for Hovering Me');
    }
    return(
        <>
        <WelcomeUser onClick= {()=> HandleWelcomeUser('Ammad')} onMouseEnter={HandleHover}/>
        </>
    );
};

const WelcomeUser = (props)=>{
    const HandleGreeting = () =>{
        console.log('Hey Welcome User');
        props.onClick();
    }
    return(
        <>
        <button onClick={props.onClick}>Click</button>
        <button onMouseEnter={props.onMouseEnter}>Hover Me</button>
        <button onClick={HandleGreeting}>Greeting</button>
        </>
    );
}