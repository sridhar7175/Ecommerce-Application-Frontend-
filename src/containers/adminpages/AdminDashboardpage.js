import React from "react";
import AdminDashboard from "../../components/Admin/AdminDashboard";
import Footer from "../../components/Common/Footer";
import Header from "../../components/Header";

const AdminDashboardpage = () => {
  return (
    <div>
      <Header />
      <AdminDashboard />
      <Footer />
    </div>
  );
};

export default AdminDashboardpage;
