import React from 'react';

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
    </tr>
  );
};

export default MahasiswaRow;
