import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  contentClass?: string;
  title?: string;
  content?: string;
  children?: React.ReactNode;
}
export const CustomCard: React.FC<CardProps> = ({
  title,
  className,
  contentClass,
  content,
  children,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center px-4 bg-white border border-gray-200 font-medium rounded-sm",
        className,
      )}
    >
      {title && (
        <span className="text-sm text-gray-700 inline-block">{title}</span>
      )}
      {content && (
        <p className={cn("text-3xl font-semibold py-2", contentClass)}>
          {content}
        </p>
      )}
      {children}
    </div>
  );
};
