import { useRef, useState } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import PostCard from './components/PostCard';

function App() {
  interface Post {
    title?: string;
    content?: string;
  }
  const [posts, setPosts] = useState<Post[]>([]);

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const handleAddPost = (): void => {
    if (titleRef.current !== null && contentRef.current !== null) {
      setPosts((prev) => {
        const newPosts : Post[] = [...prev];
        newPosts.push({
          title: titleRef.current?.value,
          content: contentRef.current?.value,
        });
        return newPosts;
      });
    }
  };

  return (
    <Container className='d-flex justify-content-center'>
      <div className='col-lg-8'>
        <Row>
          <h1 className='mt-2 text-center'>React JS Vite Test</h1>
          <hr />
        </Row>
        <Card className='mb-5'>
          <Card.Header>Add New Post</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className='mb-3' controlId='post-title'>
                <Form.Label>Post Title</Form.Label>
                <Form.Control type='text' placeholder='Title' ref={titleRef} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='post-content'>
                <Form.Label>Post Content</Form.Label>
                <Form.Control
                  as='textarea'
                  placeholder='Write some text...'
                  ref={contentRef}
                />
              </Form.Group>
              <Button variant='primary' type='button' onClick={handleAddPost}>
                Post
              </Button>
            </Form>
          </Card.Body>
        </Card>
        {posts &&
          posts.map((post, index) => (
            <PostCard key={index} title={post.title} content={post.content} />
          ))}
      </div>
    </Container>
  );
}

export default App;
