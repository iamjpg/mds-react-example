import { useState, useEffect, useRef } from 'react';
import { MxTable } from '@moxiworks/mds/react';
import './App.css';

function App() {
  const tableRef = useRef(null);
  const [pageSize, setPageSize] = useState(5);
  const [data, setData] = useState([]);

  const getData = async () => {
    const initialData = await fetch(
      `https://svc.moxiworks.com/service/v1/listing/search_v2?bounds_north=47.789716443686764&bounds_east=-122.22114686987305&bounds_south=47.582631714741154&bounds_west=-122.35332613012696&center_lat=47.6849444&center_lon=-122.2982224&center_lat_pan=47.686276849139574&center_lon_pan=-122.2872365&geotype=Postcode1&pgsize=${pageSize}&startidx=0&company_uuid=1234567&geospatial=true&omit_hidden=true&currency=USD`
    );
    const initialJson = await initialData.json();
    setData(initialJson.data.result_list);
  };

  const setListners = () => {
    if (tableRef && tableRef.current) {
      console.log(tableRef.current);
    }
  };

  useEffect(() => {
    getData();
    setListners();
  }, []);

  return (
    <>
      <main>
        <h1>Listings in 98115</h1>
        <br />
        <MxTable
          serverPaginate
          ref={tableRef}
          page={1}
          rowsPerPageOptions={[5, 10, 20, 50]}
          rowsPerPage={pageSize}
          disablePagination={false}
          rows={data}
          columns={[
            { property: 'url_slug', heading: 'Slug', sortable: false },
            { property: 'display_price', heading: 'Price', sortable: false },
            {
              property: 'status',
              heading: 'Status',
              sortable: false,
            },
          ]}
        />
      </main>
    </>
  );
}

export default App;
