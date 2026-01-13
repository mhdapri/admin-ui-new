import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardExpense from "../components/Fragments/CardExpense";
import { expenseService } from "../services/dataService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const { logout } = useContext(AuthContext);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const fetchExpenses = async () => {
    try {
      const data = await expenseService();
      console.log("Fetched expenses data:", data);
      setExpenses(data);
    } catch (err) {
      console.error("Error fetching expenses:", err);
      setSnackbar({
        open: true,
        message: "Gagal mengambil data expenses",
        severity: "error",
      });
      if (err.status === 401) {
        logout();
      }
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <MainLayout>
      <div className="grid sm:grid-cols-12 gap-6">
        <div className="sm:col-span-12">
          <CardExpense data={expenses} />
        </div>
      </div>
      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </MainLayout>
  );
}

export default Expenses;
