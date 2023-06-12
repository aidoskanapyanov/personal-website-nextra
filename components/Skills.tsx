import React from "react";

type SkillProps = {
  header: string;
  content: string;
};

function Skill({ header, content }: SkillProps) {
  return (
    <div className="grid grid-cols-1 gap-1">
      <p className="font-medium">{header}</p>
      <p className="text-gray-500 dark:text-gray-300">{content}</p>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-10 mt-8">
      <div className="basis-1/2 grid grid-cols-1 gap-8">
        <p className="text-2xl font-semibold">Tech</p>
        <Skill
          header="Programming languages"
          content="Typescript, Javascript, Python, Java, C, C++, Go, PHP, Bash, HTML, CSS"
        />
        <Skill
          header="Server frameworks"
          content="Express, Next.js, Fastify, Django, Django Rest Framework, FastAPI, Flask, Gin"
        />
        <Skill
          header="Frontend frameworks"
          content="Next.js, Astro, Remix, React, Vue, Angular, jQuery, D3"
        />
        <Skill
          header="Tooling"
          content="Next.js, Gatsby, Astro, Vite, Eleventy"
        />
        <Skill
          header="Databases"
          content="PostgreSQL, MySQL, PlanetScale, MongoDB, Redis, Amazon Redshift"
        />
        <Skill
          header="Ops"
          content="Kubernetes, Docker, Docker Swarm, Portainer"
        />
      </div>
      <div className="basis-1/2 grid grid-cols-1 gap-8">
        <p className="text-2xl font-semibold">Languages</p>
        <Skill header="English" content="Fluent - C2" />
        <Skill header="Kazakh" content="Native speaker" />
        <Skill header="Russian" content="Native speaker" />
      </div>
    </div>
  );
}
