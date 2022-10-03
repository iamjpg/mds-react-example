import { useState, useRef } from 'react';
import { useEffectOnce } from 'react-use';
import { MxTable } from '@moxiworks/mds/react';
import debounce from 'lodash.debounce';
import './App.css';

function App() {
  const tableRef = useRef(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [isLastPage, setIsLastPage] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [data, setData] = useState([]);

  const getData = async (page, pageSize) => {
    const initialData = await fetch(
      `https://anapioficeandfire.com/api/houses?page=${page}&pageSize=${pageSize}`
    );
    const initialJson = await initialData.json();
    const pages = initialData.headers.get('link').match(/page=[0-9]+/g);
    const lastPage = +/[0-9]+/.exec(pages[pages.length - 1])[0];
    setTotalPages(lastPage);
    setIsLastPage(lastPage === page);
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

  useEffectOnce(() => {
    getData(page, pageSize);
    setListners();
  });

  return (
    <>
      <main className='mds'>
        <h3>Game of Thrones Houses</h3>
        <br />
        <MxTable
          serverPaginate
          ref={tableRef}
          page={page}
          rowsPerPageOptions={[5, 10, 20, 50]}
          rowsPerPage={pageSize}
          disableNextPage={isLastPage}
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
          totalRows={totalPages}
        />
      </main>
    </>
  );
}

export default App;
