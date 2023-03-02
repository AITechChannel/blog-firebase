import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const dataSidebar = [
  {
    icon: <div>Icon</div>,
    title: "Dashboard",
    path: "/dashboard",
    isActive: false,
    childrens: [
      {
        icon: <div>Icon</div>,
        title: "My App",
        path: "/dashboard/myapp",
        isActive: false,
        childrens: []
      },
      {
        icon: <div>Icon</div>,
        title: "My App 2",
        path: "/dashboard/abc",
        isActive: false,
        childrens: []
      }
    ]
  },
  {
    id: "2",
    icon: <div>Icon</div>,
    title: "Next feature",
    path: "/nextFeature",
    isActive: false,
    childrens: [
      {
        icon: <div>Icon</div>,
        title: "feature 1",
        path: "/nextFeature/f1",
        isActive: false,
        childrens: [
          {
            icon: <div>Icon</div>,
            title: "feature 1.1",
            path: "/nextFeature/f1",
            isActive: false,
            childrens: []
          }
        ]
      }
    ]
  }
];

function Sidebar() {
  let location = useLocation();

  const [showChildren, setShowChildren] = useState(false);

  const wrapperElement = useRef<HTMLDivElement>(null);
  const handleDataSidebar = (dataSidebar: any): any[] => {
    const toggleActive = (item: any): boolean => {
      if (location.pathname.includes(item.path)) {
        return true;
      }
      return false;
    };

    return dataSidebar.map((itemSidebar: any, index: number) => {
      if (itemSidebar.childrens.length === 0) {
        return { ...itemSidebar, isActive: toggleActive(itemSidebar) };
      }

      return {
        ...itemSidebar,
        isActive: toggleActive(itemSidebar),
        childrens: handleDataSidebar(itemSidebar.childrens)
      };
    });
  };

  const renderSidebar = (dataSidebar: any) => {
    return dataSidebar.map((item: any, index: any) => {
      if (item.childrens.length === 0) {
        return (
          <li className={item.isActive ? "text-red" : "text-black"}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        );
      }
      return (
        <div
          className={item.isActive ? "text-red" : ""}
          onClick={onClick}
          ref={wrapperElement}
        >
          {" "}
          <li className={item.isActive ? "text-red" : "text-black"}>
            {item.title}
          </li>
          {renderSidebar(item.childrens)}
        </div>
      );
    });
  };

  const onClick = (e: any) => {
    e.stopPropagation();
    setShowChildren(!showChildren);

    const parentElement = e.target.parentElement;
    const listTagChild = parentElement.children;

    var arr = Array.from(listTagChild);

    // console.log("🚀 ::::: onClick ::::: child:", arr);

    arr.map((tag: any, index: number) => {
      if (index === 0) {
        return;
      }

      console.log(tag);

      if (tag.children.length > 2) {
        Array.from(tag.children).map((item: any, idx: number) => {
          if (idx === 0) {
            if (item.className.includes("hidden")) {
              item.classList.remove("hidden");
              return;
            }
          }
          if (item.className.includes("hidden")) {
            item.classList.remove("hidden");

            return;
          }
          item.classList.add("hidden");
        });
      } else {
        console.log("adf");
        if (tag.className.includes("hidden")) {
          tag.classList.remove("hidden");
          return;
        }

        tag.classList.add("hidden");
      }
    });

    // if (listTagChild) {
    //   setShowChildren(false);
    //   listTagChild?.classList.add("hidden");
    // } else {
    //   setShowChildren(true);
    //   listTagChild?.classList.remove("hidden");
    // }
  };

  return renderSidebar(handleDataSidebar(dataSidebar));
}

export default Sidebar;
