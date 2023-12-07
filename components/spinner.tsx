import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Loader } from "lucide-react";

const spinerVariants=cva(
    "text-muted-foreground animate-spin",
    {
        variants:{
            size:{
                default:'h4 w-4',
                sm:'h2 w-2',
                lg:'h-6 w-6',
                icon:'h-10 w-10'
            }
        },
        defaultVariants:{
            size:"default",

        }
    }
);
interface SpinnerProps extends VariantProps<typeof spinerVariants>{}
export const Spinner=({
    size,
}:SpinnerProps)=>{
    return(
        <Loader className={cn(spinerVariants({size}))}/>
    )
}