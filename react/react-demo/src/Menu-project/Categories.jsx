import React from "react"

const Categories = ({filterItems}) =>{
    return <div className="btn-container">
        <button className="filter-btn" on-click={()=>
            filterItems("All")}>
                All
                </button> 
                <button className="filter-btn" on-click={()=>
            filterItems("Breakfast")}>
                Breakfast
                </button>       
        
        
         </div>


};

export default Categories


