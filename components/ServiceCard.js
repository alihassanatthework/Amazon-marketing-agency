export default function ServiceCard({ title, description }) {
  return (
    <div className="card group cursor-pointer">
      <h3 className="text-xl font-semibold transition group-hover:translate-x-1">
        {title}
      </h3>

      <p className="text-muted mt-3">
        {description}
      </p>

      {/* subtle arrow effect */}
      <div className="mt-4 text-sm text-gray-400 group-hover:translate-x-1 transition">
        →
      </div>
    </div>
  );
}