import { Card } from 'react-bootstrap';

type Props = {
  title: string | undefined;
  content: string | undefined;
};

const PostCard: React.FC<Props> = ({ title, content }) => {
  return (
    <Card className='mb-3'>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
