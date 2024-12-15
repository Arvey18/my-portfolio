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
import { Separator } from '@/components/ui/separator';

const WorkTeaserCard = () => {
  return (
    <Card className="overflow-hidden rounded-xl">
      <div
        className="relative h-36 bg-cover bg-top bg-no-repeat lg:h-56"
        style={{ backgroundImage: `url(${SampleWork1})` }}
      />
      <CardHeader className="px-4 py-2 lg:p-4">
        <CardTitle className="text-lg lg:text-xl">
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
        <div className="mt-4 flex flex-row flex-wrap gap-2">
          <Tags text="HTML" />
          <Tags text="HTML" />
          <Tags text="HTML" />
        </div>
      </CardContent>
      <div className="px-4">
        <Separator className="mt-4" />
      </div>
      <CardFooter className="flex items-center px-4 py-4">
        <div className="flex items-center">
          <LinkWithIcon
            className="gap-1 text-xs lg:text-sm"
            text="Link"
            link="#"
            icon={<LinkIcon className="size-3 lg:size-4" />}
          />
        </div>
        <div className="flex flex-1 items-center justify-end">
          <LinkWithIcon
            className="gap-1 text-xs lg:text-sm"
            text="Read more"
            link="#"
            variant="right"
            icon={<ChevronRightDouble className="size-3 lg:size-4" />}
          />
        </div>
      </CardFooter>
    </Card>
  );
};

export default WorkTeaserCard;
