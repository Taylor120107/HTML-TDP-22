import './App.css';
import Menu from "./Menu-project/Menu"
import Categories from "./Menu.project/Categories"
import items from "./Menu-project/data"

const allCategories =["all",... new Set(items.map((item) => item.category))]
console.log(allCategories);
function App () {
  const [menuItems,setMenuItems] = useState(items)
  const [categries,setCategories] = useState ([allCategories])
  
  const filterItems = (category) => {
    if(category==="All"){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((items)=> items.category === category)
    setMenuItems(newItems)
  };

  return( <main> 
    <section className="menu selection">
      <div className="title">
        <h2> Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={menuItems}/>
      </section>
  </main>
  );
}


export default App; 
