import { GetStaticProps } from "next";
import { useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps) {
  const [rating, setRating] = useState<number>(4);
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
      <Rating rating={rating} setRating={setRating} isEditable={true} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  return {
    props: { menu, firstCategory },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
