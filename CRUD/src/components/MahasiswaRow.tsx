import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  number: number;
  firstName?: string;
  lastName?: string;
  totalCredit?: number;
};

const MahasiswaRow: React.FC<Props> = ({
  number,
  firstName,
  lastName,
  totalCredit,
}) => {
  return (
    <tr>
      <th scope='row'>{number}</th>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{totalCredit}</td>
      <td className='d-flex gap-2'>
        <Link to='detail-mahasiswa' className='btn btn-primary'>
          Show
        </Link>
        <Link to='edit-mahasiswa' className='btn btn-primary'>
          Edit
        </Link>
        <button className='btn btn-primary'>Delete</button>
      </td>
    </tr>
  );
};

export default MahasiswaRow;
