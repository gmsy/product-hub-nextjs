"use client";

export default function RightSidebar() {
  return (
    <aside className="w-64 flex-shrink-0 border-l border-[rgb(var(--border-color))] hidden lg:block">
      <div className="px-4 py-4">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-[rgb(var(--text-primary))] mb-4">
            Sponsored
          </h2>
          <div className="bg-white dark:bg-[rgb(var(--hover-bg))] rounded-xl p-4 text-center mb-3 shadow-sm">
            <p className="text-sm text-[rgb(var(--text-secondary))]">
              Advertisement
            </p>
            <div className="h-32 flex items-center justify-center border border-dashed border-[rgb(var(--border-color))] rounded-lg my-2">
              <p className="text-[rgb(var(--text-secondary))]">Ad Space</p>
            </div>
            <p className="text-xs text-[rgb(var(--text-secondary))]">
              Try our premium tools
            </p>
          </div>
          <div className="bg-white dark:bg-[rgb(var(--hover-bg))] rounded-xl p-4 text-center shadow-sm">
            <p className="text-sm text-[rgb(var(--text-secondary))]">
              Advertisement
            </p>
            <div className="h-48 flex items-center justify-center border border-dashed border-[rgb(var(--border-color))] rounded-lg my-2">
              <p className="text-[rgb(var(--text-secondary))]">Ad Space</p>
            </div>
            <p className="text-xs text-[rgb(var(--text-secondary))]">
              Premium productivity tools
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold text-[rgb(var(--text-primary))] mb-4">
            Trending Topics
          </h2>
          <ul className="space-y-3">
            {[
              "Remote Work",
              "Time Management",
              "Focus Techniques",
              "Automation Tools",
              "Team Collaboration",
            ].map((topic) => (
              <li key={topic} className="flex items-center">
                <span className="mr-2 text-primary-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-[rgb(var(--text-primary))] hover:text-primary-500 cursor-pointer">
                  {topic}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[rgb(var(--text-primary))] mb-4">
            Who to Follow
          </h2>
          <ul className="space-y-4">
            {[
              { name: "Productivity Tips", handle: "@prodtips" },
              { name: "Work Smart", handle: "@worksmart" },
              { name: "Focus Master", handle: "@focusmaster" },
            ].map((profile) => (
              <li
                key={profile.handle}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-3">
                    <span className="text-primary-700 dark:text-primary-300 text-xs font-bold">
                      {profile.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-[rgb(var(--text-primary))]">
                      {profile.name}
                    </p>
                    <p className="text-sm text-[rgb(var(--text-secondary))]">
                      {profile.handle}
                    </p>
                  </div>
                </div>
                <button className="text-xs font-medium bg-[rgb(var(--text-primary))] text-[rgb(var(--card-bg))] rounded-full px-3 py-1">
                  Follow
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
