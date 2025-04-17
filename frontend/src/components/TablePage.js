import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TablePage = () => {
  const [items, setItems] = useState([]);
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/items').then(res => {
      setItems(res.data);
    });
  }, []);

  const handleChange = (id, value) => {
    setInputs(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div>
      <h2>Items Table</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Input</th>
            <th>Existing Value</th>
            <th>Percentage (%)</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => {
            const userValue = parseFloat(inputs[item.id]) || 0;
            const percentage = ((userValue / item.value) * 100).toFixed(2);

            return (
              <tr key={item.id}>
                <td>
                  <input
                    type="number"
                    onChange={e => handleChange(item.id, e.target.value)}
                  />
                </td>
                <td>{item.value}</td>
                <td>{userValue ? percentage + '%' : '—'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;
