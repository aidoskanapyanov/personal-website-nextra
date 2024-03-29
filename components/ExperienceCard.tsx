type Props = {
  from: string;
  till: string;
  title: string;
  company: string;
  place: string;
  description: string;
  skills: string[];
};

export default function ExperienceCard({
  from,
  till,
  title,
  company,
  place,
  description,
  skills,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-1 mt-8 mb-14 md:gap-4">
      <div className="md:basis-1/5 uppercase font-medium text-gray-500 dark:text-gray-300">
        {from} - {till}
      </div>
      <div className="grid gap-2 md:basis-4/5">
        <p className="font-bold">
          {title} - {company}
        </p>
        <p className="font-medium text-gray-500 dark:text-gray-300">{place}</p>
        <p className="text-gray-500 dark:text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="font-base py-1 px-2 drop-shadow rounded-lg bg-[#FAFAFA] dark:bg-[#222222] text-gray-500 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
