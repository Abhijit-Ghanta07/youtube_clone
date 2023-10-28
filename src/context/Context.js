// import React, { createContext, useEffect, useState, memo } from "react";
// export const DataContext = createContext();
// const ContextApi = ({ children }) => {
//   const [apiData, setApidata] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [catagories, setCatagories] = useState("search/?q=random videos");
//   function getData(query) {
//     setLoading(true);
//     dataFetch(query)
//       .then((result) => {
//         setApidata(result.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   useEffect(() => {
//     getData(catagories);
//   }, [catagories]);
//   return (
//     <DataContext.Provider
//       value={{ apiData, loading, setLoading, setCatagories }}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// };
// export default memo(ContextApi);
