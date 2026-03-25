export default function ServiceCard({ title, description }) {
  return (
    <div className="group relative bg-[#111] border border-gray-800 rounded-2xl p-6 transition hover:border-gray-600 hover:-translate-y-1">

      {/* Top number indicator */}
      <span className="text-gray-500 text-sm">01</span>

      {/* Title */}
      <h3 className="text-xl font-semibold mt-4 group-hover:translate-x-1 transition">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted mt-3">
        {description}
      </p>

      {/* Arrow */}
      <div className="mt-6 text-gray-500 group-hover:translate-x-1 transition">
        →
      </div>
    </div>
  );
}