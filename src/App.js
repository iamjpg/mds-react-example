import { useState, useEffect, useRef } from 'react';
import { MxTable } from '@moxiworks/mds/react';
import debounce from 'lodash.debounce';
import './App.css';

function App() {
  const tableRef = useRef(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [lastPage, setLastPage] = useState(false);
  const [data, setData] = useState([]);

  const getData = async (page, pageSize) => {
    const initialData = await fetch(
      `https://anapioficeandfire.com/api/houses?page=${page}&pageSize=${pageSize}`
    );
    const pages = initialData.headers.get('link').match(/page=[0-9]+/g);
    const lastPage = +/[0-9]+/.exec(pages[pages.length - 1])[0];
    console.log(lastPage);
    setLastPage(lastPage === page);
    const initialJson = await initialData.json();
    setData(initialJson);
  };

  const setListners = () => {
    if (tableRef && tableRef.current) {
      tableRef.current.addEventListener('mxPageChange', (e) => {
        const { detail } = e;
        handlePagination(detail);
      });
    }
  };

  const handlePagination = debounce(
    ({ page, rowsPerPage }) => {
      setPageSize(rowsPerPage);
      setPage(page);
      getData(page, rowsPerPage);
    },
    500,
    {
      leading: true,
      trailing: false,
    }
  );

  useEffect(() => {
    getData(page, pageSize);
    setListners();
  });

  return (
    <>
      <main>
        <h1>Listings in 98115</h1>
        <br />
        <MxTable
          serverPaginate
          ref={tableRef}
          page={page}
          rowsPerPageOptions={[5, 10, 20, 50]}
          rowsPerPage={pageSize}
          disableNextPage={lastPage}
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
