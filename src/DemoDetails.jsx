import { useParams } from 'react-router-dom';

export default function DemoDetails() {
  const { id } = useParams();



  return (
    <div>
      <h2>this is description {id}</h2>

    </div>
  );
}
