import { motion } from 'framer-motion';
import Link from 'next/link';

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
const ProjectLayout = ({ name, description, date, demoLink }) => {
  return (
    <ProjectLink
      variants={item}
      href={demoLink}
      target={'_blank'}
      className="text-sm md:text-base flex flex-col items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <div className="text-sm md:text-base flex items-center justify-between w-full relative">
        <div className="flex items-center justify-center space-x-2">
          <h2 className="text-foreground">{name}</h2>
        </div>
        <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
        <p className="text-muted sm:text-foreground">
          {new Date(date).toDateString()}
        </p>
      </div>
      <div className="text-sm md:text-base flex items-center justify-between w-full relative p-2">
        <h4 className="text-muted">{description}</h4>
      </div>
    </ProjectLink>
  );
};

export default ProjectLayout;
