import { SocialMedia } from '@/types/social-media';
import Button from '@/components/ui/button';
import { openLink } from '@/lib/utils';

const SocialMediaButton = ({ icon, link }: SocialMedia) => {
  return (
    <Button
      onClick={() => openLink({ ...link })}
      className="rounded-full p-2 h-auto text-white"
    >
      {icon}
    </Button>
  );
};

export default SocialMediaButton;
