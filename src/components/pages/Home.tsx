// import React, { useState } from "react";
// import { Table } from "antd";
// import type { ColumnsType } from "antd/es/table";
// import type { TableRowSelection } from "antd/es/table/interface";

// interface DataType {
//   key: React.ReactNode;
//   name: string;
//   age: number;
//   address: string;
//   children?: DataType[];
// }

// const columns: ColumnsType<DataType> = [
//   {
//     title: (
//       <span>
//         Name <button style={{ background: "red" }}>...</button>
//       </span>
//     ),
//     dataIndex: "name",
//     key: "name",
//     render: (value: any, record: any, index: any) => {
//       console.log(record);
//       if (record.title === "Name") {
//         return (
//           <div>
//             <span>value</span>
//             <button style={{ background: "red" }}>test</button>
//           </div>
//         );
//       }

//       return <>{value}</>;
//     },
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//     key: "age",
//     width: "12%",
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//     width: "30%",
//     key: "address",
//   },
// ];

// const data: DataType[] = [
//   {
//     key: 1,
//     name: "John Brown sr.",
//     age: 60,
//     address: "New York No. 1 Lake Park",

//     children: [
//       {
//         key: 11,
//         name: "John Brown",
//         age: 42,
//         address: "New York No. 2 Lake Park",
//       },
//       {
//         key: 12,
//         name: "John Brown jr.",
//         age: 30,
//         address: "New York No. 3 Lake Park",
//         children: [
//           {
//             key: 121,
//             name: "Jimmy Brown",
//             age: 16,
//             address: "New York No. 3 Lake Park",
//           },
//         ],
//       },
//       {
//         key: 13,
//         name: "Jim Green sr.",
//         age: 72,
//         address: "London No. 1 Lake Park",
//         children: [
//           {
//             key: 131,
//             name: "Jim Green",
//             age: 42,
//             address: "London No. 2 Lake Park",
//             children: [
//               {
//                 key: 1311,
//                 name: "Jim Green jr.",
//                 age: 25,
//                 address: "London No. 3 Lake Park",
//               },
//               {
//                 key: 1312,
//                 name: "Jimmy Green sr.",
//                 age: 18,
//                 address: "London No. 4 Lake Park",
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     key: 2,
//     name: "Joe Black",
//     age: 32,
//     address: "Sidney No. 1 Lake Park",
//   },
// ];

// const rowSelection: TableRowSelection<DataType> = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     console.log(
//       `selectedRowKeys: ${selectedRowKeys}`,
//       "selectedRows: ",
//       selectedRows
//     );
//   },
//   onSelect: (record, selected, selectedRows) => {
//     console.log(record, selected, selectedRows);
//   },
//   onSelectAll: (selected, selectedRows, changeRows) => {
//     console.log(selected, selectedRows, changeRows);
//   },
// };

// const Home: React.FC = () => {
//   return (
//     <div>
//       {/* <button onClick={() => setExpand(columns2)}>+</button>
//       <button onClick={() => setExpand(columns)}>-</button> */}
//       <Table
//         columns={columns}
//         // expandable={{
//         //   expandedRowRender: (record) => (
//         //     <p style={{ margin: 0 }}>{record.description}</p>
//         //   ),
//         //   rowExpandable: (record) => record.name !== "Not Expandable",
//         //   expandRowByClick: true,
//         // }}
//         // showColum
//         rowSelection={{ ...rowSelection, hideSelectAll: true }}
//         // onRow={(record, rowIndex) => {
//         //   return {
//         //     onClick: (event) => {}, // click row
//         //     onDoubleClick: (event) => {}, // double click row
//         //     onContextMenu: (event) => {}, // right button click row
//         //     onMouseEnter: (event) => {}, // mouse enter row
//         //     onMouseLeave: (event) => {}, // mouse leave row
//         //   };
//         // }}
//         dataSource={data}
//       />
//     </div>
//   );
// };

// export default Home;

import React, { useRef } from 'react';

const Chil = React.forwardRef((props, ref: any) => {
  // const spanElement = useRef(null);
  // console.log(
  //   '🚀 ~ file: Home.tsx:170 ~ Chil ~ spanElement',
  //   spanElement.current
  // );
  // console.log('sdf');
  return (
    <div>
      <span ref={ref}>test child</span>
    </div>
  );
});

const Home = () => {
  const element = useRef(null);
  console.log('🚀 ~ file: Home.tsx:181 ~ Home ~ element', element.current);
  // console.log(_);

  return (
    <div>
      <Chil ref={element} />
    </div>
  );
};

export default Home;
