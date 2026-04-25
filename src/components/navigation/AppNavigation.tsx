type Screen = "login" | "signup" | "dashboard";
type DashboardTab = "invoice" | "reports";

interface AppNavigationProps {
  activeScreen: Screen;
  activeDashboardTab: DashboardTab;
  onScreenChange: (screen: Screen) => void;
  onDashboardTabChange: (tab: DashboardTab) => void;
}

export function AppNavigation({
  activeScreen,
  activeDashboardTab,
  onScreenChange,
  onDashboardTabChange,
}: AppNavigationProps) {
  return (
    <div className="mb-8 space-y-4 no-print">
      <nav className="flex flex-wrap gap-3 rounded-xl bg-white p-3 shadow-sm">
        <NavButton
          isActive={activeScreen === "login"}
          label="Login"
          onClick={() => onScreenChange("login")}
        />
        <NavButton
          isActive={activeScreen === "signup"}
          label="Sign up"
          onClick={() => onScreenChange("signup")}
        />
        <NavButton
          isActive={activeScreen === "dashboard"}
          label="Dashboard"
          onClick={() => onScreenChange("dashboard")}
        />
      </nav>

      {activeScreen === "dashboard" && (
        <nav className="flex flex-wrap gap-3 rounded-xl bg-white p-3 shadow-sm">
          <NavButton
            isActive={activeDashboardTab === "invoice"}
            label="Current Screen"
            onClick={() => onDashboardTabChange("invoice")}
          />
          <NavButton
            isActive={activeDashboardTab === "reports"}
            label="Reports"
            onClick={() => onDashboardTabChange("reports")}
          />
        </nav>
      )}
    </div>
  );
}

interface NavButtonProps {
  isActive: boolean;
  label: string;
  onClick: () => void;
}

function NavButton({ isActive, label, onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-4 py-2 font-medium transition-colors ${
        isActive
          ? "bg-purple-700 text-white"
          : "bg-purple-600 text-gray-800 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
}
