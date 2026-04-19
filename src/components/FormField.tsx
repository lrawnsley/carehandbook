export default function FormField({ field }: { field: { label: string; type: string; options?: string[]; width?: string; rows?: string[][] } }) {
  const widthClass = field.width === "half" ? "md:col-span-1" : field.width === "third" ? "md:col-span-1" : "col-span-2";

  return (
    <div className={widthClass}>
      <label className="block text-sm font-medium text-foreground mb-1.5">
        {field.label}
      </label>
      {field.type === "textarea" ? (
        <div className="w-full min-h-[80px] border-2 border-dashed border-gray-300 rounded-lg p-3 text-sm text-muted bg-gray-50/50 hover:border-primary/30 transition-colors">
          {field.rows ? (
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr>
                  {field.rows[0]?.map((header, i) => (
                    <th key={i} className="border border-gray-300 px-2 py-1 bg-gray-100 text-left font-medium">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {field.rows.slice(1).map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className="border border-gray-300 px-2 py-1">
                        {cell || " "}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <span className="text-transparent">Write here...</span>
          )}
        </div>
      ) : field.type === "select" && field.options ? (
        <div className="flex flex-wrap gap-2">
          {field.options.map((option) => (
            <label key={option} className="inline-flex items-center gap-1.5 text-xs border border-gray-300 rounded-full px-3 py-1.5 hover:border-primary/50 hover:bg-primary-light/50 cursor-pointer transition-colors">
              <input type="radio" name={field.label} value={option} className="accent-primary" />
              {option}
            </label>
          ))}
        </div>
      ) : field.type === "checkbox" ? (
        <div className="flex items-center gap-2">
          <input type="checkbox" className="h-4 w-4 accent-primary rounded" />
          <span className="text-sm text-muted">Yes</span>
        </div>
      ) : (
        <div className="w-full border-2 border-dashed border-gray-300 rounded-lg px-3 py-2.5 text-sm text-muted bg-gray-50/50 hover:border-primary/30 transition-colors">
          <span className="text-transparent">Enter text...</span>
        </div>
      )}
    </div>
  );
}