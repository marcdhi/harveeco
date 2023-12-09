import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DataOptions } from "./DataOptions";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Make a Proposal</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Make a proposal</DialogTitle>
          <DialogDescription>
            The following data will be committed to the DAO:
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <DataOptions />
        </div>
        <DialogFooter>
          <Button type="submit">Create Proposal</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
