import logo from './logo.png';
import './App.css';
import React from "react";

class App extends React.Component
{

  constructor(props){
    super(props);
    this.state={
      newItem: "",
      list:[]
    };

  }


  addItem(todoValue)
  {

    if(todoValue!=="")
    {
      const newItem={
        id:Date.now(),
        value:todoValue,
        isDone:false
      }

      const list=[...this.state.list];
      list.push(newItem);

      this.setState({
        list:list,
        newItem:""
      });

    }

  }


  deleteItem(id){
    const list=[...this.state.list];
    const updatedList =list.filter(item=> item.id !== id);
    this.setState({
      list:updatedList
    });
  }

  updateInput(input){
    this.setState({
      newItem:input
    });

  }

  render()
  {
    return(
      <div>
        <img src={logo} width="80" height="80" className='logo'/>
        <h1 className='app-title' > Today's Tasks</h1>
        <div className="container">
        

        <input
          type="text"
          placeholder='Enter Task'
          className='input-text'
          required
          value={this.state.newItem}
          onChange={e => this.updateInput(e.target.value)}
        />

         <button 
         className='add-btn'
         onClick={ () =>this.addItem(this.state.newItem)}
         disabled= {!this.state.newItem.length}
         >
    
           
           Add Item
         </button>

         <div className='list'>
          <ul>

            {this.state.list.map(item =>{
              return(
                <li key={item.id}>
                  <input
                  type="checkbox"
                  name="idDone"

                  checked={item.isDone}
                  onChange={()=>{}}
                  />
                  {item.value}

                  <button  
                  className='btn'
                  onClick={()=> this.deleteItem(item.id)}
                  
                  >Delete</button>
                  </li>
              )

            })
            }



            </ul> 
         
         </div>
         </div>
        
      </div>


    );
  }
}

export default App;
