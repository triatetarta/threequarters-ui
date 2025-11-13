import { Button } from '@/registry/default/ui/button';
import { Computer } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='flex flex-1 flex-col justify-center text-center'>
      <h1 className='mb-4 text-2xl font-bold'>threequarters ui</h1>
      <p>
        You can open{' '}
        <Link href='/docs' className='font-medium underline'>
          /docs
        </Link>{' '}
        and see the documentation.
      </p>

      {/* <div className='mx-auto mt-4 flex max-w-lg flex-col gap-4'>
        <Button size='lg'>Click me</Button>
        <Button size='default'>Click me</Button>
        <Button size='sm'>Click me</Button>
        <Button size='lg'>
          <Computer /> Click me
        </Button>
        <Button size='default'>
          <Computer /> Click me
        </Button>
        <Button size='sm'>
          <Computer /> Click me
        </Button>
      </div> */}
    </div>
  );
}
