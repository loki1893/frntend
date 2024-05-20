import ProfileNav from "@/app/ui/Navbar/ProfileNav";
import AdminRegister from "@/app/ui/AdminRegister";
export default function page({ children }) {
  return (
    <>
      <div>
        <ProfileNav />

      </div>
      <div>
        <AdminRegister/>
      </div>
    </>
  );
}
