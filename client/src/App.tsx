import { Toaster } from "react-hot-toast";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Benefits from "./pages/Benefits";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Gallery from "./pages/Gallery";
import Facilities from "./pages/Facilities";
import ExperiencePage from "./pages/ExperiencePage";
import BlogsPage from "./pages/BlogsPage";
import AdminSignup from "./pages/AdminSignup";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProtectedRoute from "./routes/AdminProtectedRoute";
import AdminLogin from "./pages/AdminLogin";
import AdminExperience from "./pages/admin/AdminExperience";
import AdminAvailability from "./pages/admin/AdminAvailability";
import AdminProfile from "./pages/admin/AdminProfile";
import AdminAddExperience from "./components/experience/AdminAddExperience";
import AvailabilityCalendar from "./pages/user/AvailabilityCalendar";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        
        <ScrollToTop /> {/* ✅ FIXED: self-closing */}

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/availability" element={<AvailabilityCalendar />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* ADMIN ROUTES */}
          <Route path="/register" element={<AdminSignup />} />
          <Route path="/admin-portal" element={<AdminLogin />} />

          <Route
            path="/admin/dashboard"
            element={
              <AdminProtectedRoute>
                <AdminDashboard />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/admin/admin-experience"
            element={
              <AdminProtectedRoute>
                <AdminExperience />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/admin/calendar"
            element={
              <AdminProtectedRoute>
                <AdminAvailability />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/admin/profile"
            element={
              <AdminProtectedRoute>
                <AdminProfile />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/admin/add-experience"
            element={
              <AdminProtectedRoute>
                <AdminAddExperience />
              </AdminProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

