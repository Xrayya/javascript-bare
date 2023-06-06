import React, { useRef, useState } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';

type Props = {
  onClick: () => void
}

const AddMahasiswa: React.FC<Props> = () => {
  interface Mahasiswa {
    firstName: string | undefined;
    lastName: string | undefined;
    totalCredit: number | undefined;
  }
  const [mahasiswas, setMahasiswas] = useState<Mahasiswa[]>([]);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const totalCreditRef = useRef<HTMLInputElement>(null);

  const handleAddMahasiswas = (): void => {
    if (
      firstNameRef.current !== null &&
      lastNameRef.current !== null &&
      totalCreditRef.current !== null
    ) {
      setMahasiswas((prev) => {
        const newPosts: Mahasiswa[] = [...prev];
        newPosts.push({
          firstName: firstNameRef.current?.value,
          lastName: lastNameRef.current?.value,
          totalCredit: Number(totalCreditRef.current?.value),
        });
        return newPosts;
      });
    }
  };

  return (
    <Container className='d-flex justify-content-center'>
      <div className='col-lg-8'>
        <Row>
          <h1 className='mt-2 text-center'>JS CRUD - Add Mahasiswa</h1>
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
                  ref={firstNameRef}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='mahasiswa-lastname'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='e.g. Subandi'
                  ref={lastNameRef}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='mahasiswa-totalcredit'>
                <Form.Label>Total Credit</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='e.g. 33'
                  ref={totalCreditRef}
                />
              </Form.Group>
              <Button
                variant='primary'
                type='button'
                onClick={handleAddMahasiswas}
              >
                Post
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default App;
