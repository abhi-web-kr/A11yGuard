import { useIssues } from "@/context/IssueContext";
import { useRouter } from "next/navigation";

export const ScanSummary = () => {
    const { result } = useIssues();
    const errors = result?.issuesBySeverity;
    const router = useRouter();

    return (
        <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
                Audit Result Summary
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* High Severity Card */}
                <div className="p-4 bg-red-200 dark:bg-red-900/40 border border-red-100 dark:border-red-800 rounded-lg">
                    <p className="text-red-600 dark:text-red-400 font-semibold uppercase text-[15px] tracking-wider">
                        High Impact
                    </p>
                    <p className="text-3xl font-black text-red-700 dark:text-red-300">
                        {errors?.high}
                    </p>
                    <p className="text-sm text-red-500 dark:text-red-400 font-semibold mt-1">
                        Must fix immediately
                    </p>
                </div>

                {/* Medium Severity Card */}
                <div className="p-4 bg-amber-200 dark:bg-amber-900/40 border border-amber-100 dark:border-amber-800 rounded-lg">
                    <p className="text-amber-600 dark:text-amber-400 font-semibold uppercase text-[15px] tracking-wider">
                        Medium Impact
                    </p>
                    <p className="text-3xl font-black text-amber-700 dark:text-amber-300">
                        {errors?.medium}
                    </p>
                    <p className="text-sm text-amber-500 dark:text-amber-400 mt-1 font-semibold">
                        Important improvements
                    </p>
                </div>

                {/* Low Severity Card */}
                <div className="p-4 bg-green-200 dark:bg-green-900/40 border border-blue-100 dark:border-green-800 rounded-lg">
                    <p className="text-green-600 dark:text-green-400 font-semibold uppercase text-[15px] tracking-wider">
                        Low Impact
                    </p>
                    <p className="text-3xl font-black text-green-600 dark:text-green-300">
                        {errors?.low}
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400 mt-1 font-semibold">
                        Minor issues found
                    </p>
                </div>
            </div>

            {/* The "View Details" Button */}
            <div className="mt-6 flex justify-center">
                <button
                    //   onClick={onViewDetails}
                    className="px-6 py-2 bg-slate-900 dark:bg-gray-700 text-white font-medium rounded-full hover:bg-slate-800 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                    onClick={() => router.push("/scan/issue")}
                >
                    View Detailed Error Report
                </button>
            </div>
        </div>
    );
};

export default ScanSummary;
