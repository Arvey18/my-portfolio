import { SkillProps } from '@/types/skill';

const Skill = ({ text, image }: SkillProps) => {
  return (
    <div className="relative flex flex-col justify-center text-center text-muted-foreground lg:text-lg text-base">
      <div className="flex h-[80px] mb-2 justify-center items-center">
        <img
          className="lg:max-h-[80px] max-h-[60px] lg:max-w-[80px] max-w-[60px]"
          src={image.url}
          alt={image.alt}
        />
      </div>
      {text}
    </div>
  );
};

export default Skill;
