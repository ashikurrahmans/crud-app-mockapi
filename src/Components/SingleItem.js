import React from "react";
import { GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

const SingleItem = ({ item }) => {
  const iconSize = {
    fontSize: "20px",
    display: "inline-block",
  };

  const deleteItem = async (id) => {
    await axios
      .delete(`https://630a78163249910032862d51.mockapi.io/cruds/${id}`)
      .then((res) => {});
  };

  const { id, name, email } = item;

  return (
    <>
      <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
        <td class="border-grey-light border hover:bg-gray-100 p-3">{name}</td>
        <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
          {email}
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap  cursor-pointer flex gap-6">
          <GrEdit style={iconSize} color="yellow"></GrEdit>
          <AiFillDelete
            style={iconSize}
            color="red"
            onClick={() => {
              deleteItem(id);
            }}
          ></AiFillDelete>
        </td>
      </tr>
    </>
  );
};

export default SingleItem;
