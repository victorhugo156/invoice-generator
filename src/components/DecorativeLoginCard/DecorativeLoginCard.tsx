import { Separator } from "../ui/separator";


export function DecorativeLoginCard() {
    return (
        <div className="w-full border-2 border-border relative">
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
            <div className="w-full h-8 flex flex-col items-center justify-center gap-3 bg-aged-mustard px-5">
                <Separator className="opacity-20" />
                <Separator className="opacity-20" />
            </div>

            <div className="w-45 bg-accent-foreground rounded-2xl p-12 flex flex-col items-center justify-center absolute top-12 right-20">
                <div className="flex flex-col items-center justify-center bg-concrete rounded-2xl p-4">
                    <p className="text-accent-foreground text-3xl font-bold">08:30</p>
                    <p className="text-destructive tex text-xs font-medium">time clock</p>
                </div>
            </div>
        </div>

    )
}