import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useIsMount } from '../hooks/customHooks';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/esm/Card';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';

const EditMahasiswa = () => {
  interface Mahasiswa {
    firstName: string | undefined;
    lastName: string | undefined;
    totalCredit: number | undefined;
  }

  const location = useLocation();

  const [mahasiswas, setMahasiswas] = useState<Mahasiswa[]>(
    location.state?.mahasiswas ?? []
  );

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const totalCreditRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const isMount = useIsMount();

  const index: number = location.state.index;

  const handleEditMahasiswas = (): void => {
    if (
      firstNameRef.current !== null &&
      lastNameRef.current !== null &&
      totalCreditRef.current !== null
    ) {
      setMahasiswas((prev) => {
        const newMahasiswas = [...prev];
        newMahasiswas[index].firstName = firstNameRef.current?.value;
        newMahasiswas[index].lastName = lastNameRef.current?.value;
        newMahasiswas[index].totalCredit = Number(
          totalCreditRef.current?.value
        );

        return newMahasiswas;
      });
    }
  };

  useEffect(() => {
    if (!isMount) {
      navigate('/dashboard', { state: { mahasiswas: mahasiswas } });
    }
  }, [mahasiswas]);

  return (
    <Container className='d-flex justify-content-center'>
      <div className='col-lg-8'>
        <Row>
          <h1 className='mt-2 text-center'>JS CRUD - Edit Mahasiswa</h1>
          <hr />
        </Row>
        <Card className='mb-5'>
          <Card.Header>Add New Post</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className='mb-3' controlId='mahasiswa-firstname'>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='e.g. Bambang'
                  defaultValue={mahasiswas[index].firstName}
                  ref={firstNameRef}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='mahasiswa-lastname'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='e.g. Subandi'
                  defaultValue={mahasiswas[index].lastName}
                  ref={lastNameRef}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='mahasiswa-totalcredit'>
                <Form.Label>Total Credit</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='e.g. 33'
                  defaultValue={mahasiswas[index].totalCredit}
                  ref={totalCreditRef}
                />
              </Form.Group>
              <Button
                variant='primary'
                type='button'
                onClick={handleEditMahasiswas}
              >
                Edit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default EditMahasiswa;
