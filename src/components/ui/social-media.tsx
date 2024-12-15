import { SocialMedia } from '@/types/social-media';
import Button from '@/components/ui/button';
import { openLink } from '@/lib/utils';

const SocialMediaButton = ({ icon, link }: SocialMedia) => {
  return (
    <Button
      onClick={() => openLink({ ...link })}
      className="h-auto rounded-full p-2 text-white"
    >
      {icon}
    </Button>
  );
};

export default SocialMediaButton;
