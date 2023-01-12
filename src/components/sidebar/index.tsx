import React from "react";

function SideBar({ list }: { list: any[] }) {
  //   const renderSideBar = list.map((_item: any, _idx: any) => {
  //     if (_item.childrens?.length > 0) {
  //       return (
  //         <div>
  //           <h3>{_item.name}</h3>
  //           <h4>{SideBar(_item.childrens)}</h4>
  //         </div>
  //       );
  //     }
  //     return <h3>{_item.name}</h3>;
  //   });

  //   return renderSideBar

  console.log(list);

  return (
    <>
      {list?.map((_item: any, _idx: any) => {
        if (_item.childrens?.length > 0) {
          return (
            <div>
              <h3 className="text-white">{_item.name}</h3>
              <SideBar list={_item.childrens} />
            </div>
          );
        }
        return <h3 className="text-white">{_item.name}</h3>;
      })}
    </>
  );
}

export default SideBar;
