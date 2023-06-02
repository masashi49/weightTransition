import Image from 'next/image';

export default function Article({ params }: { params: { slug: string } }) {
  return (

      <div >
        slug{params.slug}
      </div>

  );
}
