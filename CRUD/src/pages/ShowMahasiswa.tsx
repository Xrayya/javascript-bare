import { useRef, useState } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const ShowMahasiswa = () => {
  interface Mahasiswa {
    firstName: string | undefined;
    lastName: string | undefined;
    totalCredit: number | undefined;
  }

  const location = useLocation();

  const [mahasiswas] = useState<Mahasiswa[]>(
    location.state?.mahasiswas ?? []
  );

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const totalCreditRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const index: number = location.state.index;

  const handleBack = (): void => {
    navigate('/dashboard', {state: {mahasiswas: mahasiswas}})
  };

  return (
    <Container className='d-flex justify-content-center'>
      <div className='col-lg-8'>
        <Row>
          <h1 className='mt-2 text-center'>JS CRUD - Show Mahasiswa</h1>
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
                  disabled
                  ref={firstNameRef}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='mahasiswa-lastname'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='e.g. Subandi'
                  defaultValue={mahasiswas[index].lastName}
                  disabled
                  ref={lastNameRef}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='mahasiswa-totalcredit'>
                <Form.Label>Total Credit</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='e.g. 33'
                  defaultValue={mahasiswas[index].totalCredit}
                  disabled
                  ref={totalCreditRef}
                />
              </Form.Group>
              <Button
                variant='primary'
                type='button'
                onClick={handleBack}
              >
                Back
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default ShowMahasiswa;
