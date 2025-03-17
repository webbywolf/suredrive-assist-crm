import { cn } from "@/lib/utils";
import { useLogoutMutation } from "@/queries/authQueries";
import { LogOut } from "lucide-react";


const LogoutButton = () => {

    const isCollapsed = false
    const { mutate: handleLogout, } = useLogoutMutation(); 
    
  return <button
  className={cn(`w-full px-4 py-3 flex items-center rounded-md cursor-pointer`, {
    "justify-center hover:bg-gray-200": isCollapsed,
    "hover:bg-gray-100": !isCollapsed,
  })}
  onClick={() => handleLogout()}
>
    
  <LogOut size={20} />
  {!isCollapsed && <span className="ml-3">Logout</span>}
</button>;
};

export default LogoutButton;