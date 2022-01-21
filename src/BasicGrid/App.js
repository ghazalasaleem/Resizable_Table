import { useState } from 'react';
import './App.scss';
import { data } from '../config/GridConfig';

function App() {
  const [columns, setColumns] = useState([{
    key: 'job',
    title: 'Job',
    fixSize: false,
  },
  {
    key: 'desc',
    title: 'Description',
    fixSize: false,
  },
  {
    key: 'comment',
    title: 'Comment',
    fixSize: false,
  }]);

  const handleClick = (args) => {
    const cols = [...columns];
      cols.map((col) => {
        if(col.key === args) {
          col.fixSize = !col.fixSize;
        }
        return col;
      });
    setColumns(cols);
  };

  const fetchHeader = () => {
    return columns.map((col) => (
      <th key={col.key} className={col.fixSize? 'fixed' : ''} onClick={(e) => handleClick(col.key)}> 
        {col.title}
        {col.fixSize? '<->' : ''}
      </th>
    ));
  };

  const fetchContent = () => {
    return data.map((item) => (
      <tr key={item.key}>
        {columns.map((col) => (
          <td key={`${col.key}_${item.key}`} className={col.fixSize? 'fixed' : ''}> 
            {item[col.key]}
          </td>
        ))}
      </tr>
    ));
    
    
  };
  return (
    <div className="App">
    <h3>Click on the column header to autofit width.</h3>

      <table>
        <thead>
          <tr>
            {fetchHeader()}
          </tr>
        </thead>
        <tbody>
          {fetchContent()}
        </tbody>
        {/* <tr>
          <td>Job 1P23</td>
          <td>Something that is worth doing. Something that is worth doing. Something that is worth doing.</td>
          <td>Michael Jordan, Obama a champion, Mandela a champion, Serena a champion</td>
        </tr>
        <tr>
          <td>Job 78U34678</td>
          <td>Task to be done asap. Task to be done asap. Task to be done asap.</td>
          <td>Michael Jordan, Obama a champion, Mandela a champion, Serena a champion, Wendy a champion, Shelly-Ann a champion</td>
        </tr>
        <tr>
          <td>Job 12A32G7</td>
          <td>If you want to do, do it. else leave it. If you want to do, do it. else leave it.If you want to do, do it. else leave it</td>
          <td>Michael Jordan, Obama a champion, Mandela a champion, Serena a champion, Wendy a champion, Shelly-Ann a champion, Michael Jordan, Obama a champion, Mandela a champion, Serena a champion, Wendy a champion, Shelly-Ann a champion</td>
        </tr> */}
      </table>
    </div>
  );
}

export default App;
