import UserProfile from "@/app/ui/UserProfile";
import ProfileNav from "@/app/ui/Navbar/ProfileNav";

export default function page({ children }) {
  return (
    <section className="text-black">
      <div>
        <ProfileNav />
      </div>
      <div>
        <UserProfile />
      </div>
    </section>
  );
}
