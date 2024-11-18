import LocationWithIcon from '@/components/ui/location-with-icon';
import LinkWithIcon from '@/components/ui/link-with-icon';
import WorkWithIcon from '@/components/ui/work-with-icon';
import Tags from '@/components/ui/tags';
import { WorkExperience } from '@/types/work-experience';
import { ReactNode } from 'react';

interface WorkDetailsProps {
  data: WorkExperience;
  children?: ReactNode;
}

const WorkDetails = ({ data, children }: WorkDetailsProps) => {
  return (
    <div className="w-full">
      <div className="flex flex-row gap-4 mb-4">
        <LocationWithIcon text={data.location} />
        <LinkWithIcon
          text={data.company_url.label}
          link={data.company_url.link}
        />
        <WorkWithIcon text={data.work_type} />
      </div>
      <div className="text-base mb-6">{children}</div>
      <div className="flex flex-row gap-2">
        {data.tags.map((value) => (
          <Tags key={data.id + value} text={value} />
        ))}
      </div>
    </div>
  );
};

export default WorkDetails;
