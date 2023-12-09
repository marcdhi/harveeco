"use client";
const items = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
    date: "Jan 21, 2021",
  },
];

export function DataOptions() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-gray-100 rounded-lg shadow-md" key={item.id}>
          <h3>{item.label}</h3>
          <p>{item.date}</p>
        </div>
      ))}
    </div>
  );
}
