import { useState, useRef } from 'react';
import { useEffectOnce } from 'react-use';
import { MxTable } from '@moxiworks/mds/react';
import debounce from 'lodash.debounce';
import './App.css';

function App() {
  // Reference for the table. Important for the mxPageChange listener.
  const tableRef = useRef(null);

  // Using useState but this can clearly be useReducer or Redux or Zustand or whatever.
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [isLastPage, setIsLastPage] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [data, setData] = useState([]);

  // Simple retrieve method to return data from API and setting state.
  const getData = async (page, pageSize) => {
    const initialData = await fetch(
      `https://anapioficeandfire.com/api/houses?page=${page}&pageSize=${pageSize}`
    );
    const initialJson = await initialData.json();

    // With this API we need to inspect the header to glean the total pages available in the API.
    // Remember, this is specific to the API the example is working with.
    const pages = initialData.headers.get('link').match(/page=[0-9]+/g);
    const lastPage = +/[0-9]+/.exec(pages[pages.length - 1])[0];

    // Set Data
    setTotalPages(lastPage);
    setIsLastPage(lastPage === page);
    setData(initialJson);
  };

  // mxPageChange listener for pagination events.
  // This returns a `detail` object on the event.
  // That detail has the expected page number and rowsPerPage with it.
  const setListners = () => {
    if (tableRef && tableRef.current) {
      tableRef.current.addEventListener('mxPageChange', (e) => {
        const { detail } = e;
        handlePagination(detail);
      });
    }
  };

  // Taking the data from the listener above, we get new data
  // based on new pagination params passed from pagination event.
  // I'm using debounce here to ensure I'm not making multiple calls.
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

  // This could be useEffect but I like being explicit
  // in this case and the react-use library is nice.
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
          // Server side pagination
          serverPaginate
          // Table Reference
          ref={tableRef}
          // Current Page
          page={page}
          // Per Page Options Dropdown
          rowsPerPageOptions={[5, 10, 20, 50]}
          // Rows per page to show
          rowsPerPage={pageSize}
          // Disable next page if is last page.
          disableNextPage={isLastPage}
          // Rows is the data array returned from the API.
          rows={data}
          // Properties are properties returned from the API. Headings are the label name for the column.
          columns={[
            { property: 'name', heading: 'Name', sortable: false },
            { property: 'region', heading: 'Region', sortable: false },
            {
              property: 'coatOfArms',
              heading: 'Coat of Arms',
              sortable: false,
            },
          ]}
          // Total Rows gives you the `n - n of n` text.
          totalRows={totalPages}
        />
      </main>
    </>
  );
}

export default App;
