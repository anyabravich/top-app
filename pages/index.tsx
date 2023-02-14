import { Button, Htag } from "../components";
import { P } from "../components/P/P";
import { Tag } from "../components/Tag/Tag";

export default function Home() {
  return (
    <>
      <Htag tag="h1">Hello, World</Htag>
      <Button
        appearance="primary"
        arrow="right"
        onClick={() => console.log("primary")}
      >
        Кнопка
      </Button>
      <Button appearance="ghost" onClick={() => console.log("ghost")}>
        Кнопка
      </Button>
      <P size="m">
        Студенты освоят не только hard skills, необходимые для работы
        веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
        взаимодействовать в команде с менеджерами, разработчиками и
        маркетологами. Выпускники факультета могут успешно конкурировать с
        веб-дизайнерами уровня middle.
      </P>
      <Tag color="green">-10 000 ₽</Tag>
      <Tag color="primary" href="https://github.com/">
        Работа в Photoshop
      </Tag>
    </>
  );
}
