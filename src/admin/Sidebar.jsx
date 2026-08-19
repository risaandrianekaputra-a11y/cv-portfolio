import {
  LayoutDashboard,
  User,
  Brain,
  Briefcase,
  GraduationCap,
  FolderKanban,
  Share2,
  LogOut,
  Home
} from "lucide-react";

function Sidebar({
  activeMenu,
  setActiveMenu,
  handleLogout
}) {
  const menus = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard size={20} />
    },
    {
      id: "profile",
      label: "Profile",
      icon: <User size={20} />
    },
    {
      id: "skills",
      label: "Skills",
      icon: <Brain size={20} />
    },
    {
      id: "experience",
      label: "Experience",
      icon: <Briefcase size={20} />
    },
    {
      id: "education",
      label: "Education",
      icon: <GraduationCap size={20} />
    },
    {
      id: "portfolio",
      label: "Portfolio",
      icon: <FolderKanban size={20} />
    },
    {
      id: "contact",
      label: "Contact & Social",
      icon: <Share2 size={20} />
    }
  ];

  return (
    <aside className="admin-sidebar">

      <div className="sidebar-logo">
        <h2>Portfolio CMS</h2>

        <span>Admin Panel</span>
      </div>

      <nav className="sidebar-menu">

        {menus.map((menu) => (
          <button
            key={menu.id}
            className={
              activeMenu === menu.id
                ? "sidebar-item active"
                : "sidebar-item"
            }
            onClick={() =>
              setActiveMenu(menu.id)
            }
          >
            {menu.icon}

            <span>
              {menu.label}
            </span>
          </button>
        ))}

      </nav>

      <div className="sidebar-bottom">

        <a
          href="/"
          className="sidebar-item"
        >
          <Home size={20} />

          <span>
            Lihat Website
          </span>
        </a>

        <button
          className="sidebar-item logout"
          onClick={handleLogout}
        >
          <LogOut size={20} />

          <span>
            Logout
          </span>
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;