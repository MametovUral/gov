const Table = ({ columns, data }) => {
  return (
    <table className="table-items">
      <thead>
        <tr>
          <th className="border text-center w-8">T/R</th>
          {columns.map((data, i) => {
            return (
              <th key={i} className="border text-left p-2">
                {data}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((user, i) => {
          return (
            <tr
              key={i}
              className={`${i % 2 === 0 ? "bg-slate-200" : "bg-white"}`}
            >
              {Object.keys(user).map((title, i) => {
                return (
                  <td key={i} className="border text-left p-2">
                    {user[title]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
