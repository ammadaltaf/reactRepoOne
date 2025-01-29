export const EventPropagation = () => {
    const handleGrandParent = ()=>{
        console.log('GrandParent Clicked');
    }

    const handleParentClick = ()=>{
        console.log('Parent Clicked');
    }
    const handleChildClick = (event)=>{
        console.log(event);
        console.log('Child Clicked');
    }
    return(
        <>
        <button onClick={handleGrandParent}>GrandParent Btn</button>
        <button onClick={handleParentClick}>Parent Btn</button>
        <button onClick={handleChildClick}>Child Btn</button>
        </>
    );
}