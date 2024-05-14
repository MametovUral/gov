import StatisticsCard from "../shared/StatisticsCard";
import { dataCard, nodes, columns } from "../constants";
import Diagram from "../shared/Diagram";
import Table from "../shared/Table";

function Region() {
  return (
    <div className="main__content text-center p-8 ">
      <h1 className="uppercase font-bold text-2xl tracking-wide mb-10">
        Har bir mahallada kamida ikki nafar dasturchi loyihasi
      </h1>
      <div className="main__content-cards flex justify-around mb-8">
        {dataCard.map((item) => (
          <StatisticsCard key={item.title} item={item} />
        ))}
      </div>
      <h2 className="uppercase font-bold text-xl tracking-wide mb-10">
        Qashqadaryo viloyatining tumanlar aro statistikasi
      </h2>
      <div className="main__content-chart mb-10">
        <Diagram />
      </div>
      <h2 className="uppercase font-bold text-xl tracking-wide mb-8">
        Loyiha doirasida shakillantirilgan ko'rsatkichlar ro'yxati
      </h2>
      <div className="main__content-table ">
        <Table columns={columns} data={nodes} />
      </div>
    </div>
  );
}

export default Region;
