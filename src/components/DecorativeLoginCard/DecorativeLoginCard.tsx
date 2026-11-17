import { Separator } from "../ui/separator";


export function DecorativeLoginCard() {
    return (
        <div className="w-full flex flex-col border-2 border-border relative lg:flex-1 lg:px-5 lg:py-8 lg:justify-center">
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

            <div className="w-full h-8 hidden flex-col items-center justify-center gap-3 bg-aged-mustard border-t-0 px-5 lg:flex">
                <Separator className="opacity-20" />
                <Separator className="opacity-20" />
            </div>
            <div className=" w-full h-8 hidden flex-col items-center justify-center gap-3 bg-secondary px-5 lg:flex">
                <Separator className="opacity-20" />
                <Separator className="opacity-20" />
            </div>
            <div className=" w-full h-8 hidden flex-col items-center justify-center gap-3 bg-background px-5 lg:flex">
                <Separator className="opacity-20" />
                <Separator className="opacity-20" />
            </div>
            
            </div>


            <div className="w-45 bg-accent-foreground rounded-2xl p-12 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center justify-center bg-concrete rounded-2xl p-4">
                    <p className="text-accent-foreground text-3xl font-bold">08:30</p>
                    <p className="text-destructive tex text-xs font-medium">time clock</p>
                </div>
            </div>
        </div>

    )
}