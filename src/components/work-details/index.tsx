import LinkWithIcon from '@/components/ui/link-with-icon';
import Tags from '@/components/ui/tags';
import { WorkExperience } from '@/types/work-experience';
import { ReactNode } from 'react';
import LinkIcon from '@/assets/svg/link.svg?react';
import Location from '@/assets/svg/location.svg?react';
import Work from '@/assets/svg/work.svg?react';

interface WorkDetailsProps {
  data: WorkExperience;
  children?: ReactNode;
}

const WorkDetails = ({ data, children }: WorkDetailsProps) => {
  return (
    <div className="w-full">
      <div className="mb-4 flex flex-col gap-4 md:flex-row">
        <LinkWithIcon
          key="location-work-details-link-with-icon"
          text={data.location}
          icon={<Location className="size-4 lg:size-6" />}
        />
        <LinkWithIcon
          key="link-work-details-link-with-icon"
          text={data.company_url.label}
          link={data.company_url.link}
          icon={<LinkIcon className="size-4 lg:size-6" />}
        />
        <LinkWithIcon
          key="work-type-work-details-link-with-icon"
          text={data.work_type}
          icon={<Work className="size-4 lg:size-6" />}
        />
      </div>
      <div className="mb-6 text-sm lg:text-base">{children}</div>
      <div className="flex flex-row flex-wrap gap-2">
        {data.tags.map((value) => (
          <Tags key={data.id + value} text={value} />
        ))}
      </div>
    </div>
  );
};

export default WorkDetails;
