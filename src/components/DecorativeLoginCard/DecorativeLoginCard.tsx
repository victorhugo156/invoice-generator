import { Separator } from "../ui/separator";


export function DecorativeLoginCard() {
    return (
        <div className="
        border-border 
        w-full 
        flex flex-col 
        relative 
        border-2 
        lg:flex-1 
        lg:px-15
        lg:justify-center
        xl:px-12
        "
        >
            <div className="flex w-full flex-col gap-4">
            <div className="w-full h-8 flex flex-col items-center justify-center gap-3 bg-aged-mustard border-t-0 px-5">
                <Separator className="opacity-20" />
                <Separator className="opacity-20" />
            </div>
            <div className=" w-full h-8 flex flex-col items-center justify-center gap-3 bg-secondary px-5">
                <Separator className="opacity-20" />
                <Separator className="opacity-20" />
            </div>
            <div className=" w-full h-8 flex flex-col items-center justify-center gap-3 bg-background px-5">
                <Separator className="opacity-20" />
                <Separator className="opacity-20" />
            </div>
            <div className="w-full h-8 flex flex-col items-center justify-center gap-3 bg-accent px-5">
                <Separator className="opacity-20" />
                <Separator className="opacity-20" />
            </div>
            <div className="w-full h-8 flex flex-col items-center justify-center gap-3 bg-aged-mustard px-5">
                <Separator className="opacity-20" />
                <Separator className="opacity-20" />
            </div>
            <div className="w-full h-8 flex flex-col items-center justify-center gap-3 bg-secondary px-5">
                <Separator className="opacity-20" />
                <Separator className="opacity-20" />
            </div>
            <div className=" w-full h-8 flex flex-col items-center justify-center gap-3 bg-background px-5">
                <Separator className="opacity-20" />
                <Separator className="opacity-20" />
            </div>
            <div className=" w-full h-8 flex flex-col items-center justify-center gap-3 bg-accent px-5">
                <Separator className="opacity-20" />
                <Separator className="opacity-20" />
            </div>

            {/* Creating more line on large screens */}
            <div className="w-full h-8 hidden  flex-col items-center justify-center gap-3 bg-aged-mustard px-5 lg:flex">
                <Separator className="opacity-20" />
                <Separator className="opacity-20" />
            </div>

            <div className="w-full h-8 hidden flex-col items-center justify-center gap-3 bg-secondary border-t-0 px-5 lg:flex">
                <Separator className="opacity-20" />
                <Separator className="opacity-20" />
            </div>
            <div className=" w-full h-8 hidden flex-col items-center justify-center gap-3 bg-background px-5 lg:flex">
                <Separator className="opacity-20" />
                <Separator className="opacity-20" />
            </div>
            <div className=" w-full h-8 hidden flex-col items-center justify-center gap-3 bg-accent px-5 lg:flex">
                <Separator className="opacity-20" />
                <Separator className="opacity-20" />
            </div>
            <div className="w-full h-8 hidden  flex-col items-center justify-center gap-3 bg-aged-mustard px-5 lg:flex">
                <Separator className="opacity-20" />
                <Separator className="opacity-20" />
            </div>

            <div className="w-full h-8 hidden flex-col items-center justify-center gap-3 bg-secondary border-t-0 px-5 lg:flex">
                <Separator className="opacity-20" />
                <Separator className="opacity-20" />
            </div>
            
            </div>


            <div className="
            bg-accent-foreground
            w-45  
            rounded-2xl 
            p-4 
            flex flex-col items-center justify-center 
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            lg:w-70
            lg:p-10
            "
            >
                <div className="
                bg-concrete
                flex flex-col items-center justify-center  
                rounded-2xl 
                p-4
                lg:p-10
                "
                >
                    <p className="text-accent-foreground text-3xl font-bold lg:text-6xl lg:font-black">08:30</p>
                    <p className="text-destructive tex text-xs font-medium lg:text-lg">time clock</p>
                </div>
            </div>
        </div>

    )
}