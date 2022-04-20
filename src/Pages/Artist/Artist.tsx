import { useParams } from "react-router-dom";

export function Artist() {
  const { id } = useParams();
  console.log({id});

  return (
    <p>Artist page</p>
  )
}
