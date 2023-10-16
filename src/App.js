import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Диван',
          img: '3.jpg',
          desc: 'Loreeoe eijeoie oej o',
          category: 'sofa',
          price: '43,99'
        },
        {
          id: 2,
          title: 'Диван',
          img: '3.jpg',
          desc: 'Loreeoe eijeoie oej o',
          category: 'light',
          price: '43,99'
        },
        {
          id: 3,
          title: 'Диван',
          img: '3.jpg',
          desc: 'Loreeoe eijeoie oej o',
          category: 'sofa',
          price: '43,99'
        },
        {
          id: 4,
          title: 'Диван',
          img: '3.jpg',
          desc: 'Loreeoe eijeoie oej o',
          category: 'sofa',
          price: '43,99'
        },
        {
          id: 5,
          title: 'Диван',
          img: '3.jpg',
          desc: 'Loreeoe eijeoie oej o',
          category: 'light',
          price: '43,99'
        },
        {
          id: 6,
          title: 'Диван',
          img: '3.jpg',
          desc: 'Loreeoe eijeoie oej o',
          category: 'sofa',
          price: '43,99'
        },
        {
          id: 7,
          title: 'Диван',
          img: '3.jpg',
          desc: 'Loreeoe eijeoie oej o',
          category: 'sofa',
          price: '43,99'
        },
        {
          id: 8,
          title: 'Диван',
          img: '3.jpg',
          desc: 'Loreeoe eijeoie oej o',
          category: 'sofa',
          price: '43,99'
        },
        {
          id: 9,
          title: 'Диван',
          img: '3.jpg',
          desc: 'Loreeoe eijeoie oej o',
          category: 'sofa',
          price: '43,99'
        },
        {
          id: 10,
          title: 'Диван',
          img: '3.jpg',
          desc: 'Loreeoe eijeoie oej o',
          category: 'sofa',
          price: '43,99'
        },
        {
          id: 11,
          title: 'Диван',
          img: '3.jpg',
          desc: 'Loreeoe eijeoie oej o',
          category: 'light',
          price: '43,99'
        },
        {
          id: 12,
          title: 'Диван',
          img: '3.jpg',
          desc: 'Loreeoe eijeoie oej o',
          category: 'sofa',
          price: '43,99'
        }
      ]
    }
    this.state.currentItems =this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render(){return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items items={this.state.currentItems} onAdd={this.addToOrder} />
      <Footer />
    </div>
  )}

  chooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }
  
  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item){
    let isInArray = false;
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }

}

export default App;
