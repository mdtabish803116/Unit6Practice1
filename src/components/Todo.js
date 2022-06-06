import List from "./List"

const Todo = () =>{
    const Data = [
        { id: 1, title: "Wake up", status: true },
        { id: 2, title: "drink tea", status: false },
        { id: 3, title: "eat maggi", status: true },
        { id: 4, title: "sleep", status: false }
      ]

      return (<div>
                  <input></input>
                    <button>ADD</button>
                {
                    Data.map((item) =>{
                          return <List {...item}/>
                     })
                } 
             </div>)

}

export default Todo;