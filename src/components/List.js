

const List = ({title , status}) =>{
    return(
        status?<h2 style = {{color : "green"}}>{title}</h2>:<h2 style = {{color : "red"}}>{title}</h2>
    )
}

export default List