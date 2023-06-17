import { ReactNode } from "react";
import Icon from "../../components/Icon";
import { OpenEditorButton } from "../../components/OpenEditorButton";
import EmptyLayout from "./layout";

export default function Page() {
  const openEditor = () => {};
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col justify-center items-center pt-24">
        <h1 className="text-4xl">Welcome to the Bloodnight Web Editor.</h1>
        <div className="h-8"></div>
        <div className="flex flex-col justify-start gap-2">
          <GitHubLink repo="eldoriarpg/bloodnight-editor" />
          <GitHubLink repo="eldoriarpg/blood-night" />
        </div>
        <OpenEditorButton />
      </div>
      <div className="flex flex-row">
        <VersionInformation />
      </div>
    </div>
  );
}

function GitHubLink({ repo }: { repo: string }) {
  return (
    <a href={`https://github.com/${repo}`}>
      <div className="flex flex-row gap-2">
        <Icon icon="devicon:github" width={24} />
        {repo}
      </div>
    </a>
  );
}

function VersionInformation() {
  const suffix = process.env.NODE_ENV === "production" ? "prod" : "devel";
  const commit = process.env.NEXT_PUBLIC_GIT_COMMIT_SHA;
  return (
    <div className="p-4">
      <p>Version: 1.0.0-{suffix}</p>
      {commit !== undefined && (
        <p>
          Commit:{" "}
          <a
            href={`https://github.com/eldoriarpg/bloodnight-editor/commit/${commit}`}
          >
            {commit}
          </a>
        </p>
      )}
    </div>
  );
}
