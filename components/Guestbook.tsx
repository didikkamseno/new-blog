import React from "react";
import Image from "next/image";
import { useState, useRef, Suspense } from 'react';
import { format } from 'date-fns';
import { signIn, signOut, useSession } from 'next-auth/react';
import useSWR, { useSWRConfig } from 'swr';
import Link from 'next/link'
import fetcher from 'lib/fetcher';
import { FormState, Form } from 'lib/types';
import SuccessMessage from 'components/SuccessMessage';
import ErrorMessage from 'components/ErrorMessage';
// import LoadingSpinner from 'components/LoadingSpinner';
import { Modal, Input, Row, Checkbox, Button, Text, Loading, Textarea } from "@nextui-org/react";

function GuestbookEntry({ entry, user }) {
  const { mutate } = useSWRConfig();
  const deleteEntry = async (e) => {
    e.preventDefault();

    await fetch(`/api/guestbook/${entry.id}`, {
      method: 'DELETE'
    });

    mutate('/api/guestbook');
  };

  return (
    <>
    <div className="flex flex-col space-y-2">
      <div className="prose dark:prose-dark w-full">{entry.body}</div>
      <div className="flex items-center space-x-1">
        <p className="text-sm text-gray-500">{entry.created_by}</p>
        <span className=" text-gray-200 dark:text-gray-800">•</span>
        <p className="text-sm text-gray-400 dark:text-gray-600">
          {format(new Date(entry.updated_at), "d MMM yyyy 'at' h:mm bb")}
        </p>
        {user && entry.created_by === user.name && entry.email === user.email && (
          <>
            <span className="text-gray-200 dark:text-gray-800">•</span>
            <button
              className="text-sm text-red-600 dark:text-red-400"
              onClick={deleteEntry}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
    </>
  );
}

export default function Guestbook({ fallbackData }) {
  const { data: session } = useSession();
  const [isLoadingGoogle, setIsLoadingGoogle] = useState<boolean>();
  const [isLoadingGithub, setIsLoadingGithub] = useState<boolean>();
  const { mutate } = useSWRConfig();
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef(null);
  const { data: entries } = useSWR('/api/guestbook', fetcher, {
    fallbackData
  });
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const leaveEntry = async (e) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const res = await fetch('/api/guestbook', {
      body: JSON.stringify({
        body: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: Form.Error,
        message: error
      });
      return;
    }

    inputEl.current.value = '';
    mutate('/api/guestbook');
    setForm({
      state: Form.Success,
      message: `Hooray! Thanks for signing my Guestbook.`
    });
  };

  return (
    <>
      <div className="border border-blue-300 rounded p-6 my-4 w-full dark:border-gray-500 bg-blue-50 dark:bg-dark">
        <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
          Sign my Guestbook
        </h5>
        {!session && (
            <>
                <div>
      <button color="success" onClick={handler} className="text-gray-900 mt-2 mb-2 dark:text-gray-100">
        Log in
      </button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Log in to {' '}
            <Text b size={18}>
              Sign the Guestbook
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>  
        <Link
            href="/api/auth/signin/github" passHref>
           <Button shadow color="gradient" auto
                            onClick={() => {
                            signIn('github');
                            setIsLoadingGithub(true);
                          }}
                        >
                          {isLoadingGithub ? (
                          <>
                          <Loading color="secondary" size="sm" />
                          </>
                            ) : (
                                   <> 
                                    <span className="text-gray-900 dark:text-gray-100 ml-3"> Log in with Github </span> 
                                   <svg className='fill-current w-5 h-5 mr-3 mb-1' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path fill='currentColor' d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>                           
                                   </>
                               )
                          }
            </Button>
          </Link>
        <Link
            href="/api/auth/signin/google" passHref>
           <Button shadow color="gradient" auto
                            onClick={() => {
                            signIn('google');
                            setIsLoadingGoogle(true);
                          }}
                        >
                          {isLoadingGoogle ? (
                          <>
                          <Loading color="secondary" size="sm" />
                          </>
                            ) : (
                                   <> 
                                    <span className="text-gray-900 dark:text-gray-100 ml-3"> Log in with Google </span> 
                                     <svg  className='fill-current w-4 h-4 mr-3 mb-1' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google</title><path fill='currentColor' d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
  
                                   </>
                               )
                          }
            </Button>
          </Link>
        </Modal.Body>
        <Modal.Footer>
        <span className="my-1 text-gray-800 dark:text-gray-200">
         Your information is used only to display your name and reply via mail. No spam, no ads, nothing else.
        </span>
        </Modal.Footer>
      </Modal>
    </div>         
        </>
        )}
        {session?.user && (
          <>
          <form className="relative my-4" onSubmit={leaveEntry}>
            <textarea
              ref={inputEl}
              aria-label="Your message"
              placeholder="Your message..."
              rows={3}
              required
              className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
            <button
              className="flex items-center justify-center absolute right-1 bottom-4 px-4 pt-1 font-medium h-8 bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded w-28"
              type="submit"
            >
              {form.state === Form.Loading ? <Loading color="success" type="points" size="sm" /> : 'Sign'}
            </button>
          </form>
          <div className="flex justify-between">
          <p>Logged in as  {' '} 
          {/* <Image className="rounded-full" width={20} height={20} src={session.user.image} alt={session.user.name} /> */}
          <span className="text-green-500"> {session.user.name}</span></p><button className="text-pink-500 gap-1" onClick={() => signOut()}>Log out</button>
          </div>
          </>
        )}
        {form.state === Form.Error ? (
          <ErrorMessage>{form.message}</ErrorMessage>
        ) : form.state === Form.Success ? (
          <SuccessMessage>{form.message}</SuccessMessage>
        ) : (
          <p className="text-gray-900 dark:text-gray-100 mt-2"> No spam, no ads, nothing bs.
          </p>
        )}
      </div>
      <div className="mt-4 space-y-8">
        <Suspense fallback={null}>
          {entries?.map((entry) => (
            <GuestbookEntry key={entry.id} entry={entry} user={session?.user} />
          ))}
        </Suspense>
      </div>
    </>
  );
}