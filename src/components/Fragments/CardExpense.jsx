import React from "react";
import Card from "../Elements/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Icon from "../Elements/Icon";

const categoryIconMap = {
  housing: <Icon.House />,
  food: <Icon.Food />,
  transportation: <Icon.Transport />,
  shopping: <Icon.Shopping />,
  entertainment: <Icon.Movie />,
  others: <Icon.Other />,
};

function CardExpense({ data }) {
  /*const expenseData =
    data && data.length > 0 ? (
      <div className="h-full md:grid md:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div
            key={item.id || index}
            className="flex items-center justify-between"
          >
            <div className="flex">
              <div>
                <div className="bg-special-bg text-gray-02 px-3 py-5 rounded-lg flex flex-col place-content-center">
                  {item.icon}
                </div>
              </div>
              <div className="ms-4">
                <span className="text-gray-02">{item.category}</span>
                <br />
                <span className="font-bold text-lg">${item.amount}</span>
                <div className="flex">
                  <span className="text-gray-02">{item.percentage}%*</span>{" "}
                  {item.arrow}
                </div>
              </div>
            </div>
            <div className="flex place-content-center flex-col me-8">
              <Icon.ArrowRight />
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="text-center text-gray-500">No expenses found</div>
    );
 */
  if (!data || data.length === 0) {
    return (
      <Card title="Expenses Comparison">
        <div className="flex flex-col items-center">
          <CircularProgress color="success" />
          <p className="mt-4 text-primary">Loading Data</p>
        </div>
      </Card>
    );
  }
  return (
    /*
    <Card
      title="Expenses Comparison"
      desc={
        !data || data.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-full text-primary">
            <CircularProgress color="inherit" size={50} />
            Loading Data
          </div>
        ) : (
          expenseData
        )
      }
    />
    */
    <Card title="Expenses Comparison">
      <div className="h-full grid md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border-b md:border-none pb-4 md:pb-0"
          >
            {/* --- HEADER ITEM --- */}
            <div className="flex justify-between items-center mb-6 bg-gray-200 p-4 rounded-lg">
              <div className="flex items-center">
                <div className="bg-gray-100 text-gray-500 p-3 rounded-lg flex items-center justify-center">
                  {categoryIconMap[item.category.toLowerCase()] || (
                    <Icon.Other />
                  )}
                </div>
                <div className="ms-4">
                  <span className="text-gray-400 text-sm font-medium capitalize">
                    {item.category}
                  </span>
                  <br />
                  <span className="font-bold text-xl text-gray-800">
                    ${item.amount}
                  </span>
                </div>
              </div>

              {/* Trend Percentage & Arrow */}
              <div className="text-right">
                <div
                  className={`flex items-center justify-end font-semibold text-sm ${
                    item.trend === "up" ? "text-red-500" : "text-green-500"
                  }`}
                >
                  <span>{item.percentage}%</span>
                  {item.trend === "up" ? (
                    <Icon.ArrowUp size={16} />
                  ) : (
                    <Icon.ArrowDown size={16} />
                  )}
                </div>
                <div className="text-[10px] text-gray-400">
                  Compare to the last month
                </div>
              </div>
            </div>

            {/* --- DETAIL TRANSAKSI (List) --- */}
            <div className="space-y-6 bg-white">
              {item.detail?.map((trx, i) => (
                <div
                  key={i}
                  className="flex justify-between items-start border-b border-gray-100 pb-2"
                >
                  <div className="flex flex-col">
                    <span className="text-gray-700 font-semibold text-sm">
                      {trx.item}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-gray-800 font-bold text-sm">
                      ${trx.amount}
                    </span>
                    <div className="text-[11px] text-gray-400">
                      {trx.date || "17 May 2023"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default CardExpense;
