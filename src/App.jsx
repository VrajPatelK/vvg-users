import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import CounterContainer from "./Components/Counters/CounterContainer"
import Carosouel from "./Components/Carosuel/Carosouel";
import TestimonialCarosuel from "./Components/Testimonials/TestimonialCarosuel";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import Logo from "./assets/t-logo.png";
// Component for the logo .
const start = (
  <Link to={"/"}>
    <img alt="logo" src={Logo} height="20" className="mr-2 w-3"></img>
  </Link>
);

// component for the search bar .
const end = (
  <div className="flex align-items-center gap-2">
    <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
  </div>
);

function App() {
  // Used to render the items in the menbar..
  const itemRenderer = (item) => (
    <Link to={item?.path} className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </Link>
  );

  // all items of the menu bar.
  const items = [
    {
      label: "Home",
      path: "/",
      icon: "pi pi-home",
    },
    {
      label: "Features",
      path: "/features",
      icon: "pi pi-star",
    },
    {
      label: "Projects",
      icon: "pi pi-search",
      items: [
        {
          label: "Core",
          icon: "pi pi-bolt",
          shortcut: "⌘+S",
          template: itemRenderer,
        },
        {
          label: "Blocks",
          icon: "pi pi-server",
          shortcut: "⌘+B",
          template: itemRenderer,
        },
        {
          label: "UI Kit",
          icon: "pi pi-pencil",
          shortcut: "⌘+U",
          template: itemRenderer,
        },
        {
          separator: true,
        },
        {
          label: "Templates",
          icon: "pi pi-palette",
          items: [
            {
              label: "Apollo",
              icon: "pi pi-palette",
              badge: 2,
              template: itemRenderer,
            },
            {
              label: "Ultima",
              icon: "pi pi-palette",
              badge: 3,
              template: itemRenderer,
            },
          ],
        },
      ],
    },
    {
      label: "Contact",
      path: "/contact",
      icon: "pi pi-envelope",
      badge: 3,
      template: itemRenderer,
    },
  ];

  return (
    <div className="card w-lg-80  mx-auto">
      <Router>
        <Menubar model={items} start={start} end={end} />
        <Routes initialRouteName="/">
          <Route
            path="/"
            element={
              <>
                <Carosouel />
                <CounterContainer />
                <TestimonialCarosuel />
              </>
            }
          />
          <Route path="/contact" element={<ContactUs />} />
          {/* <TestimonialCarosuel /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
