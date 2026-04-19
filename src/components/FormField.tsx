export default function FormField({ field }: { field: { label: string; type: string; options?: string[]; width?: string; rows?: string[][] } }) {
  const widthClass = field.width === "half" ? "md:col-span-1" : field.width === "third" ? "md:col-span-1" : "col-span-2";

  const inputClasses = "w-full border-2 border-dashed border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-gray-50/50 hover:border-primary/30 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors print-field print:border-solid print:border-black print:bg-white print:rounded-none";

  return (
    <div className={widthClass}>
      <label className="block text-sm font-medium text-foreground mb-1.5">
        {field.label}
      </label>
      {field.type === "textarea" ? (
        field.rows ? (
          <table className="w-full text-xs border-collapse print-table">
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
          <textarea
            className={`${inputClasses} min-h-[80px] resize-y`}
            placeholder="Write here..."
            rows={3}
          />
        )
      ) : field.type === "select" && field.options ? (
        <>
          {/* Screen: interactive radio pills */}
          <div className="flex flex-wrap gap-2 print:hidden">
            {field.options.map((option) => (
              <label key={option} className="inline-flex items-center gap-1.5 text-xs border border-gray-300 rounded-full px-3 py-1.5 hover:border-primary/50 hover:bg-primary-light/50 cursor-pointer transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary-light">
                <input type="radio" name={field.label} value={option} className="accent-primary" />
                {option}
              </label>
            ))}
          </div>
          {/* Print: clean checkbox list */}
          <div className="hidden print:block">
            {field.options.map((option) => (
              <label key={option} className="flex items-center gap-2 text-sm py-0.5">
                <span className="inline-block w-3.5 h-3.5 border border-black rounded-sm flex-shrink-0" />
                {option}
              </label>
            ))}
          </div>
        </>
      ) : field.type === "checkbox" ? (
        <div className="flex items-center gap-2">
          <input type="checkbox" className="h-4 w-4 accent-primary rounded print:hidden" />
          <span className="inline-block w-4 h-4 border border-black rounded-sm hidden print:inline-block flex-shrink-0" />
          <span className="text-sm text-muted">Yes</span>
        </div>
      ) : field.type === "date" ? (
        <input
          type="date"
          className={inputClasses}
        />
      ) : field.type === "time" ? (
        <input
          type="time"
          className={inputClasses}
        />
      ) : (
        <input
          type="text"
          className={inputClasses}
          placeholder="Enter text..."
        />
      )}
    </div>
  );
}