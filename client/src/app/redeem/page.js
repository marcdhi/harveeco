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

export default function Reedem() {

    const InchEndpoint = "https://api.1inch.dev"

    async function getGasPrice() {

        const url = `${InchEndpoint}/gas-price/v1.4/1`;

        const config = {
            headers: {
                "Authorization": `Bearer ${NEXT_PUBLIC_FUSION_API_KEY}`
            },
            params: {}
        };


        try {
            const response = await axios.get(url, config);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="flex justify-around h-[calc(100vh-72px)] bg-black items-center">
            <div>
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Sell Token</CardTitle>
                        <CardDescription>Check gas fees and sell as per your choice</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Amount</Label>
                                    <Input id="name" placeholder="Amount of Token" />
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="framework">Chain</Label>
                                        <Select>
                                            <SelectTrigger id="framework">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent position="popper">
                                                <SelectItem value="filecoin">Filecoin</SelectItem>
                                                <SelectItem value="scroll">Scroll</SelectItem>
                                                <SelectItem value="polygonMumbai">Polygon Mumbai</SelectItem>
                                                <SelectItem value="Base">Base</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-3 justify-between">
                        <Button className="px-4 w-full">Buy</Button>
                        <Button className="w-full" variant="outline">Cancel</Button>
                    </CardFooter>
                </Card>
            </div>
            <div>
                <svg class=" blur-[70px] absolute opacity-80 right-0 z-10" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" height="50%" width="50%"><g clip-path="url(#clip0_17_60)"><g filter="url(#filter0_f_17_60)"><path d="M128.6 0H0V322.2L332.5 211.5L128.6 0Z" fill="#9b49f2"></path><path d="M400 0H128.6L332.5 211.5L400 78.75V0Z" fill="#9b49f2"></path></g></g><defs><filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="719.867" id="filter0_f_17_60" width="719.867" x="-159.933" y="-159.933"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in2="BackgroundImageFix" result="shape" in="SourceGraphic" mode="normal"></feBlend><feGaussianBlur stdDeviation="79.9667" result="effect1_foregroundBlur_17_60"></feGaussianBlur></filter></defs></svg>
                <img className="relative z-40" src="/token.png"></img>
            </div>
        </div>
    )
}