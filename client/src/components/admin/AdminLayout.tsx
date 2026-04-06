import AdminHeader from "../admin/AdminHeader";
import AdminFooter from "../admin/AdminFooter";

interface Props {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <AdminHeader />

      <main className="flex-grow p-6">
        {children}
      </main>

      <AdminFooter />

    </div>
  );
};

export default AdminLayout;