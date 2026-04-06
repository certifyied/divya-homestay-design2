import AdminLayout from "@/components/admin/AdminLayout";
import AdminAddExperience from "@/components/experience/AdminAddExperience";
import ExperienceContent from "@/components/experience/ExperienceContent";

const AdminExperience = () => {
  return (
    <AdminLayout>
      <ExperienceContent />
      {/* <AdminAddExperience/> */}
    </AdminLayout>
  );
};

export default AdminExperience;