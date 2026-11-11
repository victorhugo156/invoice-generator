import { Separator } from "../ui/separator";


export function DecorativeLoginCard(){
    return(
        <div className="bg-accent max-w-36 p-15">
            <div className="w-19 relative">
                <div className="bg-aged-mustard">
                    <Separator/>
                    <Separator/>
                </div>
                <div className="bg-accent">
                    <Separator/>
                    <Separator/>
                </div>
                <div className="bg-punch-card-blue">
                    <Separator/>
                    <Separator/>
                </div>
                <div className="bg-aged-mustard">
                    <Separator/>
                    <Separator/>
                </div>
                <div className="bg-accent">
                    <Separator/>
                    <Separator/>
                </div>
                <div className="bg-punch-card-blue">
                    <Separator/>
                    <Separator/>
                </div>
                <div className="bg-aged-mustard">
                    <Separator/>
                    <Separator/>
                </div>
                <div className="bg-accent">
                    <Separator/>
                    <Separator/>
                </div>
                <div className="bg-punch-card-blue">
                    <Separator/>
                    <Separator/>
                </div>

                <div className="w-10 absolute bg-accent-foreground rounded-2xl p-12">
                <div className="w-8 flex flex-col items-center justify-center bg-concrete rounded-2xl p-5">
                    <p className="text-accent-foreground tex text-3xl font-medium">8:30</p>
                    <p className="text-destructive tex text-sm font-normal">time clock</p>
                </div>
            </div>
            </div>
        </div>
    )
}