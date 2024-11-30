import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h2>Fuck CSS</h2>
      <Button>Fuck</Button>

      <UserButton/>
    </div>
  );
}
