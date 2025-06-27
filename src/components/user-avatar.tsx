import { cva, type VariantProps } from "class-variance-authority"
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const avatarVariant = cva("", {
  variants: {
    size: {
      default: "w-9 h-9",
      xs: "w-4 h-4",
      sm: "w-6 h-6",
      lg: "w-10 h-10",
      xl: "w-[160px] h-[160px]",
    }
  },
  defaultVariants: {
    size: "default"
  },
})

interface UserAvatarProps extends VariantProps<typeof avatarVariant> {
  imageUrl: string;
  name: string;
  className?: string;
  onClick?: () => void;
}

export default function UserAvatar({ imageUrl, name, className, onClick, size }: UserAvatarProps) {
  return (
    <Avatar className={cn(avatarVariant({size, className}))} onClick={onClick}>
      <AvatarImage src={imageUrl} alt={name} />
    </Avatar>
  )
}
