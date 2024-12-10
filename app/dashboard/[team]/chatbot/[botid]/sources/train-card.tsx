/**
 * 训练卡片
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Chatbot } from "@/types/chatbot";

export default function TrainCard({ chatbot }: { chatbot?: Chatbot }) {
  const status = chatbot?.status ?? "new";
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          <span className="font-bold min-w-10">1 </span>File (5,262 chars)
        </p>
        <p>
          <span className="font-bold min-w-10">1 </span>Text input (1000 chars)
        </p>
        <p>
          <span className="font-bold min-w-10">1 </span>Link (9,606 detected chars)
        </p>
        <p>
          <span className="font-bold min-w-10">2 </span>Q&A (1000 chars)
        </p>
        <p className="font-bold">Total detected characters</p>
        <p>
          <span className="font-bold">16,868</span>
          <span className="text-muted-foreground">/ 400,000 limit</span>
        </p>
        <Progress value={16868 / 400000 * 100} className="w-full my-2" />
      </CardContent>
      <CardFooter>
        <Button variant="default" className="w-full">
          {status === "trained" ? "Retrain" : "Create Chatbot"}
        </Button>
      </CardFooter>
    </Card>
  )
}
