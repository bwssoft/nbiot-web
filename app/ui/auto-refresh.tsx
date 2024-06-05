import { revalidate } from "../lib/action/revalidate";
import { Button } from "./button";

export function Revalidate(props: { path: string }) {
  const { path } = props;
  const binded = revalidate.bind(null, path);

  return (
    <form action={binded}>
      <Button>Revalidar Dados</Button>
    </form>
  );
}
