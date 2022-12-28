import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  const arr = [
    ["S", "M"],
    [1, 2],
    [4, 5, 6],
  ];
  const render = (arr: any) => {
    const kq: any = [];

    const loop: any = [];

    for (let i = 0; i < arr.length; i++) {
      // console.log(arr[i]);

      // kq.push(arr[i]);
      for (let j = 0; j < arr[i].length; j++) {
        // return arr[i][j];
        // return kq.push(arr[i]);
        // console.log(arr[i], arr[j]);
        // return arr[i][j];

        if (i === arr.length - 1) {
        } else {
          loop.push([arr[i][j], arr[i + 1][j]]);
          // loop.push([arr[i][j]]);
        }

        // for (let k = 0; k < arr[i].length; k++) {
        //   // return arr[i][k];
        //   // return kq.push(arr[i]);
        //   // console.log(arr[i], arr[k]);
        //   // return arr[i][k];

        //   loop[i].push(arr[i][j][k]);
        // }
      }
    }
    console.log("loop2", loop);
    console.log("loop1", kq);

    // return kq;
  };

  render(arr);

  // console.log(render(arr));

  return (
    <div>
      Home
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
