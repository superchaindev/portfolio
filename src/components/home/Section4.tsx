import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import GridBox from "@/components/core/GridBox";
import SkillItem from "./components/SkillItem";
import skills from "@/data/skills";

const HomeSection4 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="bg-[var(--bgColor)] min-h-[calc(100vh-5rem)] items-center justify-center"
      id={id}
    >
      <ConstraintedBox classNames="p-4 py-16">
        <p className="text-center mx-auto text-3xl/6 md:text-4xl/6 font-bold">
          Skills
        </p>

        <GridBox classNames="justify-items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-16">
          {skills.map((skill, index) => {
            return <SkillItem key={`skill-${index}`} data={skill} />;
          })}
        </GridBox>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection4;
