import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import API from "@/utils/axios";
import AdminLayout from "@/components/admin/AdminLayout";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

interface Experience {
    _id: string;
    title: string;
    description: string;
    images: string[];
}

const AdminAddExperience = () => {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [editingId, setEditingId] = useState<string | null>(null);

    // Fetch all experiences
    const fetchExperiences = async () => {
        try {
            const res = await API.get("/experiences");
            setExperiences(res.data.data);
        } catch (error) {
            toast.error("Failed to load experiences");
        }
    };

    useEffect(() => {
        fetchExperiences();
    }, []);

    // Handle image
    const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    };

    // Create or Update
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        if (image) formData.append("image", image);

        try {
            if (editingId) {
                await API.put(`/update-experience/${editingId}`, formData);
                toast.success("Experience updated");
            } else {
                await API.post("/add-experience", formData);
                toast.success("Experience created");
            }

            setTitle("");
            setDescription("");
            setImage(null);
            setEditingId(null);
            fetchExperiences();
        } catch (error) {
            toast.error("Action failed");
        }
    };

    // Delete experience
    const deleteExperience = async (id: string) => {
  const result = await Swal.fire({
    title: "Delete Experience?",
    text: "This action cannot be undone.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#000",
    cancelButtonColor: "#6b7280",
    confirmButtonText: "Yes, delete it",
    cancelButtonText: "Cancel",
    background: "#fff",
  });

  if (!result.isConfirmed) return;

  try {
    await API.delete(`/delete-experience/${id}`);

    Swal.fire({
      icon: "success",
      title: "Deleted!",
      text: "Experience has been removed.",
      confirmButtonColor: "#000",
    });

    fetchExperiences();
  } catch {
    Swal.fire({
      icon: "error",
      title: "Delete Failed",
      text: "Something went wrong.",
      confirmButtonColor: "#000",
    });
  }
};

    // Edit experience
    const editExperience = (exp: Experience) => {
        setTitle(exp.title);
        setDescription(exp.description);
        setEditingId(exp._id);
    };

    return (
        <AdminLayout>
            <div className="p-6 mt-20">

                <h1 className="text-3xl font-bold mb-6">Manage Experiences</h1>

                {/* ADD / EDIT FORM */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md p-6 rounded-lg mb-10"
                >
                    <h2 className="text-xl font-semibold mb-4">
                        {editingId ? "Edit Experience" : "Add Experience"}
                    </h2>

                    <input
                        type="text"
                        placeholder="Title"
                        className="border p-3 w-full mb-4 rounded"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <textarea
                        placeholder="Description"
                        className="border p-3 w-full mb-4 rounded"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <input
                        type="file"
                        onChange={handleImage}
                        className="mb-4"
                    />

                    <button
                        type="submit"
                        className="bg-black text-white px-6 py-2"
                    >
                        {editingId ? "Update Experience" : "Add Experience"}
                    </button>
                </form>

                {/* EXPERIENCE LIST */}
                <div className="grid md:grid-cols-3 gap-6">
                    {experiences.map((exp) => (
                        <div
                            key={exp._id}
                            className="bg-white shadow rounded-lg overflow-hidden"
                        >
                            <img
                                src={exp.images?.[0]}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{exp.title}</h3>

                                <p className="text-sm text-gray-600 mt-2">
                                    {exp.description}
                                </p>

                                <div className="flex gap-3 mt-4">

                                    <button
                                        onClick={() => editExperience(exp)}
                                        className="bg-black text-white px-4 py-1"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => deleteExperience(exp._id)}
                                        className="bg-black text-white px-4 py-1"
                                    >
                                        Delete
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </AdminLayout>
    );
};

export default AdminAddExperience;