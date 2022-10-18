
const AddGamers = ({newPlayer}) => {
    return(
       <form onSubmit={submitHandler}>
           <input type="text" placeholder="Enter Name" on Change={newPlayer}/>
           <button type="button" onClick={handleAdd}> Add Player </button>
        </form>
    );
}


export default AddGamers