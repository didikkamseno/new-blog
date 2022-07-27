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
import cn from 'classnames';
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
                <div className="pt-4">
      <button onClick={handler} className='px-4 py-2 font-semibold text-gray-800 dark:text-gray-800 bg-gradient-to-br from-header-active-from via-header-active-via to-header-active-to  hover:bg-gradient-to-tr hover:from-header-hover-from hover:via-header-hover-via hover:to-header-hover-to rounded-lg'>Log in</button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Continue to {' '}
            <Text b size={18}>
              Sign the Guestbook
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>  
        <Link
            href="/api/auth/signin/github" passHref>
          <button
            className="font-semibold md:inline-block px-3 py-2 rounded-lg  border-b border-zinc-500 border bg-gradient-to-br from-header-active-from via-header-active-via to-header-active-to  hover:bg-gradient-to-tr hover:from-header-hover-from hover:via-header-hover-via hover:to-header-hover-to"
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
                    <span className="font-semibold text-gray-900 dark:text-gray-900">Log in with Github         
                    </span>
                  </>
                )
          }
          </button>
          </Link>
        <Link
          href="/api/auth/signin/google" passHref>
           <button
              className="font-semibold md:inline-block px-3 py-2 rounded-lg  border-b border-zinc-500 border bg-gradient-to-br from-header-active-from via-header-active-via to-header-active-to  hover:bg-gradient-to-tr hover:from-header-hover-from hover:via-header-hover-via hover:to-header-hover-to"
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
                  <span className="font-semibold text-gray-900 dark:text-gray-900 ml-3">Log in with Google</span> 
                  </>
                  )
            }
           </button>
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
              className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-blue-100 dark:bg-zinc-900 text-gray-900 dark:text-gray-100"
            />
            <button
              className="flex items-center border-b border-zinc-500 border justify-center absolute right-1 bottom-1 px-4 font-medium h-8 hover:dark:text-gray-700 bg-blue-200 dark:bg-gray-800 hover:bg-gradient-to-tr hover:from-header-hover-from hover:via-header-hover-via hover:to-header-hover-to  text-gray-900 dark:text-gray-100 rounded-xl w-28"
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