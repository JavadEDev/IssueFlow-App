export default function NewIssueSkeleton() {
  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8">
                      <div className="inline-flex items-center text-sm mb-4">
            <div className="h-4 w-4 bg-gray-300 dark:bg-gray-600 rounded mr-1" />
            <div className="h-4 w-24 bg-gray-300 dark:bg-gray-600 rounded" />
          </div>
    <div className="h-8 w-64 bg-gray-300 mb-6 dark:bg-gray-600 rounded" />

    <div className="bg-white dark:bg-dark-elevated border border-gray-200 dark:border-dark-border-default rounded-lg shadow-sm p-6 ">
    <div className="animate-pulse space-y-6">
      <div className="space-y-2">
        <div className="h-4 w-16 bg-gray-300 dark:bg-gray-600 rounded" />
        <div className="h-10 w-full bg-gray-300 dark:bg-gray-600 rounded" />
      </div>

      <div className="space-y-2">
        <div className="h-4 w-24 bg-gray-300 dark:bg-gray-600 rounded" />
        <div className="h-24 w-full bg-gray-300 dark:bg-gray-600 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="h-4 w-16 bg-gray-300 dark:bg-gray-600 rounded" />
          <div className="h-10 w-full bg-gray-300 dark:bg-gray-600 rounded" />
        </div>
        <div className="space-y-2">
          <div className="h-4 w-20 bg-gray-300 dark:bg-gray-600 rounded" />
          <div className="h-10 w-full bg-gray-300 dark:bg-gray-600 rounded" />
        </div>
      </div>

      <div className="flex justify-end gap-2 mt-6">
        <div className="h-10 w-20 bg-gray-300 dark:bg-gray-600 rounded-md" />
        <div className="h-10 w-28 bg-gray-300 dark:bg-gray-600 rounded-md" />
      </div>
    </div>
    </div>
  </div>
    
  )
}