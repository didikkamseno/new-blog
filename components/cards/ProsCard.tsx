export default function ProsCard({ title, pros }) {
  return (
    <div className="border border-teal-300 dark:border-teal-700 bg-green-100 dark:bg-green-900 rounded-xl p-6 my-4 w-full">
      <span className="text-lg font-bold font-sans">{`${title}`} ...</span>
      <div className="mt-4">
        {pros.map((pro) => (
          <div key={pro} className="flex font-medium items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
              <svg className="h-4 w-4 text-green-500" viewBox="0 0 24 24">
                <g
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </g>
              </svg>
            </div>
            <span>{pro}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
