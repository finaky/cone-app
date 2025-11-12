interface iResourceTabList {
  activeTab: number;
  tabListId: number;
  tabListTitle: string;
  setActiveTab: (tabListId: number) => void;
}

export const ResourcesTablist = ({
  activeTab,
  tabListId,
  tabListTitle,
  setActiveTab,
}: iResourceTabList) => {
  return (
    <li role="presentation">
      <button
        role="tab"
        className={`relative pb-2 cursor-pointer transition-colors  duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-yellow-400 after:origin-center after:scale-x-0 after:transition-transform after:duration-300 ${
          activeTab === tabListId
            ? "text-yellow-400 after:scale-x-100"
            : "text-white hover:text-(--yellow) hover:after:scale-x-100"
        }`}
        aria-selected={activeTab === tabListId}
        aria-controls={`tabpanel-${tabListId}`}
        onClick={() => setActiveTab(tabListId)}
      >
        {tabListTitle}
      </button>
    </li>
  );
};
