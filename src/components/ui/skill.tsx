import { SkillProps } from '@/types/skill';

const Skill = ({ text, image }: SkillProps) => {
  return (
    <div className="relative flex flex-col justify-center text-center text-base text-muted-foreground lg:text-lg">
      <div className="mb-2 flex h-[80px] items-center justify-center">
        <img
          className="max-h-[60px] max-w-[60px] lg:max-h-[80px] lg:max-w-[80px]"
          src={image.url}
          alt={image.alt}
        />
      </div>
      {text}
    </div>
  );
};

export default Skill;
