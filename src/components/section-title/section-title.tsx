interface SectionTitleProps {
  label: string;
}

export default function SectionTitle({ label }: SectionTitleProps) {
  return <h2>{label}</h2>;
}
