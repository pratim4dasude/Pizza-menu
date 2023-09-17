import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "Red", fontSize: "22px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1>Pizza Company</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numpizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu </h2>

      {numpizzas > 0 ? (
        <> 
          <p>Authentic Resturant all organic Delicious pizza </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Comming Soon</p>
      )}

      {/* <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Fungi"
        ingredients="Tomatos mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out':''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ?  "Sold out":pizzaObj.price }</span>
      </div>
    </li>
  );
}

function Footer() {
  // return React.createElement("footer", null, "we are open");
  const hour = new Date().getHours();
  console.log(hour);
  const open = 12;
  const close = 22;
  const isopen = hour >= open && hour <= close;
  console.log(isopen);

  // if(hour >= open && hour <= close) alert("WE are Open"); else alert("WE are closed")

  return (
    <footer className="footer">
      {isopen ? <Order close={close} /> : <p>Come Back Later</p>}
    </footer>
  );
}

function Order({ close }) {
  return (
    <div className="order">
      <div className="order">
        <p>WE ARE OPEN until {close}pm</p>
        <button className="btn">Order</button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// Strict mode will render twice but help to render easily

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
