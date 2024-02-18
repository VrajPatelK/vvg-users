import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import Carosouel from "./Components/Carosuel/Carosouel";
import TestimonialCarosuel from "./Components/Testimonials/TestimonialCarosuel";


// Component for the logo .
const start = (
  <img
    alt="logo"
    src="https://primefaces.org/cdn/primereact/images/logo.png"
    height="40"
    className="mr-2"
  ></img>
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
    <a className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </a>
  );

  // all items of the menu bar.
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
    },
    {
      label: "Features",
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
      icon: "pi pi-envelope",
      badge: 3,
      template: itemRenderer,
    },
  ];

  return (
    <div className="card w-lg-80 mx-auto">
      <Menubar model={items} start={start} end={end} />
      <Carosouel />
      <TestimonialCarosuel />
    </div>
  );
}

export default App;
