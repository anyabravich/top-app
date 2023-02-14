import { Button, Htag } from "../components";

export default function Home() {
  return (
    <>
      <Htag tag="h1">Hello, World</Htag>
      <Button appearance="primary" onClick={() => console.log("primary")}>
        Кнопка
      </Button>
      <Button appearance="ghost" onClick={() => console.log("ghost")}>
        Кнопка
      </Button>
    </>
  );
}
