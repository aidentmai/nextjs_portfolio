export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)] rounded-lg" />

      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="rgb(74 222 128)" />
          <stop offset="100%" stopColor="rgb(8 145 178)" />
        </linearGradient>
      </svg>
    </>
  );
};
