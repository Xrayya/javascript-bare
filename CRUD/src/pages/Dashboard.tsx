import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Table from 'react-bootstrap/esm/Table';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MahasiswaRow from '../components/MahasiswaRow';

const Dashboard = () => {
  interface Mahasiswa {
    firstName: string | undefined;
    lastName: string | undefined;
    totalCredit: number | undefined;
  }

  const navigate = useNavigate();

  const location = useLocation();

  const [mahasiswas, setMahasiswas] = useState<Mahasiswa[]>(
    location.state?.mahasiswas ?? []
  );

  const handleOnShow = (index: number) => {
    navigate('/show-mahasiswa', {
      state: { mahasiswas: mahasiswas, index: index },
    });
  };

  const handleOnEdit = (index: number) => {
    navigate('/edit-mahasiswa', {
      state: { mahasiswas: mahasiswas, index: index },
    });
  };

  const handleOnDelete = (index: number) => {
    setMahasiswas((prev) => {
      const newMahasiswas = [...prev];
      newMahasiswas.splice(index, 1);
      return newMahasiswas;
    });
  };

  return (
    <Container className='d-flex justify-content-center'>
      <div className='col-lg-8'>
        <Row>
          <h1 className='mt-2 text-center'>JS CRUD</h1>
          <hr />
          <div>
            <Link
              to='/add-mahasiswa'
              className='btn btn-primary'
              state={{ mahasiswas: mahasiswas }}
            >
              Add Mahasiswa
            </Link>
          </div>
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
            <tbody>
              {mahasiswas &&
                mahasiswas.map((mahasiswa, index) => (
                  <MahasiswaRow
                    key={index}
                    number={index + 1}
                    firstName={mahasiswa.firstName}
                    lastName={mahasiswa.lastName}
                    totalCredit={mahasiswa.totalCredit}
                    onEdit={handleOnEdit}
                    onShow={handleOnShow}
                    onDelete={handleOnDelete}
                  />
                ))}
            </tbody>
          </Table>
        </Row>
      </div>
    </Container>
  );
};

export default Dashboard;
