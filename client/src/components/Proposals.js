import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


export function TableDemo({proposals}) {
  return (
    <Table>
      <TableCaption>A list of your recent proposals.</TableCaption>
      <TableHeader>
        <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Description</TableCell>
            <TableCell className="text-right">Votes</TableCell>
            <TableCell className="text-right">Check</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {proposals.map((proposal) => (
          <TableRow key={proposal.proposalId}>
            <TableCell className="font-medium">{proposal.title}</TableCell>
            <TableCell>{proposal.status}</TableCell>
            <TableCell>{proposal.description}</TableCell>
            <TableCell className="text-right">{proposal.votes}</TableCell>
            <TableCell className="text-right">{proposal.cid}</TableCell>
          </TableRow>
        ))}

      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">0</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
