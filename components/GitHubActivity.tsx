import { GitHubCalendar } from "react-github-calendar";

const GitHubActivity = () => {
    return (
        <div className="bg-[#0d1117] border border-white/10 rounded-2xl p-3 overflow-x-auto">
            <GitHubCalendar
                username="Pedrofreitas001"
                blockSize={10}
                blockMargin={3}
                fontSize={12}
                colorScheme="dark"
                theme={{
                    dark: [
                        "#161b22", // empty
                        "#0e4429",
                        "#006d32",
                        "#26a641",
                        "#39d353"
                    ]
                }}
            />
        </div>
    );
};

export default GitHubActivity;