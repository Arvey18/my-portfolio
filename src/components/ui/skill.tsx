import { SkillProps } from '@/types/skill';

const Skill = ({ text, image }: SkillProps) => {
  return (
    <div className="relative flex flex-col justify-center text-center text-muted-foreground text-lg">
      <div className="flex h-[80px] mb-2 justify-center items-center">
        <img
          className="max-h-full max-w-[80px]"
          src={image.url}
          alt={image.alt}
        />
      </div>
      {text}
    </div>
  );
};

export default Skill;
