import Image from "@/components/ui/image";
import { Instructor } from "@/modules/course/types/course";
import clsx from "clsx";

export interface InstructorDetailsProps {
  instructor: Instructor;
  className?: string;
}
export const InstructorDetails: React.FC<InstructorDetailsProps> = ({
  instructor,
  className,
}) => {
  return (
    <div className={clsx("w-full", className)}>
      <h2 className="font-semibold text-lg text-gray-dark mb-3 block">
        Instructora
      </h2>
      <div className="flex items-start gap-4 mb-4">
        <Image
          className="w-14 h-14 rounded-xl"
          width={65}
          height={65}
          src={instructor?.avatarUrl || "/profile.png"}
          alt={instructor?.name || "Maga Abuin"}
        />
        <div>
          <h3 className="font-semibold text-primary-dark">
            {instructor?.name}
          </h3>
          <p className="text-gray-dark text-sm">{instructor?.bio}</p>
        </div>
      </div>
      <p>{instructor?.description}</p>
    </div>
  );
};
