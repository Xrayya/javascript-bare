import React from 'react';

type Props = {
  number: number;
  firstName?: string;
  lastName?: string;
  totalCredit?: number;
  onDelete: (e: number) => void;
  onEdit: (e: number) => void;
  onShow: (e: number) => void;
};

const MahasiswaRow: React.FC<Props> = ({
  number,
  firstName,
  lastName,
  totalCredit,
  onDelete,
  onEdit,
  onShow,
}) => {
  const handleShow = () => {
    onShow(number - 1);
  };

  const handleEdit = () => {
    onEdit(number - 1);
  };

  const handleDelete = () => {
    onDelete(number - 1);
  };

  return (
    <tr className="align-middle">
      <th scope='row'>{number}</th>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{totalCredit}</td>
      <td className='d-flex gap-2'>
        <button className='btn btn-primary' onClick={handleShow}>
          Show
        </button>
        <button className='btn btn-primary' onClick={handleEdit}>
          Edit
        </button>
        <button className='btn btn-primary' onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MahasiswaRow;
