interface CardTitleProps {
  title: string;
}

export function CardTitle({ title }: CardTitleProps) {
  return <p className="typo-body1 line-clamp-2">{title}</p>;
}
