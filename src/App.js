import FilterableProductTable from "./FilterableProductTable"
import './App.css';

function App() {
  return (
    <FilterableProductTable products={PRODUCTS}/>)
}
const PRODUCTS = [
  {category: "Fruits", price: "$3", stocked: true, name: "Banana"},
  {category: "Fruits", price: "$2", stocked: false, name: "Mango"},
  {category: "Fruits", price: "$1.50", stocked: true, name: "Grapes"},
  {category: "Vegetables", price: "$2.50", stocked: false, name: "Carrot"},
  {category: "Vegetables", price: "$3", stocked: true, name: "Broccoli"},
  {category: "Vegetables", price: "$1.50", stocked: true, name: "Cucumber"},
  {category: "Dairy", price: "$2.50", stocked: true, name: "Milk"},
  {category: "Dairy", price: "$1.50", stocked: false, name: "Cheese"},
  {category: "Dairy", price: "$3.50", stocked: true, name: "Yogurt"},
  {category: "Meat", price: "$5", stocked: true, name: "Chicken Breast"},
  {category: "Meat", price: "$4", stocked: false, name: "Beef Steak"},
  {category: "Meat", price: "$3", stocked: true, name: "Pork Chop"},
  {category: "Bakery", price: "$2", stocked: true, name: "Bread"},
  {category: "Bakery", price: "$1.50", stocked: false, name: "Croissant"},
  {category: "Bakery", price: "$3", stocked: true, name: "Muffin"},
  {category: "Snacks", price: "$1.50", stocked: true, name: "Chips"},
  {category: "Snacks", price: "$2.50", stocked: false, name: "Pretzels"},
  {category: "Snacks", price: "$1", stocked: true, name: "Popcorn"},
  {category: "Beverages", price: "$1.50", stocked: true, name: "Soda"},
  {category: "Beverages", price: "$2.50", stocked: false, name: "Juice"},
  {category: "Beverages", price: "$3", stocked: true, name: "Coffee"},
  {category: "Frozen", price: "$4", stocked: true, name: "Ice Cream"},
  {category: "Frozen", price: "$2", stocked: false, name: "Frozen Pizza"},
  {category: "Frozen", price: "$3.50", stocked: true, name: "Frozen Vegetables"},
  
];
export default App;
