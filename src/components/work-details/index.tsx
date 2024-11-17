import LocationWithIcon from '@/components/ui/location-with-icon';
import LinkWithIcon from '@/components/ui/link-with-icon';
import WorkWithIcon from '@/components/ui/work-with-icon';
import Tags from '@/components/ui/tags';

const WorkDetails = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row gap-4 mb-4">
        <LocationWithIcon text="Singapore, Singapore" />
        <LinkWithIcon text="Favorite Medium" link="favorite medium" />
        <WorkWithIcon text="Office Based" />
      </div>
      <div className="text-base mb-6">
        - Converting PSD to Static Websites
        <br />
        - Converting PSD to Custom Wordpress Theme
        <br />
        - Converting PSD to Custom Drupal Theme
        <br />- Creating POC using ReactJs
      </div>
      <div className="flex flex-row gap-2">
        <Tags text="HTML" />
        <Tags text="HTML" />
        <Tags text="HTML" />
        <Tags text="HTML" />
        <Tags text="HTML" />
        <Tags text="HTML" />
        <Tags text="HTML" />
      </div>
    </div>
  );
};

export default WorkDetails;
