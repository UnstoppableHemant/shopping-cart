const Buttons=({id,val,btnname,style,clickEvent})=>{
    return(
        <>
        <button id={id} value={val} className={`${style}`} onClick={clickEvent}>{btnname}</button>
        </>
    )
}
export default Buttons;