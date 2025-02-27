import React from "react";
import PublicationCard from "./";
import "./publications.css";

const Publications = () => {
  const publications = [
    {
      id: 1,
      title: "Динамическое поведение рационального разностного уравнения",
      description:
        "Системы с дискретным временем иногда используются для объяснения природных явлений, встречающихся в нелинейных науках. Мы изучаем периодичность, ограниченность, колебания, устойчивость и некоторые точные решения нелинейных разностных уравнений. Точные решения получены с помощью стандартного итерационного метода. Для проверки устойчивости точек равновесия используются некоторые известные теоремы. Также приведены некоторые численные примеры для подтверждения достоверности теоретических результатов. Численная составляющая реализована с помощью Wolfram Mathematica. Представленный метод можно легко применить к некоторым другим рациональным рекурсивным задачам. ",
      link: "#",
    },
    {
        id: 1,
        title: "Динамическое поведение рационального разностного уравнения",
        description:
          "Системы с дискретным временем иногда используются для объяснения природных явлений, встречающихся в нелинейных науках. Мы изучаем периодичность, ограниченность, колебания, устойчивость и некоторые точные решения нелинейных разностных уравнений. Точные решения получены с помощью стандартного итерационного метода. Для проверки устойчивости точек равновесия используются некоторые известные теоремы. Также приведены некоторые численные примеры для подтверждения достоверности теоретических результатов. Численная составляющая реализована с помощью Wolfram Mathematica. Представленный метод можно легко применить к некоторым другим рациональным рекурсивным задачам. ",
        link: "#",
      },
      {
        id: 1,
        title: "Динамическое поведение рационального разностного уравнения",
        description:
          "Системы с дискретным временем иногда используются для объяснения природных явлений, встречающихся в нелинейных науках. Мы изучаем периодичность, ограниченность, колебания, устойчивость и некоторые точные решения нелинейных разностных уравнений. Точные решения получены с помощью стандартного итерационного метода. Для проверки устойчивости точек равновесия используются некоторые известные теоремы. Также приведены некоторые численные примеры для подтверждения достоверности теоретических результатов. Численная составляющая реализована с помощью Wolfram Mathematica. Представленный метод можно легко применить к некоторым другим рациональным рекурсивным задачам. ",
        link: "#",
      },
      {
        id: 1,
        title: "Динамическое поведение рационального разностного уравнения",
        description:
          "Системы с дискретным временем иногда используются для объяснения <br/> природных явлений, встречающихся в нелинейных науках. Мы изучаем периодичность, ограниченность, колебания, устойчивость и некоторые точные решения нелинейных разностных уравнений. Точные решения получены с помощью стандартного итерационного метода. Для проверки устойчивости точек равновесия используются некоторые известные теоремы. Также приведены некоторые численные примеры для подтверждения достоверности теоретических результатов. Численная составляющая реализована с помощью Wolfram Mathematica. Представленный метод можно легко применить к некоторым другим рациональным рекурсивным задачам. ",
        link: "#",
      },
  ];

  return (
    <div className="publications">
      <h1 className="publications__title">ПУБЛИКАЦИИ</h1>
      <div className="publications__list">
        {publications.map((pub) => (
          <PublicationCard
            key={pub.id}
            title={pub.title}
            description={pub.description}
            link={pub.link}
          />
        ))}
      </div>
    </div>
  );
};

{/* <div className="publications">
    <h1 className="publications__title">ПУБЛИКАЦИИ</h1>
    <div className="publications__list">
      {publications.map((pub) => (
        <PublicationCard
          key={pub.id}
          id={pub.id}
          title={pub.title}
          description={pub.description}
        />
      ))}
    </div>
  </div> */}

export default Publications;
