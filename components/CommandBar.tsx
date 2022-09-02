import React from 'react'
import { FC, ReactNode, useMemo } from 'react'
import type { ActionImpl, ActionId } from 'kbar'
import { useRouter } from 'next/router'
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  Action,
  useMatches
} from 'kbar'
import { FileText, Home, Box, User, Tool, Mail, Clipboard, AtSign, Twitter, GitHub, Code , Linkedin, BookOpen, Search, Settings } from 'react-feather';
import { useTheme } from 'next-themes';
import clsx from 'classnames';
import { allBlogs, allSnippets } from 'contentlayer/generated';
import { parseISO, format } from 'date-fns';
import type { Blog, Snippet } from 'contentlayer/generated';
import { AnimatePresence , motion } from 'framer-motion'
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
};

export const CommandBar: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter()
  const actions = useMemo(() => {
    let actions: Action[] = [
      // const actions: Action[] = [
      //   {
      //   id: 'blog',
      //   name:  'Blog Posts',
      //   shortcut: [],
      // },
      {
        id: 'homeAction',
        name: 'Home',
        shortcut: ['h'],
        keywords: 'back',
        
        icon: <Home width={16} height={16} />,
        perform: () => router.push('/'),
      },
      // {
      //   id: 'blogAction',
      //   name: 'Blog',
      //           perform: () => router.push('/blog/'),
      //   
      // },
      {
        id: 'guestbookAction',
        name: 'Guestbook',
        shortcut: ['g', 'b'],
        icon: <BookOpen width={16} height={16} />,
        perform: () => router.push('/guestbook/'),
        
      },
      {
        id: 'aboutAction',
        name: 'About me',
        shortcut: ['a'],
        icon: <User width={16} height={16} />,
        perform: () => router.push('/about/'),
        
      },
      {
        id: 'usesAction',
        name: 'Uses',
        shortcut: ['u'],
        icon: <Tool width={16} height={16} />,
        perform: () => router.push('/uses'),
        
      },
      {
        id: 'generalAction',
        name: 'General',
        shortcut: [],
        keywords: 'copy-url change-theme',
        icon: <Settings width={16} height={16} />,
        // parent: 'generalAction',
        // perform: () => navigator.clipboard.writeText(window.location.href),
      },
      {
        id: 'copyAction',
        name: 'Copy URL',
        shortcut: ['u'],
        keywords: 'copy-url',
        parent: 'generalAction',
        icon: <Clipboard width={16} height={16} />,
        perform: () => navigator.clipboard.writeText(window.location.href),
      },
      // {
      //   id: 'changeThemeAction',
      //   name: 'Change Theme',
      //   keywords: 'Dark',
      //   shortcut: [],
      //   parent: 'generalAction',
      //   perform: () =>  setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
      // },
      {
        id: 'socialAction',
        name: 'Social Links',
        shortcut: [],
        icon: <AtSign width={16} height={16} />,
        keywords: 'email social twitter github instagram',
      },
      {
        id: 'emailAction',
        name: 'Email',
        subtitle: 'contact@heykapil.in',
        shortcut: ['e'],
        keywords: 'send-email',
        parent: 'socialAction',
        perform: () => (window.open('mailto:contact@heykapil.in', '_blank')),
        icon: <Mail width={16} height={16} />,
      },
      {
        id: 'githubAction',
        name: 'Github',
        subtitle: '@heykapil',
        shortcut: ['g'],
        keywords: 'go-github',
        parent: 'socialAction',
        perform: () => (window.open('https://github.com/heykapil', '_blank')),
        icon: <GitHub width={16} height={16} />,
      },
      {
        id: 'twitterAction',
        name: 'Twitter',
        subtitle: '@kapiljch',
        shortcut: ['t'],
        keywords: 'go-twitter',
        parent: 'socialAction',
        perform: () => (window.open('https://twitter.com/kapiljch', '_blank')),
        icon: <Twitter width={16} height={16} />,
      },
    ]
    let id = 1
    const mapPosts = (posts: Blog[]) => {
      actions.push({
        id: 'PostsAction',
        name: 'Search Posts...',
        keywords: 'Contentlayer Blog Post List',
        shortcut: [],
        icon: <FileText width={16} height={16} />,
      })
      id++
      for (const post of posts) {
        actions.push({
          id: ('blog-' + id).toString(),
          name: post.title ,
          keywords: post?.summary || '',
          // shortcut: ['b'],
          icon: <FileText width={16} height={16} />,
          parent: 'PostsAction',
          subtitle:  format(parseISO(post.publishedAt), 'MMMM dd, yyyy')|| '',
          perform: () => router.push('/blog/' + post?.slug),
        })
        id++
      }
    }
    const mapSnippets = (snippets: Snippet[]) => {
      actions.push({
        id: 'SnippetAction',
        name: 'Search Snippets...',
        keywords: 'Contentlayer Snippets List',
        shortcut: [],
        icon: <Code width={16} height={16} />,
      })
      id++
      for (const snippet of snippets) {
        actions.push({
          id: ('snippet-' + id).toString(),
          name: snippet.title ,
          keywords: snippet?.description || '',
          parent:  'SnippetAction',
          icon: <Code width={16} height={16} />,
          perform: () => router.push('/snippets/' + snippet?.slug),
        })
        id++
      }
    }
    mapPosts(allBlogs)
    mapSnippets(allSnippets)
    return actions
  }, [router])
  return (
    <AnimatePresence exitBeforeEnter>
    <KBarProvider
      actions={actions}
      options={{
        enableHistory: true
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.1,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.1,
          },
        }} 
        className='' />
      <KBarPortal>
        <KBarPositioner className="fixed inset-0 z-50 animate-overlayShow bg-black bg-opacity-60 backdrop-blur-sm backdrop-filter">
          <KBarAnimator className="w-full max-w-2xl rounded-lg overflow-hidden bg-gray-50 dark:bg-dark" style={animatorStyle}>
            <div className="flex items-center space-x-4 p-4">
                <span className="block">
                  <Search width={20} height={20} />
                </span>
                <KBarSearch className="h-8 w-full bg-transparent text-slate-600 placeholder-slate-400 focus:outline-none dark:text-slate-200 dark:placeholder-slate-500" />
                <span className='bg-gray-200 dark:bg-gray-800 dark:text-white text-black px-3 py-1 rounded-lg'>esc</span>
            </div> 
            <div className="px-3 py-4 border-t border-gray-200">
              <RenderResults />
            </div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
    </AnimatePresence>
  )
}

const RenderResults = () => {
  // const { setTheme, resolvedTheme } = useTheme();
  const { results, rootActionId } = useMatches();

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

const ResultItem = React.forwardRef(({ action, active, currentRootActionId }:
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
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <div
      ref={ref}
      className={clsx(
        'px-4 py-2 flex font-medium items-center justify-between cursor-pointer rounded transition-all duration-200 ease-in-out dark:bg-dark', {
        'rounded-lg bg-gradient-to-r from-rose-100 via-pink-200 to-orange-100 dark:bg-gradient-to-r dark:from-purple-500 dark:via-fuchsia-500 dark:to-pink-500': active
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
              className='rounded-lg bg-gray-200 dark:bg-gray-800 dark:text-white text-black'
              style={{
                padding: "4px 6px",
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

