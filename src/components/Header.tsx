
function Header(props:any){
return(
    <div>
    <div className="bg"></div>
    <div className="bg-dark p-3">
      <h4 className="d-flex text-light justify-content-center">{props.text}</h4>
    </div>
    </div>
)

}

export {Header}