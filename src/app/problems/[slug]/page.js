import Link from "next/link";
import React from "react";

const questions = [
  {
    number: 201,
    title: "Bitwise AND of Numbers Range",
    slug: "bitwise-and-of-numbers-range",
    description:
      "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
    difficulty: "Medium",
    acceptance: "42%",
    examples: [
      {
        Input: "left = 5, right = 7",
        Output: "4",
      },
      {
        Input: "left = 0, right = 0",
        Output: "0",
      },
      {
        Input: "left = 1, right = 2147483647",
        Output: "0",
      },
    ],
  },
  {
    number: 202,
    title: "Bitwise AND of Numbers Range",
    slug: "bitwise-and-of-numbers-range-II",
    description:
      "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
    difficulty: "Medium",
    acceptance: "412%",
    examples: [
      {
        Input: "left = 5, right = 7",
        Output: "4",
      },
      {
        Input: "left = 0, right = 0",
        Output: "0",
      },
      {
        Input: "left = 1, right = 2147483647",
        Output: "0",
      },
    ],
  },
  {
    number: 203,
    title: "Happy Number",
    slug: "happy-number",
    description:
      "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
    difficulty: "Easy",
    acceptance: "54.9%",
    examples: [
      {
        Input: "left = 5, right = 7",
        Output: "4",
      },
      {
        Input: "left = 0, right = 0",
        Output: "0",
      },
      {
        Input: "left = 1, right = 2147483647",
        Output: "0",
      },
    ],
  },
  {
    number: 345,
    title: "Remove Linked List Elements",
    slug: "remove-linked-list-Element",
    description:
      "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
    difficulty: "Hard",
    acceptance: "42%",
    examples: [
      {
        Input: "left = 5, right = 7",
        Output: "4",
      },
      {
        Input: "left = 0, right = 0",
        Output: "0",
      },
      {
        Input: "left = 1, right = 2147483647",
        Output: "0",
      },
    ],
  },
];

export async function generateMetadata({params}) {
    const slug = params.slug
    const data = questions.find((question) => question.slug === slug)
    return {
        title: data.title
    }
}

const QuestionPage = ({ params }) => {
  const slug = params.slug;
  const data = questions.find((question) => question.slug === slug);
  const page = Math.ceil(data?.number / 5);
  return (
    <div className="w-screen h-screen">
      <div className="flex justify-between items-center px-4 font-semibold mx-auto w-full border-b-2 h-10 bg-slate-300">
        <div>LeetClone</div>
        <div className="">
          <Link
            className="border px-1 rounded-md border-slate-400"
            href={`/problems/prev`}
          >{`<`}</Link>
          <Link href={`/problemset/all/?page=${page}`}>Problems</Link>
          <Link
            className="border px-1 rounded-md border-slate-400"
            href={`/problems/next`}
          >{`>`}</Link>
        </div>

        <div className="flex space-x-3">
          <Link href={"/login"}>Login </Link>
          <p>or</p>
          <Link href={"/register"}>Register </Link>
        </div>
      </div>
      <div className="flex w-screen h-[calc(100%-2.5rem)]">
        <div className="w-1/2 h-full overflow-y-auto text-white bg-slate-700 py-2">
          <div className="px-2">
            <div className="font-semibold text-xl">
              {data.number}. {data.title}
            </div>
            <div>{data.difficulty}</div>
            <div className="text-md mb-5">{data.description}</div>
            {data.examples.map((example, index) => {
              return (
                <div className="mx-1 my-1  text-white" key={index}>
                  <div className="text-md font-semibold">
                    Example {index + 1}:
                  </div>
                  <div className="py-4 px-4 my-4 rounded bg-slate-500">
                    <div className="text-base">
                      <span className="font-semibold">Input:</span>
                      {example.Input}
                    </div>
                    <div className="text-base">
                      <span className="font-semibold">Output:</span>

                      {example.Output}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/2 h-full bg-slate-700">
          <div className="px-1 h-8 flex items-center">
            <select >
              <option className="bg-red-" value="C++">
                C++
              </option>
              <option className="bg-red-" value="Javascript">
                Javascript
              </option>
            </select>
          </div>
          <textarea
           
            className="w-[calc(100%-8px)] h-[calc(100%-5rem)] mx-1 focus:outline-none px-2 py-2 resize-none bg-slate-500 text-white"
          />
          <div className="flex justify-between mx-5 items-center h-10">
            <button className=" bg-slate-500 text-white px-3 pb-0.5 rounded-lg">
              Console
            </button>
            <div className="flex space-x-2 ">
              <button className="bg-slate-500 text-white px-3 pb-0.5 rounded-lg">
                Run
              </button>
              <button className="bg-slate-500 text-white px-3 pb-0.5 rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
