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
              <th>MOBILE</th>
              <th>STATE</th>
              <th>CITY</th>
              <th>OCCUPATION</th>
              <th>BLOOD GROUP</th>
            </tr>
          </TableHead>
          <TableBody style={{ textAlign: "center" }}>
            {data.map((item) => {
              return (
                <tr key={uuidv4()}>
                  <td>{item.Name}</td>
                  <td>{item.Age}</td>
                  <td>{item.Sex}</td>
                  <td>{item.Mobile || "N/A"}</td>
                  <td>{current_selected_state || "N/A"}</td>
                  <td>{item.City || "N/A"}</td>
                  <td>{item.Occupation || "N/A"}</td>
                  <td>{item.BloodGroup || "N/A"}</td>
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
