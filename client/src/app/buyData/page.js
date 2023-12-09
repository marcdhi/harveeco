import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function BuyData() {

    const crop = ['Rice', 'Maize', 'ChickPea', 'KidneyBeans', 'PigeonPeas',
        'MothBeans', 'MungBean', 'Blackgram', 'Lentil', 'Pomegranate',
        'Banana', 'Mango', 'Grapes', 'Watermelon', 'Muskmelon', 'Apple',
        'Orange', 'Papaya', 'Coconut', 'Cotton', 'Jute', 'Coffee']

    return (
        <main className="bg-black min-h-[calc(100vh-72px)] p-8 flex justify-center">
            <svg class=" blur-[70px] absolute opacity-80 -right-32 z-10" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" height="50%" width="50%"><g clip-path="url(#clip0_17_60)"><g filter="url(#filter0_f_17_60)"><path d="M128.6 0H0V322.2L332.5 211.5L128.6 0Z" fill="#9b49f2"></path><path d="M400 0H128.6L332.5 211.5L400 78.75V0Z" fill="#9b49f2"></path></g></g><defs><filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="719.867" id="filter0_f_17_60" width="719.867" x="-159.933" y="-159.933"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in2="BackgroundImageFix" result="shape" in="SourceGraphic" mode="normal"></feBlend><feGaussianBlur stdDeviation="79.9667" result="effect1_foregroundBlur_17_60"></feGaussianBlur></filter></defs></svg>
            <div>
                <Card className="w-[450px] flex items-center flex-col z-20 relative">
                    <CardHeader>
                        <CardTitle>Get Analytics</CardTitle>
                        <CardDescription>Get the data that you need</CardDescription>
                    </CardHeader>
                    <div className="flex gap-12">
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">Price</Label>
                                        <Input id="name" placeholder="Price for the crop" />
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="crop">Crop</Label>
                                            <Select>
                                                <SelectTrigger id="crop">
                                                    <SelectValue placeholder="Select crop" />
                                                </SelectTrigger>
                                                <SelectContent position="popper">
                                                    {crop.map((data, index) => <SelectItem value={`${data}`}>{data}</SelectItem>)}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-8 pt-3 justify-around">
                            <Button className="w-full px-5">Get Data</Button>
                            <Button className="w-full px-5" variant="outline">Cancel</Button>
                        </CardFooter>
                    </div>
                </Card>
            </div>
            <div>
            </div>
        </main >
    )
}