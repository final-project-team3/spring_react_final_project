import React, {useRef, useState} from "react";
import {Nav, Table, Form} from "react-bootstrap";

function OptionTable(prop) {
  const initialForm = {
    id:1,
    queueType:'',
    startDate:'2011-08-19',
    endDate:'2011-08-19',
    week:'',
    startTime:'13:45:00',
    endTime:'13:45:00',
    capacity:0
  }
  return (
    <div>
      <Nav />
      <div className="import">
        <h1>Import New Schedule</h1>
        <div className="importTable">
          <Table className="table table-hover" id="tables">
            <thead className="thead-dark">
            <tr>
              <th>Queue</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Day of Week</th>
              <th>Time Start</th>
              <th>Time End</th>
              <th>Capacity</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <Form.Control as="select">
                  <option>Veteran Affairs</option>
                  <option>Older Australians</option>
                  <option>Disability Sickness Carers</option>
                  <option>Report Employment Income</option>
                </Form.Control>
              </td>
              <td>
                <input
                  className="form-control"
                  type="date"
                  value="2011-08-19"
                  id="example-date-input"
                />
              </td>
              <td>
                <input
                  className="form-control"
                  type="date"
                  value="2011-08-19"
                  id="example-date-input"
                />
              </td>
              <td>
                <Form.Control as="select">
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                  <option>Sunday</option>
                </Form.Control>
              </td>
              <td>
                <input
                  className="form-control"
                  type="time"
                  value="13:45:00"
                  id="example-time-input"
                />
              </td>
              <td>
                <input
                  className="form-control"
                  type="time"
                  value="13:45:00"
                  id="example-time-input"
                />
              </td>
              <td>
                <input
                  className="form-control"
                  type="number"
                  value="0"
                  id="example-number-input"
                />
              </td>
            </tr>
            </tbody>
          </Table>
          <button id="addRow">+ Add</button>
        </div>
      </div>
    </div>
  );
}

export default OptionTable;