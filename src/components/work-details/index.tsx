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
      <div className="flex md:flex-row flex-col gap-4 mb-4">
        <LinkWithIcon
          key="location-work-details-link-with-icon"
          text={data.location}
          icon={<Location className="lg:size-6 size-4" />}
        />
        <LinkWithIcon
          key="link-work-details-link-with-icon"
          text={data.company_url.label}
          link={data.company_url.link}
          icon={<LinkIcon className="lg:size-6 size-4" />}
        />
        <LinkWithIcon
          key="work-type-work-details-link-with-icon"
          text={data.work_type}
          icon={<Work className="lg:size-6 size-4" />}
        />
      </div>
      <div className="lg:text-base text-sm mb-6">{children}</div>
      <div className="flex flex-row flex-wrap gap-2">
        {data.tags.map((value) => (
          <Tags key={data.id + value} text={value} />
        ))}
      </div>
    </div>
  );
};

export default WorkDetails;
