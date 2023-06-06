import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Table from 'react-bootstrap/esm/Table';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  interface Mahasiswa {
    firstName: string | undefined;
    lastName: string | undefined;
    totalCredit: number | undefined;
  }

  const [mahasiswas, setMahasiswas] = useState<Mahasiswa[]>([]);

  const location = useLocation();

  useEffect(() => {
    if (location.state?.data) {
      setMahasiswas(location.state?.data);
    }
  });

  return (
    <Container className='d-flex justify-content-center'>
      <div className='col-lg-8'>
        <Row>
          <h1 className='mt-2 text-center'>JS CRUD</h1>
          <hr />
          <Table className='table'>
            <thead>
              <tr>
                <th scope='col'>No</th>
                <th scope='col'>First Name</th>
                <th scope='col'>Last Name</th>
                <th scope='col'>Total Credit</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
        </Row>
      </div>
    </Container>
  );
};

export default Dashboard;
