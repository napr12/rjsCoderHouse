const LiA = (props)=>{
    return(
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">{props.text}</a>
    </li>
    )   
}
export default LiA