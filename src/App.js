import { useState, useEffect } from 'react';
import { MxButton, MxTable } from '@moxiworks/mds/react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  const getData = async () => {
    const initialData = await fetch(
      'https://anapioficeandfire.com/api/houses?page=1&pageSize=5'
    );
    const initialJson = await initialData.json();
    setData(initialJson);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <main>
        <MxButton href='https://google.com' target='_blank'>
          Button as Link
        </MxButton>
        <br />
        <MxTable
          serverPaginate
          rowsPerPageOptions={[5, 10, 20, 50]}
          rowsPerPage={5}
          disablePagination={false}
          rows={data}
          columns={[
            { property: 'name', heading: 'Name', sortable: false },
            { property: 'region', heading: 'Region', sortable: false },
            {
              property: 'coatOfArms',
              heading: 'Coat of Arms',
              sortable: false,
            },
          ]}
        />
      </main>
    </>
  );
}

export default App;
