import React from 'react'
import type { ActionImpl, ActionId } from 'kbar'
import { useDeepMatches, KBarPortal, KBarPositioner, KBarAnimator, KBarSearch, KBarResults } from 'kbar'
import clsx from 'classnames'

const animatorStyle = {
  maxWidth: '600px',
  width: '100%',
  boxShadow: '0px 6px 20px',
  borderRadius: '8px',
  overflow: 'hidden',
  '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
    WebkitBackdropFilter: 'saturate(300%) blur(25px)',
    backdropFilter: 'saturate(300%) blur(25px)',
  },

  /* Hide scrollbar for Chrome, Safari and Opera */
  '& > div > div::-webkit-scrollbar': {
    display: 'none',
  },

  /* Hide scrollbar for IE, Edge and Firefox */
  '& > div > div': {
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
  },
}

export default function KBarMenu() {
  return (
    <KBarPortal>
      <KBarPositioner className="relative z-50 bg-black bg-opacity-25">
        <KBarAnimator className="rounded-lg overflow-hidden bg-gray-50 dark:bg-dark invisible-scrollbar" style={animatorStyle}>
          <KBarSearch
            className="w-full text-gray-700 box-border outline-none border-none px-7 py-4 bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200"
            placeholder="Type a command to search..." />
          <div className="px-3 py-4 border-t border-gray-200">
            <RenderResults />
          </div>
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  )
}

const RenderResults = () => {
  const { results, rootActionId } = useDeepMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="font-medium px-4 py-2 text-xs dark:bg-dark dark:text-gray-100 text-gray-600">
            {item}
          </div>
        ) : (
          <ResultItem
            action={item}
            active={active}
            currentRootActionId={rootActionId}
          />
        )
      }
    />
  );
}

const ResultItem = React.forwardRef(({action, active, currentRootActionId} :
   {
      action: ActionImpl;
      active: boolean;
      currentRootActionId: ActionId;
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    const ancestors = React.useMemo(() => {
      if (!currentRootActionId) return action.ancestors;
      const index = action.ancestors.findIndex(
        (ancestor) => ancestor.id === currentRootActionId
      );
      // +1 removes the currentRootAction; e.g.
      // if we are on the "Set theme" parent action,
      // the UI should not display "Set theme… > Dark"
      // but rather just "Dark"
      return action.ancestors.slice(index + 1);
    }, [action.ancestors, currentRootActionId]);

    return (
      <div
        ref={ref}
        className={clsx(
          'px-4 py-2 flex font-medium items-center justify-between cursor-pointer rounded transition-all duration-200 ease-in-out dark:bg-dark', {
            'bg-gradient-to-tr from-rose-100 to-orange-100 dark:bg-gradient-to-tr dark:from-rose-700 dark:to-orange-700': active
          }
        )}
      >
        <div className="flex items-center space-x-2">
          {action.icon && action.icon}
          <div className="flex flex-col">
            <div>
              {ancestors.length > 0 &&
                ancestors.map((ancestor) => (
                  <React.Fragment key={ancestor.id}>
                    <span
                      style={{
                        opacity: 0.5,
                        marginRight: 8,
                      }}
                    >
                      {ancestor.name}
                    </span>
                    <span
                      style={{
                        marginRight: 8,
                      }}
                    >
                      &rsaquo;
                    </span>
                  </React.Fragment>
                ))}
              <span>{action.name}</span>
            </div>
            {action.subtitle && (
              <span style={{ fontSize: 12 }}>{action.subtitle}</span>
            )}
          </div>
        </div>
        {action.shortcut?.length ? (
          <div
            aria-hidden
            style={{ display: "grid", gridAutoFlow: "column", gap: "4px" }}
          >
            {action.shortcut.map((sc) => (
              <kbd
                key={sc}
                style={{
                  padding: "4px 6px",
                  background: "rgba(0 0 0 / .1)",
                  borderRadius: "4px",
                  fontSize: 14,
                }}
              >
                {sc}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    )
  }
)
ResultItem.displayName = 'ResultItem'