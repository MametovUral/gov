import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

function StatisticsCard({ item }) {
  return (
    <Card className="w-80 h-40   flex flex-col justify-center  text-start">
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-around items-center">
        <div className="card-title">
          <h6 className="text-2xl font-bold">{item.students}</h6>
        </div>
        <div className="card-icon">
          <Badge
            variant="outline"
            className="flex justify-center items-center size-[43px] rounded-full bg-[#408A7E]"
          >
            <Users size={28} color="white" />
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

export default StatisticsCard;
