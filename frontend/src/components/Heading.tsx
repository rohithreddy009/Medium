

// Define a type for the props
type HeadingProps = {
  label: string;
};

export function Heading({ label }: HeadingProps) {
  return (
    <div className="font-bold text-4xl pt-6">
      {label}
    </div>
  );
}
