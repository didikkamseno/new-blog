import { Fragment } from "react"
// import Description from "@components/Description"
// import LinkPreview from "@components/LinkPreview"
// import classNames from "@lib/classNames"
import secrets from "lib/research";
// import TransitionPage from "@components/TransitionPage"
import Link from 'next/link';
import Container from 'components/Container';
import classNames from "classnames";
import LinkPreview from "components/LinkPreview";
const headerStyling =
"uppercase text-left text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 whitespace-nowrap"
const rowStyling = "p-3 text-gray-700 dark:text-gray-300 text-sm whitespace-nowrap"

export default function Research() {
    return (
    <Container title="Research - Kapil Chaudhary">
        <div className="justify-center items-start w-full max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Research
        </h1>
      <div className="mt-8 ml-5 overflow-x-auto overflow-y-hidden rounded-lg border shadow-lg border-divider md:ml-0">
        <table className="w-full max-w-2x1 table-auto">
          <thead className="bg-gray-50 glass dark:bg-gray-900">
            <tr className="border-b border-divider">
              <th className={classNames(headerStyling, "px-3 py-5")}>Articles</th>
              <th className={classNames(headerStyling, "px-3 py-5")}>Co-authors</th>
              <th className={classNames(headerStyling, "px-3 py-5")}>Description</th>
            </tr>
          </thead>
          <tbody>
            {secrets.map((website, index) => (
              <Fragment key={website.name}>
                <tr className="absolute">
                  <td className="absolute -left-11 flex h-12 w-11 flex-col items-center justify-center p-0 pr-3">
                    <aside className={classNames("divider-y", index === 0 ? "opacity-0" : "")} />
                    {website.year && <aside className={classNames(headerStyling, "py-1")}>{website.year}</aside>}
                    <aside className={classNames("divider-y", index + 1 === secrets.length ? "opacity-0" : "")} />
                  </td>
                </tr>
                <tr
                  className={classNames(
                    index % 2 === 0 ? "bg-gray-200 dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-900",
                    "glass"
                  )}
                >
                  <td className={rowStyling}>
                    <LinkPreview href={website.href}>
                      {website.name}
                      </LinkPreview> 
                  </td>
                  <td className={rowStyling}>{website.coauthor}</td>
                  <td className={rowStyling}>{website.description}</td>
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </Container>
    )
}