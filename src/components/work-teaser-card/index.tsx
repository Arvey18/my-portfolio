import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import SampleWork1 from '@/assets/images/sample-work-1.jpg';
import Tags from '@/components/ui/tags';
import LinkWithIcon from '@/components/ui/link-with-icon';
import LinkIcon from '@/assets/svg/link.svg?react';
import ChevronRightDouble from '@/assets/svg/chevron-right-double.svg?react';

const WorkTeaserCard = () => {
  return (
    <Card className="overflow-hidden rounded-xl">
      <div
        className="relative h-56 bg-no-repeat bg-cover bg-top"
        style={{ backgroundImage: `url(${SampleWork1})` }}
      />
      <CardHeader className="p-4">
        <CardTitle className="text-xl">
          <ResponsiveEllipsis
            text="My Portfolio Details"
            maxLine={1}
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 py-0">
        <CardDescription>
          <ResponsiveEllipsis
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur temporibus aut nesciunt quos rerum at doloribus incidunt alias excepturi! Consequuntur quibusdam labore nulla. Nulla vel earum architecto sed veniam aliquam?"
            maxLine={3}
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </CardDescription>
        <div className="flex flex-row flex-wrap gap-2 mt-4">
          <Tags text="HTML" />
          <Tags text="HTML" />
          <Tags text="HTML" />
        </div>
      </CardContent>
      <CardFooter className="p-4 flex">
        <div className="flex-1">
          <LinkWithIcon
            className="text-sm gap-1"
            text="Link"
            link="#"
            icon={<LinkIcon className="size-4" />}
          />
        </div>
        <div className="flex-1 flex justify-end">
          <LinkWithIcon
            className="text-sm gap-1"
            text="Read more"
            link="#"
            variant="right"
            icon={<ChevronRightDouble className="size-4" />}
          />
        </div>
      </CardFooter>
    </Card>
  );
};

export default WorkTeaserCard;
