import Link from "next/link";
import React from "react";

const problems = [
  {
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",
    slug: "bitwise-and-of-numbers-range"
  },
  {
    title: "202. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "412%",
    slug: "bitwise-and-of-numbers-range-II"
  },
  {
    title: "203. Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%",
    slug: "happy-number"
  },
  {
    title: "345. Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%",
    slug: "remove-linked-list-Element"
  },
];

export function generateMetadata() {
    return {
        title:"Problems - LeetClone"
    }
}

const ProblemsPage = () => {
  return (
    <>
      <nav className="w-screen h-10 bg-slate-400 flex justify-between items-center">
        <div className="max-w-screen-sm w-4/5 items-center justify-between flex mx-auto">
          <Link href={"/problemset/all"}>Problems</Link>
          <div className="flex space-x-3">
            <Link href={"/login"}>Login </Link>
            <p>or</p>
            <Link href={"/register"}>Register </Link>
          </div>
        </div>
      </nav>
      <div className="flex flex-col justify-center w-screen mx-auto">
        <div className="flex font-bold w-full items-center space-x-1 justify-center">
          <div className="basis-80 border-r-2">Title</div>
          <div className="basis-40 border-r-2">Difficulty</div>
          <div className="basis-40">Acceptance</div>
        </div>
        {
            problems.map((problem, index) => {
                return (
                    <div key ={index} className="flex w-full items-center space-x-1 justify-center">
                    <Link href = {`problems/${problem.slug}`} className="basis-80 border-r-2">{problem.title}</Link>
                    <div className="basis-40 border-r-2">{problem.difficulty}</div>
                    <div className="basis-40">{problem.acceptance}</div>
                    </div>
                )
            })
        }
      </div>
    </>
  );
};

export default ProblemsPage;
