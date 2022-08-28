import React, { useEffect, useState } from "react";
import SingleItem from "./SingleItem";

const AllContacts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://630a78163249910032862d51.mockapi.io/cruds")
      .then((response) => response.json())
      .then((data) => setData(data));
  });

  return (
    <div className="w-10/12 mx-auto max-w-screen-lg max-h-screen mt-10 shadow-inner rounded-2xl">
      <h1 className="text-center text-3xl font-bold bg-orange-900 text-white py-6">
        All Contacts
      </h1>
      <div className="flex items-center justify-center">
        <div className="container">
          <table className="w-full sm:bg-white rounded-lg overflow-hidden sm:shadow-lg">
            <thead className="text-white">
              <tr className="bg-teal-400 w-full flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left" width="110px">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="flex-1 sm:flex-none">
              {data.map((item, i) => {
                return <SingleItem item={item} key={i} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllContacts;
