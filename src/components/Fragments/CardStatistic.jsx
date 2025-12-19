import React from "react";
import Card from "../Elements/Card";
import BarsDatasets from "../Elements/BarsDatasets";
function CardStatistic(props) {
  const { data } = props;
  return (
    <>
      <Card
        title="Statistic"
        desc={
          <>
            <select className="font-bold text-2xl ">
              <option>Weekly Comparison</option>
            </select>
            <BarsDatasets dataset={data} />
          </>
        }
      />
    </>
  );
}

export default CardStatistic;
