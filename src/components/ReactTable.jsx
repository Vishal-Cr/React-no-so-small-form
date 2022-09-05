import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Table, TableHead, TableBody } from "./styles/Table.styled";

const ReactTable = (props) => {
  const { data, current_selected_state } = props;

  return (
    <div className="Tabel_component">
      <div>
        <Table>
          <TableHead style={{ backgroundColor: "blue" }}>
            <tr>
              <th>NAME</th>
              <th>AGE</th>
              <th>SEX</th>
              <th>STATE</th>
              <th>CITY</th>
              <th>MOBILE</th>
              <th>Email</th>
            </tr>
          </TableHead>
          <TableBody style={{ textAlign: "center" }}>
            {data.map((item) => {
              return (
                <tr key={uuidv4()}>
                  <td>{item.Name}</td>
                  <td>{item.Age}</td>
                  <td>{item.Sex}</td>
                  <td>
                    {current_selected_state == "Enter State"
                      ? "N/A"
                      : current_selected_state}
                  </td>
                  <td>{item.City || "N/A"}</td>
                  <td>{item.Mobile || "N/A"}</td>
                  <td>{item.Email || "N/A"}</td>
                </tr>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default React.memo(ReactTable);
