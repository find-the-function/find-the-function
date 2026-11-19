'use client';

import { Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

export default function NewPostButton() {
  const router = useRouter();
  return (
    <Button
      className="position-absolute bottom-0 end-0 m-4"
      onClick={() => {router.push("/add")}}
    >
      New post
    </Button>
  );
}
